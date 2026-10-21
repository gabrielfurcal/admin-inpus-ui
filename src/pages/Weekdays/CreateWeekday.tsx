import React, { useEffect, useState } from 'react'
import { useMutation } from "@apollo/client/react";
import { SAVE_WEEKDAY } from "../../graphql/mutations";
import { Input, Button } from '../../components/Form';
import { usePageTitle } from '../../contexts/page-title/PageTitleContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

type FormValues = {
    name: string;
}

export const CreateWeekday: React.FC = () => {
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const [saveWeekday] = useMutation(SAVE_WEEKDAY);
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState } = useForm<FormValues>();
    const { errors: formErrors } = formState;
    
    useEffect(() => {
        setTitle('Create Weekday');
    }, [setTitle]);

    useEffect(() => {
        if(isSaved) {
            toast.success('Weekday created', {
                theme: 'light'
            });
            setIsSaved(false);
            navigate('/weekdays');
        }

        if(error) {
            toast.error(error, {
                theme: 'light'
            })
        }

    }, [error, isSaved, navigate, setTitle]);

    const _handleSubmit: any = async (data: FormValues) => {
        const weekday = { ...data };

        try {
            const result = await saveWeekday({ variables: { weekday: { ...weekday } } });

            if(result.error) {
                throw new Error(result.error.message);
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
                <Input {...register('name', { required: 'Name is required' })} label='Name' placeholder='Insert name' errorMessage={formErrors.name?.message} />
                <Button type='submit' text='Save'/>
                &nbsp;&nbsp;
                <Button type='button' text='Back' handleClick={() => navigate("/weekdays")}/>
            </form>
            <DevTool control={control} />
        </>
    )
};