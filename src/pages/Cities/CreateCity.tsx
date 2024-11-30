import React, { useEffect, useState } from 'react'
import { CityInput, useSaveCityMutation } from '../../graphql/schema';
import { Input, Button } from '../../components/Form';
import { usePageTitle } from '../../contexts/PageTitleContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ApolloError } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

type FormValues = {
    city: string;
    province: string;
    country: string;
}

export const CreateCity: React.FC = () => {
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const [saveCity] = useSaveCityMutation();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState } = useForm<FormValues>();
    const { errors: formErrors } = formState;
    
    useEffect(() => {
        setTitle('Create city');
    }, [setTitle]);

    useEffect(() => {
        if(isSaved) {
            toast.success('City created', {
                theme: 'light'
            });
            setIsSaved(false);
            navigate('/cities');
        }

        if(error) {
            toast.error(error, {
                theme: 'light'
            })
        }

    }, [error, isSaved, navigate, setTitle]);

    const _handleSubmit: any = async (data: FormValues) => {
        const city: CityInput = { ...data };

        try {
            const result = await saveCity({ variables: {city: { ...city }} });

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
                <Input {...register('city', { required: 'City is required' })} label='City' placeholder='Insert city name' errorMessage={formErrors.city?.message} />
                <Input {...register('province', { required: 'Province is required' })} label='Province' placeholder='Insert province name' errorMessage={formErrors.province?.message} />
                <Input {...register('country', { required: 'Country is required' })} label='Country' placeholder='Insert country name' errorMessage={formErrors.country?.message} />
                <Button type='submit' text='Save'/>
            </form>
            <DevTool control={control} />
        </>
    )
};