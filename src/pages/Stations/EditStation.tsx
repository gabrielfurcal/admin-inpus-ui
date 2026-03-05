import { ApolloError } from '@apollo/client';
import { DevTool } from '@hookform/devtools';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button, Input } from '../../components/Form';
import { Select } from '../../components/Form/Select';
import { SelectOption } from '../../components/props';
import { DEFAULT_REF_VALUE, DEFAULT_REF_VALUE_NUMERIC } from '../../constants';
import { usePageTitle } from '../../contexts/PageTitleContext';
import { StationInput, Timezone, useGetStationByIdQuery, useGetTimezonesQuery, useSaveStationMutation } from '../../graphql/schema';

type FormValues = {
    name: string;
    countryCode: string;
    phone: string;
    postalCode: string;
    latitude: number;
    longitude: number;
    cityId: number;
    imageUrl: string;
    timezoneId: number;
}

export const EditStation: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const numericId = id ? parseInt(id) : undefined;
    const [timezoneOptions, setTimezoneOptions] = useState<SelectOption[]>([]);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [_error, setError] = useState<string>();
    const { loading, data, error } = useGetStationByIdQuery({variables: { id: numericId! }});
    const { loading: timezonesLoading, data: timezonesData } = useGetTimezonesQuery();
    const [saveStation] = useSaveStationMutation();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState, setValue } = useForm<FormValues>();
    const { errors: formErrors } = formState;

    useEffect(() => {
        setTitle('Edit station');
    }, [setTitle]);

    useEffect(() => {
        if(timezonesData) {
            setTimezoneOptions(timezonesData.timezones.map((timezone: Timezone) => {
                return { key: timezone.id, value: `${timezone.name} (${timezone.region})` }
            }));
        }

        if(data && !isSaved && !timezonesLoading) {
            setValue('name', data.stationById?.name || '');
            setValue('countryCode', data.stationById?.countryCode || '');
            setValue('phone', data.stationById?.phone || '');
            setValue('postalCode', data.stationById?.postalCode || '');
            setValue('latitude', data.stationById?.latitude || 0);
            setValue('longitude', data.stationById?.longitude || 0);
            setValue('cityId', +data.stationById?.city?.id! || 0);
            setValue('imageUrl', data.stationById?.imageUrl || '');
            setValue('timezoneId', +data.stationById?.timezone?.id! || -1);
        }

        if(isSaved) {
            toast.success('Station saved', {
                theme: 'light'
            });
            setIsSaved(false);
            navigate('/status');
        }

        if(_error) {
            toast.error(_error, {
                theme: 'light'
            })
        }
    }, [data, timezonesData, _error, isSaved, navigate, setValue, timezonesLoading]);

    const _handleSubmit: any = async (data: FormValues) => {
        const stationToSave: StationInput = { id, ...data };

        try {
            const result = await saveStation({ variables: { station: stationToSave }});

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

    if(loading || timezonesLoading) return <p>Fetching station...</p>

    if(error) return <p>Error: {error.message}</p>

    return (
        <>
            <form onSubmit={handleSubmit(_handleSubmit)}>
                <Input {...register('name', { required: 'Name is required' })} defaultValue={DEFAULT_REF_VALUE} label='Name' placeholder='Insert name' errorMessage={formErrors.name?.message} />
                <Input {...register('countryCode', { required: 'Country Code is required' })} defaultValue={DEFAULT_REF_VALUE} type='number' label='Country Code' placeholder='Insert country code' errorMessage={formErrors.countryCode?.message} />
                <Input {...register('phone', { required: 'Phone is required' })} defaultValue={DEFAULT_REF_VALUE} label='Phone' placeholder='Insert phone' errorMessage={formErrors.phone?.message} />
                <Input {...register('postalCode', { required: 'Postal Code is required' })} defaultValue={DEFAULT_REF_VALUE} label='Postal Code' placeholder='Insert postal code' errorMessage={formErrors.postalCode?.message} />
                <Input {...register('latitude', { required: 'Latitude is required' })} defaultValue={DEFAULT_REF_VALUE} type='number' label='Latitude' placeholder='Insert latitude' errorMessage={formErrors.latitude?.message} />
                <Input {...register('longitude', { required: 'Longitude is required' })} defaultValue={DEFAULT_REF_VALUE} type='number' label='Longitude' placeholder='Insert longitude' errorMessage={formErrors.longitude?.message} />
                <Input {...register('cityId', { required: 'City is required' })} defaultValue={DEFAULT_REF_VALUE} type='number' label='City ID' placeholder='Insert city id' errorMessage={formErrors.cityId?.message} />
                <Input {...register('imageUrl', { required: 'Image URL is required' })} defaultValue={DEFAULT_REF_VALUE} label='Image URL' placeholder='Insert image url' errorMessage={formErrors.imageUrl?.message} />
                <Select {...register('timezoneId', { required: 'Timezone is required' })} defaultValue={DEFAULT_REF_VALUE_NUMERIC} label='Timezone' errorMessage={formErrors.timezoneId?.message} options={timezoneOptions} useDefault={true} placeholder='Please select a timezone'/>
                <Button type='submit' text='Save'/>
            </form>
            <DevTool control={control} />
        </>
    )
};