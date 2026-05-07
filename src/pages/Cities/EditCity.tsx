import { useMutation, useQuery } from '@apollo/client/react';
import { DevTool } from '@hookform/devtools';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button, Input } from '../../components/Form';
import { DEFAULT_REF_VALUE } from '../../constants';
import { usePageTitle } from '../../contexts/page-title/PageTitleContext';
import { CityInput } from '../../graphql/gql/graphql';
import { SAVE_CITY } from '../../graphql/mutations';
import { GET_CITY_BY_ID } from '../../graphql/queries';

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
    const { loading, data, error } = useQuery(GET_CITY_BY_ID, {variables: { id: numericId! }});
    const [saveCity] = useMutation(SAVE_CITY);
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
    }

    if(loading) return <p>Fetching city...</p>

    if(error) return <p>Error: {error.message}</p>

    return (
        <>
            <form onSubmit={handleSubmit(_handleSubmit)}>
                <Input {...register('city', { required: 'City is required' })} defaultValue={DEFAULT_REF_VALUE} label='City' placeholder='Insert city name' errorMessage={formErrors.city?.message} />
                <Input {...register('province', { required: 'Province is required' })} defaultValue={DEFAULT_REF_VALUE} label='Province' placeholder='Insert province name' errorMessage={formErrors.province?.message}  />
                <Input {...register('country', { required: 'Country is required' })} defaultValue={DEFAULT_REF_VALUE} label='Country' placeholder='Insert country name' errorMessage={formErrors.country?.message} />
                <Button type='submit' text='Save'/>
                &nbsp;&nbsp;
                <Button type='button' text='Back' handleClick={() => navigate("/cities")}/>
            </form>
            <DevTool control={control} />
        </>
    )
};