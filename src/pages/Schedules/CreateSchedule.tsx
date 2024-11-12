import React, { useEffect, useState } from 'react'
import { ScheduleInput, useSaveScheduleMutation, useGetTrainsQuery, useGetStatusQuery, useGetRoutesQuery, Train, Status, Route } from '../../graphql/schema';
import { Input, Button } from '../../components/Form';
import { usePageTitle } from '../../contexts/PageTitleContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ApolloError } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Select } from '../../components/Form/Select';
import { SelectOption } from '../../components/props';
import { toPascalCase } from '../../hooks/utils';
import moment from 'moment';

type FormValues = {
    trainId: number;
    routeId: number;
    departureTime: string;
    arrivalTime: string;
    statusId: number;
}

export const CreateSchedule: React.FC = () => {
    const [trainOptions, setTrainOptions] = useState<SelectOption[]>([]);
    const [routesOptions, setRouteOptions] = useState<SelectOption[]>([]);
    const [statusOptions, setStatusOptions] = useState<SelectOption[]>([]);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const { loading: trainsLoading, data: trainsData } = useGetTrainsQuery();
    const { loading: routesLoading, data: routesData } = useGetRoutesQuery();
    const { loading: statusLoading, data: statusData } = useGetStatusQuery();
    const [saveSchedule] = useSaveScheduleMutation();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState } = useForm<FormValues>();
    const { errors: formErrors } = formState;
    
    useEffect(() => {
        setTitle('Create schedule');
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
    }, [trainsData, routesData, statusData])

    useEffect(() => {
        if(isSaved) {
            toast.success('Schedule created', {
                theme: 'light'
            });
            setIsSaved(false);
            navigate('/schedules');
        }

        if(error) {
            toast.error(error, {
                theme: 'light'
            })
        }

    }, [error, isSaved, navigate, setTitle]);

    const _handleSubmit: any = async (data: FormValues) => {
        const schedule: ScheduleInput = { 
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

    if(trainsLoading || statusLoading || routesLoading) return <p>Loading...</p>

    return (
        <>
            <form onSubmit={handleSubmit(_handleSubmit)}>
                <Select {...register('trainId', { required: 'Train is required' })} label='Train' errorMessage={formErrors.trainId?.message} options={trainOptions} useDefault={true} placeholder='Please select a train' />
                <Select {...register('routeId', { required: 'Route is required' })} label='Route' errorMessage={formErrors.routeId?.message} options={routesOptions} useDefault={true} placeholder='Please select a route' />
                <Input {...register('departureTime', { required: 'Departure Time is required' })} type='datetime-local' label='Departure Time' placeholder='Insert departure time' errorMessage={formErrors.departureTime?.message} />
                <Input {...register('arrivalTime', { required: 'Arrival Time is required' })} type='datetime-local' label='Arrival Time' placeholder='Insert arrival time' errorMessage={formErrors.arrivalTime?.message} />
                <Select {...register('statusId', { required: 'Status is required' })} label='Status' errorMessage={formErrors.statusId?.message} options={statusOptions} useDefault={true} placeholder='Please select a station'/>
                <Button type='submit' text='Save'/>
            </form>
            <DevTool control={control} />
        </>
    )
};