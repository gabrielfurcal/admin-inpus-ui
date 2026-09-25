import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify'

import { Button, Input } from '../components/Form';
import { LOGIN_URL } from '../constants';
import { useAuth } from "../contexts/auth/AuthContext";
import { usePageTitle } from '../contexts/page-title/PageTitleContext';
import { decodeJwtPayload } from '../hooks/utils';

type FormValues = {
    email: string;
    password: string;
}

type LoginResponse = {
    jwt: string;
    refreshToken: string;
}

type UserInfo = {
    Email: string;
    ID: string;
    Role: string[];
}

export const Login: React.FC = () => {
    const [error, setError] = useState<string>();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, handleSubmit, formState } = useForm<FormValues>();
    const { errors: formErrors } = formState;
    const { login } = useAuth();

    useEffect(() => {
        setTitle('Login');
    }, [setTitle]);

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
            const loginResponse = await axios.post<LoginResponse>(LOGIN_URL, data);
            const userData: UserInfo = decodeJwtPayload(loginResponse.data.jwt);

            login({ id: userData.ID, name: userData.Email, roles: userData.Role }, loginResponse.data.jwt, loginResponse.data.refreshToken);
            
            toast.success("Login successful", {
                theme: "light"
            });

            setTimeout(() => navigate("/"), 2000);
        } catch(err) {
            if(err instanceof AxiosError) {
                setError(err.response?.data);
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