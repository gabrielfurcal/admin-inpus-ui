import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useSaveTimezoneMutation, useGetTimezoneByIdQuery } from "../../graphql/schema";
import { Input, Button } from "../../components/Form";
import { usePageTitle } from "../../contexts/PageTitleContext";
import { toast } from 'react-toastify';
import { DevTool } from '@hookform/devtools';
import { DEFAULT_REF_VALUE } from '../../constants';

type FormValues = {
    name: string;
    region: string;
}

export const EditTimezone: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const numericId = id ? parseInt(id) : undefined;
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [_error, setError] = useState<string>();
    const { loading, data, error } = useGetTimezoneByIdQuery({variables: { id: numericId! }});
    const [saveTimezone] = useSaveTimezoneMutation();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState, setValue } = useForm<FormValues>();
    const { errors: formErrors } = formState;

    useEffect(() => {
        setTitle('Edit Timezone');
    }, [setTitle]);

    useEffect(() => {
        if(data && !isSaved) {
            setValue('name', data.timezoneById?.name || '');
            setValue('region', data.timezoneById?.region || '');
        }

        if(isSaved) {
            toast.success('Timezone saved', {
                theme: 'light'
            });
            setIsSaved(false);
            navigate('/timezones');
        }

        if(_error) {
            toast.error(_error, {
                theme: 'light'
            })
        }
    }, [data, _error, isSaved, navigate, setValue]);

    const _handleSubmit: any = async (data: FormValues) => {
        const timezoneToSave = { id, ...data };

        try {
            const result = await saveTimezone({ variables: { timezone: { ...timezoneToSave } } });

            if(result.error) {
                throw new Error(result.error.message);
            } else {
                setIsSaved(true);
            }
        } catch(err) {
            if(err instanceof Error) {
                setError(err.message);
            }
        }
    }

    if(loading) return <p>Fetching timezone...</p>

    if(error) return <p>Error: {error.message}</p>

    return (
        <>
            <form onSubmit={handleSubmit(_handleSubmit)}>
                <Input {...register('name', { required: 'Name is required' })} defaultValue={DEFAULT_REF_VALUE} label='Name' placeholder='Insert name' errorMessage={formErrors.name?.message} />
                <Input {...register('region', { required: 'Region is required' })} defaultValue={DEFAULT_REF_VALUE} label='Region' placeholder='Insert region' errorMessage={formErrors.region?.message} />
                <Button type='submit' text='Save'/>
            </form>
            <DevTool control={control} />
        </>
    );
};