import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { EmployeeInput, useGetEmployeeByIdQuery, useSaveEmployeeMutation } from '../../graphql/schema';
import { Input, Button } from '../../components/Form';
import { usePageTitle } from '../../contexts/PageTitleContext';
import { toast } from 'react-toastify';
import { ApolloError } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { DEFAULT_REF_VALUE } from '../../constants';

type FormValues = {
    firstName: string;
    lastName: string;
    position: string;
    phoneNumber: string;
    email: string;
}

export const EditEmployee: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const numericId = id ? parseInt(id) : undefined;
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [_error, setError] = useState<string>();
    const { loading, data, error } = useGetEmployeeByIdQuery({variables: { id: numericId! }});
    const [saveEmployee] = useSaveEmployeeMutation();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState, setValue } = useForm<FormValues>();
    const { errors: formErrors } = formState;

    useEffect(() => {
        setTitle('Edit employee');
    }, [setTitle]);

    useEffect(() => {
        if(data && !isSaved) {
            setValue('firstName', data.employeeById?.firstName || '');
            setValue('lastName', data.employeeById?.lastName || '');
            setValue('position', data.employeeById?.position || '');
            setValue('phoneNumber', data.employeeById?.phoneNumber || '');
            setValue('email', data.employeeById?.email || '');
        }

        if(isSaved) {
            toast.success('Employee saved', {
                theme: 'light'
            });
            setIsSaved(false);
            navigate('/employees');
        }

        if(_error) {
            toast.error(_error, {
                theme: 'light'
            })
        }
    }, [data, _error, isSaved, navigate, setValue]);

    const _handleSubmit: any = async (data: FormValues) => {
        const employeeToSave: EmployeeInput = { id, ...data };

        try {
            const result = await saveEmployee({ variables: { employee: employeeToSave }});

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

    if(loading) return <p>Fetching employee...</p>

    if(error) return <p>Error: {error.message}</p>

    return (
        <>
            <form onSubmit={handleSubmit(_handleSubmit)}>
                <Input {...register('firstName', { required: 'First Name is required' })} defaultValue={DEFAULT_REF_VALUE} label='First Name' placeholder='Insert first name' errorMessage={formErrors.firstName?.message} />
                <Input {...register('lastName', { required: 'Last Name is required' })} defaultValue={DEFAULT_REF_VALUE} label='Last Name' placeholder='Insert last name' errorMessage={formErrors.lastName?.message} />
                <Input {...register('position', { required: 'Position is required' })} defaultValue={DEFAULT_REF_VALUE} label='Position' placeholder='Insert position' errorMessage={formErrors.position?.message} />
                <Input {...register('phoneNumber', { required: 'Phone Number is required' })} defaultValue={DEFAULT_REF_VALUE} label='Phone Number' placeholder='Insert phone number' errorMessage={formErrors.phoneNumber?.message} />
                <Input {...register('email', { required: 'Email is required' })} defaultValue={DEFAULT_REF_VALUE} type='email' label='Email' placeholder='Insert email' errorMessage={formErrors.email?.message} />
                <Button type='submit' text='Save'/>
            </form>
            <DevTool control={control} />
        </>
    )
};