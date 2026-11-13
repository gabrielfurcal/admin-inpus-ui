import { DevTool } from '@hookform/devtools';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button, Input } from '../../components/Form';
import { DEFAULT_REF_VALUE } from '../../constants';
import { usePageTitle } from '../../contexts/page-title/PageTitleContext';
import { User } from '../../types/security';
import { getUserById, updateUser } from '../../api/user';

type FormValues = {
    email: string;
    password: string;
}

export const EditUser: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<User>();
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState, setValue } = useForm<FormValues>();
    const { errors: formErrors } = formState;

    useEffect(() => {
        setTitle('Edit user');
    }, [setTitle]);

    useEffect(() => {
        void loadUser();
    }, []);

    useEffect(() => {
        if(isSaved) {
            toast.success('User saved', {
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
    }, [error, isSaved, navigate, setValue]);

    const loadUser = async () => {
        setLoading(true);

        try {
            const response = await getUserById(id!);
            
            if(response.status === 200) {
                setUser(response.data);
                if(!isSaved)
                    setValue('email', response.data.email || '');
            } else {
                throw new Error(response.statusText);
            }
        } catch(err) {
            if(err instanceof Error) {
                setError(err.message)
            }
        } finally {
            setLoading(false);
        }
    }

    const _handleSubmit: any = async (data: FormValues) => {
        const userToSave: User = { id, ...data };

        try {
            const result = await updateUser(userToSave);

            if(result.status !== 200) {
                throw new Error(result.statusText);
            } else {
                setIsSaved(true);
            }
        } catch(err) {
            if(err instanceof Error) {
                setError(err.message);
            }
        }
    }

    if(loading) return <p>Fetching user...</p>

    if(error) return <p>Error: {error}</p>

    return (
        <>
            <form onSubmit={handleSubmit(_handleSubmit)}>
                <Input {...register('email', { required: 'Email is required' })} defaultValue={DEFAULT_REF_VALUE} type='email' label='Email' placeholder='Insert email' errorMessage={formErrors.email?.message} />
                <Input {...register('password')} defaultValue={''} type='password' label='Set new password' placeholder='Set new password' errorMessage={formErrors.password?.message} />
                <Button type='submit' text='Save'/>
                &nbsp;&nbsp;
                <Button type='button' text='Back' handleClick={() => navigate("/users")}/>
            </form>
            <DevTool control={control} />
        </>
    )
};