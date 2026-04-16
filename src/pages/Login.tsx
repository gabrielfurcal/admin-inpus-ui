import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { Button, Input } from '../components/Form';
import { usePageTitle } from '../contexts/page-title/PageTitleContext';

type FormValues = {
    email: string;
    password: string;
}

export const Login: React.FC = () => {
    const [error, setError] = useState<boolean>(false);
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState } = useForm<FormValues>();
    const { errors: formErrors } = formState;

    useEffect(() => {
        setTitle('Login');
    })

    const _handleSubmit: any = async (data: FormValues) => {

    }

    return (
        <div className='w-1/3 m-auto'>
            <form onSubmit={handleSubmit(_handleSubmit)}>
                <Input {...register('email', { required: 'Email is required' })} label='Email' placeholder='example@mail.com' errorMessage={formErrors.email?.message}/>
                <Input {...register('password', { required: 'Password is required' })} type='password' label='Password' errorMessage={formErrors.password?.message}/>
                <div className='mb-2'><Button type='submit' text='Login'/></div>
                <Link to={`home`} className='font-normal text-blue-900'>Forgot password?</Link>
            </form>
        </div>
    )
}