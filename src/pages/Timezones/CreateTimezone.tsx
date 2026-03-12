import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSaveTimezoneMutation } from "../../graphql/schema";
import { Input, Button } from "../../components/Form";
import { usePageTitle } from "../../contexts/PageTitleContext";
import { toast } from 'react-toastify';
import { DevTool } from '@hookform/devtools';

type FormValues = {
    name: string;
    region: string;
}

export const CreateTimezone: React.FC = () => {
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const [saveTimezone] = useSaveTimezoneMutation();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState } = useForm<FormValues>();
    const { errors: formErrors } = formState;
    
    useEffect(() => {
        setTitle('Create Timezone');
    }, [setTitle]);

    useEffect(() => {
        if(isSaved) {
            toast.success('Timezone created', {
                theme: 'light'
            });
            setIsSaved(false);
            navigate('/timezones');
        }

        if(error) {
            toast.error(error, {
                theme: 'light'
            })
        }

    }, [error, isSaved, navigate, setTitle]);

    const _handleSubmit: any = async (data: FormValues) => {
        const timezone = { ...data };

        try {
            const result = await saveTimezone({ variables: { timezone: { ...timezone } } });

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
    };

    return (
        <>
            <form onSubmit={handleSubmit(_handleSubmit)}>
                <Input {...register('name', { required: 'Name is required' })} label='Name' placeholder='Insert name' errorMessage={formErrors.name?.message} />
                <Input {...register('region', { required: 'Region is required' })} label='Region' placeholder='Insert region' errorMessage={formErrors.region?.message} />
                <Button type='submit' text='Save'/>
            </form>
            <DevTool control={control} />
        </>
    );
};