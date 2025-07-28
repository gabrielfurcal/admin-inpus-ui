import React, { useEffect, useState } from 'react'
import { ScheduleInput, useSaveScheduleMutation, useGetScheduleByIdQuery, useGetTrainsQuery, useGetStatusQuery, useGetRoutesQuery, Train, Status, Route } from '../../graphql/schema';
import { Input, Button } from '../../components/Form';
import { usePageTitle } from '../../contexts/PageTitleContext';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ApolloError } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Select } from '../../components/Form/Select';
import { SelectOption } from '../../components/props';
import { toPascalCase } from '../../hooks/utils';
import moment from 'moment';
import { DEFAULT_REF_VALUE, DEFAULT_REF_VALUE_NUMERIC } from '../../constants';

type FormValues = {
    trainId: number;
    routeId: number;
    departureTime: string;
    arrivalTime: string;
    statusId: number;
}

export const EditSchedule: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const numericId = id ? parseInt(id) : undefined;
    const [trainOptions, setTrainOptions] = useState<SelectOption[]>([]);
    const [routesOptions, setRouteOptions] = useState<SelectOption[]>([]);
    const [statusOptions, setStatusOptions] = useState<SelectOption[]>([]);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [_error, setError] = useState<string>();
    const { loading, data, error } = useGetScheduleByIdQuery({variables: { id: numericId! }});
    const { loading: trainsLoading, data: trainsData } = useGetTrainsQuery();
    const { loading: routesLoading, data: routesData } = useGetRoutesQuery();
    const { loading: statusLoading, data: statusData } = useGetStatusQuery();
    const [saveSchedule] = useSaveScheduleMutation();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState, setValue } = useForm<FormValues>();
    const { errors: formErrors } = formState;
    
    useEffect(() => {
        setTitle('Edit schedule');
    }, [setTitle]);

    useEffect(() => {
        if(trainsData) {
            setTrainOptions(trainsData.trains.map((train: Train) => {
                return { key: train.id, value: `${train.id} - ${train.type}` }
            }));
        }

        if(routesData) {
            setRouteOptions(routesData.routes.map((route: Route) => {
                return { key: route.id, value: `${route.startStation?.name} - ${route.endStation?.name}` }
            }));
        }

        if(statusData) {
            setStatusOptions(statusData.status.map((_status: Status) => {
                return { key: _status.id, value:  toPascalCase(_status.name) }
            }));
        }

        if(data && !isSaved && !trainsLoading && !routesLoading && !statusLoading) {
            setValue('trainId', +data.scheduleById?.train?.id! || -1);
            setValue('departureTime', data.scheduleById?.departureTime || '');
            setValue('arrivalTime', data.scheduleById?.arrivalTime || '');
            setValue('statusId', +data.scheduleById?.status?.id! || -1);

            setTimeout(() => {
                setValue('routeId', +data.scheduleById?.route?.id! || -1);
            }, 100);
        }
    }, [trainsData, routesData, statusData, data, isSaved, setValue, trainsLoading, routesLoading, statusLoading])

    useEffect(() => {
        if(isSaved) {
            toast.success('Schedule updated', {
                theme: 'light'
            });
            setIsSaved(false);
            navigate('/schedules');
        }

        if(_error) {
            toast.error(_error, {
                theme: 'light'
            })
        }

    }, [_error, error, isSaved, navigate, setTitle]);

    const _handleSubmit: any = async (data: FormValues) => {
        const schedule: ScheduleInput = {
            id, 
            trainId: +data.trainId,
            routeId: +data.routeId,
            departureTime: moment(data.departureTime).format('YYYY-MM-DD HH:mm:ss'),
            arrivalTime: moment(data.arrivalTime).format('YYYY-MM-DD HH:mm:ss'),
            statusId: +data.statusId
         };

        try {
            const result = await saveSchedule({ variables: {schedule: { ...schedule }} });

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

    if(loading || trainsLoading || statusLoading || routesLoading) return <p>Loading...</p>

    return (
        <>
            <form onSubmit={handleSubmit(_handleSubmit)}>
                <Select {...register('trainId', { required: 'Train is required' })} defaultValue={DEFAULT_REF_VALUE_NUMERIC} label='Train' errorMessage={formErrors.trainId?.message} options={trainOptions} useDefault={true} placeholder='Please select a train' />
                <Select {...register('routeId', { required: 'Route is required' })} defaultValue={DEFAULT_REF_VALUE_NUMERIC} label='Route' errorMessage={formErrors.routeId?.message} options={routesOptions} useDefault={true} placeholder='Please select a route' />
                <Input {...register('departureTime', { required: 'Departure Time is required' })} defaultValue={DEFAULT_REF_VALUE} type='datetime-local' label='Departure Time' placeholder='Insert departure time' errorMessage={formErrors.departureTime?.message} />
                <Input {...register('arrivalTime', { required: 'Arrival Time is required' })} defaultValue={DEFAULT_REF_VALUE} type='datetime-local' label='Arrival Time' placeholder='Insert arrival time' errorMessage={formErrors.arrivalTime?.message} />
                <Select {...register('statusId', { required: 'Status is required' })} defaultValue={DEFAULT_REF_VALUE_NUMERIC} label='Status' errorMessage={formErrors.statusId?.message} options={statusOptions} useDefault={true} placeholder='Please select a station'/>
                <Button type='submit' text='Save'/>
            </form>
            <DevTool control={control} />
        </>
    )
};