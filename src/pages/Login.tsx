import { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify'
import { useApolloClient } from '@apollo/client/react';

import { loginUser } from '../api/user';
import { Button, Input } from '../components/Form';
import { useAuth } from "../contexts/auth/AuthContext";
import { usePageTitle } from '../contexts/page-title/PageTitleContext';
import { decodeJwtPayload } from '../hooks/utils';
import { getEmployeeForCurrentUser } from '../api/employee';

type FormValues = {
    email: string;
    password: string;
}

type UserInfo = {
    Email: string;
    ID: string;
    Permissions: string[];
}

export const Login: React.FC = () => {
    const [error, setError] = useState<string>();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const apolloClient = useApolloClient();
    const { register, handleSubmit, formState } = useForm<FormValues>();
    const { errors: formErrors } = formState;
    const { login, logout } = useAuth();

    useEffect(() => {
        setTitle('Login');
    }, [setTitle]);

    useEffect(() => {
        logout();
    }, []);

    useEffect(() => {
        if(error) {
            toast.error(error, {
                theme: 'light'
            })
            setError("");
        }
    }, [error, setError]);

    const _handleSubmit: any = async (data: FormValues) => {
        try {
            const loginResponse = await loginUser(data);
            const userData: UserInfo = decodeJwtPayload(loginResponse.data.jwt);
            const employeeData = await getEmployeeForCurrentUser(apolloClient, userData.ID);
            const userFullname = employeeData ? `${employeeData.firstName} ${employeeData.lastName}` : userData.Email;

            login({ id: userData.ID, name: userFullname, permissions: userData.Permissions }, loginResponse.data.jwt, loginResponse.data.refreshToken);
            
            toast.success("Login successful", {
                theme: "light"
            });

            setTimeout(() => navigate("/"), 2000);
        } catch(err) {
            if(err instanceof AxiosError) {
                setError(err.response?.data);
            } else if (err instanceof Error) {
                setError(err.message);
            }
        }
    }

    return (
        <div className='flex min-h-screen'>
            <div className='flex w-full items-center justify-center px-6 md:w-1/2'>
                <div className='w-full max-w-md'>
                <div className='text-center mb-6 text-4xl font-semibold'>Admin Inputs</div>
                <form onSubmit={handleSubmit(_handleSubmit)}>
                    <Input {...register('email', { required: 'Email is required' })} label='Email' placeholder='example@mail.com' errorMessage={formErrors.email?.message}/>
                    <Input {...register('password', { required: 'Password is required' })} type='password' label='Password' errorMessage={formErrors.password?.message}/>
                    <div className='mb-2'><Button type='submit' text='Login'/></div>
                    <Link to={`home`} className='font-normal text-blue-900'>Forgot password?</Link>
                </form>
                </div>
            </div>
            <img
                src='/login-image.png'
                alt='Train operations control room'
                className='hidden h-screen w-1/2 object-cover md:block'
            />
            <ToastContainer/>
        </div>
    )
}