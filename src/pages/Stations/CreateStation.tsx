import React, { useEffect, useState } from 'react'
import { StationInput, useSaveStationMutation } from '../../graphql/schema';
import { Input, Button } from '../../components/Form';
import { usePageTitle } from '../../contexts/PageTitleContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ApolloError } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

type FormValues = {
    name: string;
    countryCode: string;
    phone: string;
    postalCode: string;
    latitude: number;
    longitude: number;
    cityId: number;
    imageUrl: string;
}

export const CreateStation: React.FC = () => {
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const [saveStation] = useSaveStationMutation();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState } = useForm<FormValues>();
    const { errors: formErrors } = formState;
    
    useEffect(() => {
        setTitle('Create station');
    }, [setTitle]);

    useEffect(() => {
        if(isSaved) {
            toast.success('Station created', {
                theme: 'light'
            });
            setIsSaved(false);
            navigate('/stations');
        }

        if(error) {
            toast.error(error, {
                theme: 'light'
            })
        }

    }, [error, isSaved, navigate, setTitle]);

    const _handleSubmit: any = async (data: FormValues) => {
        const station: StationInput = { ...data };

        try {
            const result = await saveStation({ variables: {station: { ...station }} });

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
                <Input {...register('name', { required: 'Name is required' })} label='Name' placeholder='Insert name' errorMessage={formErrors.name?.message} />
                <Input {...register('countryCode', { required: 'Country Code is required' })} type='number' label='Country Code' placeholder='Insert country code' errorMessage={formErrors.countryCode?.message} />
                <Input {...register('phone', { required: 'Phone is required' })} label='Phone' placeholder='Insert phone' errorMessage={formErrors.phone?.message} />
                <Input {...register('postalCode', { required: 'Postal Code is required' })} label='Postal Code' placeholder='Insert postal code' errorMessage={formErrors.postalCode?.message} />
                <Input {...register('latitude', { required: 'Latitude is required' })} type='number' label='Latitude' placeholder='Insert latitude' errorMessage={formErrors.latitude?.message} />
                <Input {...register('longitude', { required: 'Longitude is required' })} type='number' label='Longitude' placeholder='Insert longitude' errorMessage={formErrors.longitude?.message} />
                <Input {...register('cityId', { required: 'City is required' })} type='number' label='City ID' placeholder='Insert city id' errorMessage={formErrors.cityId?.message} />
                <Input {...register('imageUrl', { required: 'Image URL is required' })} label='Image URL' placeholder='Insert image url' errorMessage={formErrors.imageUrl?.message} />
                <Button type='submit' text='Save'/>
            </form>
            <DevTool control={control} />
        </>
    )
};