import React, { useEffect, useState } from 'react'
import { TrainInput, useSaveTrainMutation } from '../../graphql/schema';
import { Input, Button } from '../../components/Form';
import { usePageTitle } from '../../contexts/PageTitleContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ApolloError } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

type FormValues = {
    type: string;
    capacity: number;
    maxSpeed: number;
}

export const CreateTrain: React.FC = () => {
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const [saveTrain] = useSaveTrainMutation();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState } = useForm<FormValues>();
    const { errors: formErrors } = formState;
    
    useEffect(() => {
        setTitle('Create train');
    }, [setTitle]);

    useEffect(() => {
        if(isSaved) {
            toast.success('Train created', {
                theme: 'light'
            });
            setIsSaved(false);
            navigate('/trains');
        }

        if(error) {
            toast.error(error, {
                theme: 'light'
            })
        }

    }, [error, isSaved, navigate, setTitle]);


    const _handleSubmit: any = async (data: FormValues) => {
        const train: TrainInput = { ...data };

        try {
            const result = await saveTrain({ variables: {train: { ...train }} });

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
                <Input {...register('type', { required: 'Type is required' })} label='Type' placeholder='Insert a type' errorMessage={formErrors.type?.message} />
                <Input {...register('capacity', { required: 'Capacity is required' })} type='number' label='Capacity' placeholder='Insert capacity' errorMessage={formErrors.capacity?.message}/>
                <Input {...register('maxSpeed', { required: 'Max Speed is required' })} type='number' allowDecimals={true} label='Max Speed (Km/h)' placeholder='Insert max speed' errorMessage={formErrors.maxSpeed?.message}/>
                <Button type='submit' text='Save'/>
            </form>
            <DevTool control={control}/>
        </>
    )
};