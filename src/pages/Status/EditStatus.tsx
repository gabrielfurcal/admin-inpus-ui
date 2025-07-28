import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { StatusInput, useGetStatusByIdQuery, useSaveStatusMutation } from '../../graphql/schema';
import { Input, Button } from '../../components/Form';
import { usePageTitle } from '../../contexts/PageTitleContext';
import { toast } from 'react-toastify';
import { ApolloError } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { DEFAULT_REF_VALUE } from '../../constants';

type FormValues = {
    name: string;
    description: string;
}

export const EditStatus: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const numericId = id ? parseInt(id) : undefined;
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [_error, setError] = useState<string>();
    const { loading, data, error } = useGetStatusByIdQuery({variables: { id: numericId! }});
    const [saveStatus] = useSaveStatusMutation();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState, setValue } = useForm<FormValues>();
    const { errors: formErrors } = formState;

    useEffect(() => {
        setTitle('Edit employee');
    }, [setTitle]);

    useEffect(() => {
        if(data && !isSaved) {
            setValue('name', data.statusById?.name || '');
            setValue('description', data.statusById?.description || '');
        }

        if(isSaved) {
            toast.success('Status saved', {
                theme: 'light'
            });
            setIsSaved(false);
            navigate('/status');
        }

        if(_error) {
            toast.error(_error, {
                theme: 'light'
            })
        }
    }, [data, _error, isSaved, navigate, setValue]);

    const _handleSubmit: any = async (data: FormValues) => {
        const statusToSave: StatusInput = { id, ...data };

        try {
            const result = await saveStatus({ variables: { status: statusToSave }});

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
    }

    if(loading) return <p>Fetching status...</p>

    if(error) return <p>Error: {error.message}</p>

    return (
        <>
            <form onSubmit={handleSubmit(_handleSubmit)}>
                <Input {...register('name', { required: 'Name is required' })} defaultValue={DEFAULT_REF_VALUE} label='Name' placeholder='Insert name' errorMessage={formErrors.name?.message} />
                <Input {...register('description', { required: 'Description is required' })} defaultValue={DEFAULT_REF_VALUE} label='Description' placeholder='Insert description' errorMessage={formErrors.description?.message} />
                <Button type='submit' text='Save'/>
            </form>
            <DevTool control={control} />
        </>
    )
};