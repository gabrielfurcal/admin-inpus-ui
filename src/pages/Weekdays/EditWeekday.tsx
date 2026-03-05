import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useGetWeekdayByIdQuery, useSaveWeekdayMutation } from '../../graphql/schema';
import { Input, Button } from '../../components/Form';
import { usePageTitle } from '../../contexts/PageTitleContext';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { DEFAULT_REF_VALUE } from '../../constants';

type FormValues = {
    name: string;
}

export const EditWeekday: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const numericId = id ? parseInt(id) : undefined;
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [_error, setError] = useState<string>();
    const { loading, data, error } = useGetWeekdayByIdQuery({variables: { id: numericId! }});
    const [saveWeekday] = useSaveWeekdayMutation();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState, setValue } = useForm<FormValues>();
    const { errors: formErrors } = formState;

    useEffect(() => {
        setTitle('Edit Weekday');
    }, [setTitle]);

    useEffect(() => {
        if(data && !isSaved) {
            setValue('name', data.weekdayById?.name || '');
        }

        if(isSaved) {
            toast.success('Weekday saved', {
                theme: 'light'
            });
            setIsSaved(false);
            navigate('/weekdays');
        }

        if(_error) {
            toast.error(_error, {
                theme: 'light'
            })
        }
    }, [data, _error, isSaved, navigate, setValue]);

    const _handleSubmit: any = async (data: FormValues) => {
        const weekdayToSave = { id, ...data };

        try {
            const result = await saveWeekday({ variables: { weekday: { ...weekdayToSave } } });

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

    if(loading) return <p>Fetching weekday...</p>

    if(error) return <p>Error: {error.message}</p>

    return (
        <>
            <form onSubmit={handleSubmit(_handleSubmit)}>
                <Input {...register('name', { required: 'Name is required' })} defaultValue={DEFAULT_REF_VALUE} label='Name' placeholder='Insert name' errorMessage={formErrors.name?.message} />
                <Button type='submit' text='Save'/>
            </form>
            <DevTool control={control} />
        </>
    );
};