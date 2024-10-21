import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { CityInput, useGetCityByIdQuery, useSaveCityMutation } from '../../graphql/schema';
import { Input, Button } from '../../components/Form';
import { usePageTitle } from '../../contexts/PageTitleContext';
import { toast } from 'react-toastify';
import { ApolloError } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { DEFAULT_REF_VALUE } from '../../constants';

type FormValues = {
    city: string;
    province: string;
    country: string;
}

export const EditCity: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const numericId = id ? parseInt(id) : undefined;
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [_error, setError] = useState<string>();
    const { loading, data, error } = useGetCityByIdQuery({variables: { id: numericId! }});
    const [saveCity] = useSaveCityMutation();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState, setValue } = useForm<FormValues>();
    const { errors: formErrors } = formState;

    useEffect(() => {
        setTitle('Edit city');
    }, [setTitle]);

    useEffect(() => {
        if(data && !isSaved) {
            setValue('city', data.cityById?.city || '');
            setValue('province', data.cityById?.province || '');
            setValue('country', data.cityById?.country || '');
        }

        if(isSaved) {
            toast.success('City saved', {
                theme: 'light'
            });
            setIsSaved(false);
            navigate('/cities');
        }

        if(_error) {
            toast.error(_error, {
                theme: 'light'
            })
        }
    }, [data, _error, isSaved, navigate, setValue]);

    const _handleSubmit: any = async (data: FormValues) => {
        const cityToSave: CityInput = {
            id: id,
            city: data.city,
            province: data.province,
            country: data.country
        };

        try {
            const result = await saveCity({ variables: { city: cityToSave }});

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
                <Input {...register('city', { required: 'City is required' })} defaultValue={DEFAULT_REF_VALUE} label='City' placeholder='Insert city name' errorMessage={formErrors.city?.message} />
                <Input {...register('province', { required: 'Province is required' })} defaultValue={DEFAULT_REF_VALUE} label='Province' placeholder='Insert province name' errorMessage={formErrors.province?.message}  />
                <Input {...register('country', { required: 'Country is required' })} defaultValue={DEFAULT_REF_VALUE} label='Country' placeholder='Insert country name' errorMessage={formErrors.country?.message} />
                <Button type='submit' text='Save'/>
            </form>
            <DevTool control={control} />
        </>
    )
};