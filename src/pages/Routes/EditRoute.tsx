import React, { useEffect, useState } from 'react'
import { RouteInput, useGetRouteByIdQuery, useSaveRouteMutation, useGetStationsQuery, Station } from '../../graphql/schema';
import { Input, Button } from '../../components/Form';
import { usePageTitle } from '../../contexts/PageTitleContext';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ApolloError } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Select } from '../../components/Form/Select';
import { SelectOption } from '../../components/props';
import { DEFAULT_REF_VALUE_NUMERIC } from '../../constants';

type FormValues = {
    startStationId: number;
    endStationId: number;
    distance: number;
}

export const EditRoute: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const numericId = id ? parseInt(id) : undefined;
    const [departureStationOptions, setDepartureStationOptions] = useState<SelectOption[]>([]);
    const [arrivalStationOptions, setArrivalStationOptions] = useState<SelectOption[]>([]);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const { loading, data } = useGetRouteByIdQuery({ variables: { id: numericId! } });
    const { loading: stationsLoading, data: stationsData } = useGetStationsQuery();
    const [saveRoute] = useSaveRouteMutation();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState, setValue } = useForm<FormValues>();
    const { errors: formErrors } = formState;
    
    useEffect(() => {
        setTitle('Edit route');
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

        if (data && !stationsLoading) {
            setTimeout(() => {
                setValue('startStationId', +data.routeById?.startStation?.id! || -1);
                setValue('endStationId', +data.routeById?.endStation?.id! || -1);
            }, 500);
            setValue('distance', +data.routeById?.distance! || 0);
        }
    }, [data, setValue, stationsData, stationsLoading])

    useEffect(() => {
        if(isSaved) {
            toast.success('Route updated', {
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
            id,
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

    if(loading || stationsLoading) return <p>Loading...</p>

    return (
        <>
            <form onSubmit={handleSubmit(_handleSubmit)}>
                <Select {...register('startStationId', { required: 'Departure Station is required' })} label='Departure Station' defaultValue={DEFAULT_REF_VALUE_NUMERIC} errorMessage={formErrors.startStationId?.message} options={departureStationOptions} useDefault={true} placeholder='Please select a departure station' handleChange={handleDepartureStationChange}/>
                <Select {...register('endStationId', { required: 'Arrival Station is required' })} label='Arrival Station' defaultValue={DEFAULT_REF_VALUE_NUMERIC} errorMessage={formErrors.endStationId?.message} options={arrivalStationOptions} useDefault={true} placeholder='Please select a arrival station'/>
                <Input {...register('distance', { required: 'Distance is required' })} type='number' label='Distance (Kms)' defaultValue={DEFAULT_REF_VALUE_NUMERIC} placeholder='Insert distance' errorMessage={formErrors.distance?.message} />
                <Button type='submit' text='Save'/>
            </form>
            <DevTool control={control} />
        </>
    )
};