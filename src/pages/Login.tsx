import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { Button, Input } from '../components/Form';
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
    Role: string;
}

export const Login: React.FC = () => {
    const [error, setError] = useState<boolean>(false);
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState } = useForm<FormValues>();
    const { errors: formErrors } = formState;
    const { login } = useAuth();

    useEffect(() => {
        setTitle('Login');
    })

    const _handleSubmit: any = async (data: FormValues) => {
        const loginResponse = await axios.post<LoginResponse>(
            "http://localhost:5090/api/User/Login",
            data
        );

        const userData: UserInfo = decodeJwtPayload(loginResponse.data.jwt);

        login({ id: userData.ID, name: userData.Email }, loginResponse.data.jwt, loginResponse.data.refreshToken);
    }

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='w-2/3'>
                <div className='text-center mb-6 text-2xl font-semibold'>Admin Inputs</div>
                <form onSubmit={handleSubmit(_handleSubmit)}>
                    <Input {...register('email', { required: 'Email is required' })} label='Email' placeholder='example@mail.com' errorMessage={formErrors.email?.message}/>
                    <Input {...register('password', { required: 'Password is required' })} type='password' label='Password' errorMessage={formErrors.password?.message}/>
                    <div className='mb-2'><Button type='submit' text='Login'/></div>
                    <Link to={`home`} className='font-normal text-blue-900'>Forgot password?</Link>
                </form>
            </div>
        </div>
    )
}