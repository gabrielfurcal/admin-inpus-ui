import { DevTool } from '@hookform/devtools';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { createUser } from '../../api/user';
import { Button, Input } from '../../components/Form';
import { usePageTitle } from '../../contexts/page-title/PageTitleContext';
import { User } from '../../types/security';

type FormValues = {
    email: string;
    password: string;
}

export const CreateUser: React.FC = () => {
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState } = useForm<FormValues>();
    const { errors: formErrors } = formState;
    
    useEffect(() => {
        setTitle('Create user');
    }, [setTitle]);

    useEffect(() => {
        if(isSaved) {
            toast.success('User created', {
                theme: 'light'
            });
            setIsSaved(false);
            navigate('/users');
        }

        if(error) {
            toast.error(error, {
                theme: 'light'
            })
        }

    }, [error, isSaved, navigate, setTitle]);

    const _handleSubmit: any = async (data: FormValues) => {
        const user: User = { ...data };

        try {
            const result = await createUser(user);

            if(result.status !== 201) {
                throw new Error(result.statusText);
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
                <Input {...register('email', { required: 'First Name is required' })} label='Email' placeholder='Insert email' errorMessage={formErrors.email?.message} />
                <Input {...register('password', { required: 'Password is required' })} type='password' label='Password' placeholder='Insert password' errorMessage={formErrors.password?.message} />
                <Button type='submit' text='Save'/>
                &nbsp;&nbsp;
                <Button type='button' text='Back' handleClick={() => navigate("/users")}/>
            </form>
            <DevTool control={control} />
        </>
    )
};