import React, { useEffect, useState } from 'react'
import { RouteInput, useSaveRouteMutation, useGetStationsQuery, Station } from '../../graphql/schema';
import { Input, Button } from '../../components/Form';
import { usePageTitle } from '../../contexts/PageTitleContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ApolloError } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Select } from '../../components/Form/Select';
import { SelectOption } from '../../components/props';

type FormValues = {
    startStationId: number;
    endStationId: number;
    distance: number;
}

export const CreateRoute: React.FC = () => {
    const [departureStationOptions, setDepartureStationOptions] = useState<SelectOption[]>([]);
    const [arrivalStationOptions, setArrivalStationOptions] = useState<SelectOption[]>([]);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const { loading: stationsLoading, data: stationsData } = useGetStationsQuery();
    const [saveRoute] = useSaveRouteMutation();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState } = useForm<FormValues>();
    const { errors: formErrors } = formState;
    
    useEffect(() => {
        setTitle('Create route');
    }, [setTitle]);

    useEffect(() => {
        if(stationsData) {
            setDepartureStationOptions(stationsData.stations.map((stations: Station) => {
                return { key: stations.id, value: stations.name }
            }));

            setArrivalStationOptions(stationsData.stations.map((stations: Station) => {
                return { key: stations.id, value: stations.name }
            }));
        }
    }, [stationsData])

    useEffect(() => {
        if(isSaved) {
            toast.success('Route created', {
                theme: 'light'
            });
            setIsSaved(false);
            navigate('/routes');
        }

        if(error) {
            toast.error(error, {
                theme: 'light'
            })
        }

    }, [error, isSaved, navigate, setTitle]);

    const handleDepartureStationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;

        if (value === "-1") {
            setArrivalStationOptions(stationsData!.stations.map((stations: Station) => {
                return { key: stations.id, value: stations.name }
            }));
        } else {
            setArrivalStationOptions(stationsData!.stations.filter(s => s.id !== value).map((stations: Station) => {
                return { key: stations.id, value: stations.name }
            }));
        }
    }

    const _handleSubmit: any = async (data: FormValues) => {
        const route: RouteInput = { 
            startStationId: +data.startStationId,
            endStationId: +data.endStationId,
            distance: +data.distance
         };

        try {
            const result = await saveRoute({ variables: {route: { ...route }} });

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

    if(stationsLoading) return <p>Loading...</p>

    return (
        <>
            <form onSubmit={handleSubmit(_handleSubmit)}>
                <Select {...register('startStationId', { required: 'Departure Station is required' })} label='Departure Station' errorMessage={formErrors.startStationId?.message} options={departureStationOptions} useDefault={true} placeholder='Please select a departure station' handleChange={handleDepartureStationChange}/>
                <Select {...register('endStationId', { required: 'Arrival Station is required' })} label='Arrival Station' errorMessage={formErrors.endStationId?.message} options={arrivalStationOptions} useDefault={true} placeholder='Please select a arrival station'/>
                <Input {...register('distance', { required: 'Distance is required' })} type='number' label='Distance (Kms)' placeholder='Insert distance' errorMessage={formErrors.distance?.message} />
                <Button type='submit' text='Save'/>
            </form>
            <DevTool control={control} />
        </>
    )
};