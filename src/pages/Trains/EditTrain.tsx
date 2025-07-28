import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { TrainInput, useGetTrainByIdQuery, useSaveTrainMutation } from '../../graphql/schema';
import { Input, Button } from '../../components/Form';
import { usePageTitle } from '../../contexts/PageTitleContext';
import { toast } from 'react-toastify';
import { ApolloError } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { DEFAULT_REF_VALUE } from '../../constants';

type FormValues = {
    type: string;
    capacity: number;
    maxSpeed: number;
}

export const EditTrain: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const numericId = id ? parseInt(id) : undefined;
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [_error, setError] = useState<string>();
    const { loading, data, error } = useGetTrainByIdQuery({variables: { id: numericId! }});
    const [saveTrain] = useSaveTrainMutation();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState, setValue } = useForm<FormValues>();
    const { errors: formErrors } = formState;

    useEffect(() => {
        setTitle('Edit trains');
    }, [setTitle]);

    useEffect(() => {
        if(data && !isSaved) {
            setValue('type', data.trainById?.type || '');
            setValue('capacity', data.trainById?.capacity || 0);
            setValue('maxSpeed', data.trainById?.maxSpeed || 0.00);
        }

        if(isSaved) {
            toast.success('Train saved', {
                theme: 'light'
            });
            setIsSaved(false);
            navigate('/trains');
        }

        if(_error) {
            toast.error(_error, {
                theme: 'light'
            })
        }
    }, [data, _error, isSaved, navigate, setValue]);

    const _handleSubmit: any = async (data: FormValues) => {
        const trainToSave: TrainInput = {
            id,
            type: data.type,
            capacity: data.capacity,
            maxSpeed: data.maxSpeed
        };

        try {
            const result = await saveTrain({ variables: { train: trainToSave }});

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

    if(loading) return <p>Fetching train...</p>

    if(error) return <p>Error: {error.message}</p>

    return (
        <>
            <form onSubmit={handleSubmit(_handleSubmit)}>
                <Input {...register('type', { required: 'Type is required' })} defaultValue={DEFAULT_REF_VALUE} label='Type' placeholder='Insert a type' errorMessage={formErrors.type?.message} />
                <Input {...register('capacity', { required: 'Capacity is required' })} defaultValue={DEFAULT_REF_VALUE} type='number' label='Capacity' placeholder='Insert capacity' errorMessage={formErrors.capacity?.message} />
                <Input {...register('maxSpeed', { required: 'Max Speed is required' })} defaultValue={DEFAULT_REF_VALUE} type='number' allowDecimals={true} label='Max Speed (Km/h)' placeholder='Insert max speed' errorMessage={formErrors.maxSpeed?.message} />
                <Button type='submit' text='Save'/>
            </form>
            <DevTool control={control}/>
        </>
    )
};