import React, { useEffect, useState } from 'react'
import { EmployeeInput, useSaveEmployeeMutation } from '../../graphql/schema';
import { Input, Button } from '../../components/Form';
import { usePageTitle } from '../../contexts/PageTitleContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ApolloError } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

type FormValues = {
    firstName: string;
    lastName: string;
    position: string;
    phoneNumber: string;
    email: string;
}

export const CreateEmployee: React.FC = () => {
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const [saveEmployee] = useSaveEmployeeMutation();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState } = useForm<FormValues>();
    const { errors: formErrors } = formState;
    
    useEffect(() => {
        setTitle('Create employee');
    }, [setTitle]);

    useEffect(() => {
        if(isSaved) {
            toast.success('Employee created', {
                theme: 'light'
            });
            setIsSaved(false);
            navigate('/employees');
        }

        if(error) {
            toast.error(error, {
                theme: 'light'
            })
        }

    }, [error, isSaved, navigate, setTitle]);

    const _handleSubmit: any = async (data: FormValues) => {
        const employee: EmployeeInput = { ...data };

        try {
            const result = await saveEmployee({ variables: {employee: { ...employee }} });

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
                <Input {...register('firstName', { required: 'First Name is required' })} label='First Name' placeholder='Insert first name' errorMessage={formErrors.firstName?.message} />
                <Input {...register('lastName', { required: 'Last Name is required' })} label='Last Name' placeholder='Insert last name' errorMessage={formErrors.lastName?.message} />
                <Input {...register('position', { required: 'Position is required' })} label='Position' placeholder='Insert position' errorMessage={formErrors.position?.message} />
                <Input {...register('phoneNumber', { required: 'Phone Number is required' })} label='Phone Number' placeholder='Insert phone number' errorMessage={formErrors.phoneNumber?.message} />
                <Input {...register('email', { required: 'Email is required' })} type='email' label='Email' placeholder='Insert email' errorMessage={formErrors.email?.message} />
                <Button type='submit' text='Save'/>
            </form>
            <DevTool control={control} />
        </>
    )
};