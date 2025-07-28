import React, { useEffect, useState } from 'react'
import { StatusInput, useSaveStatusMutation } from '../../graphql/schema';
import { Input, Button } from '../../components/Form';
import { usePageTitle } from '../../contexts/PageTitleContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ApolloError } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

type FormValues = {
    name: string;
    description: string;
}

export const CreateStatus: React.FC = () => {
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const [saveStatus] = useSaveStatusMutation();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState } = useForm<FormValues>();
    const { errors: formErrors } = formState;
    
    useEffect(() => {
        setTitle('Create status');
    }, [setTitle]);

    useEffect(() => {
        if(isSaved) {
            toast.success('Status created', {
                theme: 'light'
            });
            setIsSaved(false);
            navigate('/status');
        }

        if(error) {
            toast.error(error, {
                theme: 'light'
            })
        }

    }, [error, isSaved, navigate, setTitle]);

    const _handleSubmit: any = async (data: FormValues) => {
        const status: StatusInput = { ...data };

        try {
            const result = await saveStatus({ variables: {status: { ...status }} });

            if(result.errors) {
                throw new Error(result.errors.map((err) => err.message).join(','));
            } else {
                setIsSaved(true);
            }
        } catch(err) {
            if(err instanceof ApolloError || err instanceof Error) {
                setError(err.message);
            }
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(_handleSubmit)}>
                <Input {...register('name', { required: 'Name is required' })} label='Name' placeholder='Insert name' errorMessage={formErrors.name?.message} />
                <Input {...register('description', { required: 'Description is required' })} label='Description' placeholder='Insert description' errorMessage={formErrors.description?.message} />
                <Button type='submit' text='Save'/>
            </form>
            <DevTool control={control} />
        </>
    )
};