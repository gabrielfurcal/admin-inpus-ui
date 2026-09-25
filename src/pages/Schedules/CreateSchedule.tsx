import { DevTool } from '@hookform/devtools';
import moment from 'moment';
import { useMutation, useQuery } from "@apollo/client/react";
import React, { useEffect, useState } from 'react'
import { GET_ROUTES, GET_WEEKDAYS } from "../../graphql/queries";
import { SAVE_SCHEDULE } from "../../graphql/mutations";
import { ScheduleInput, Route, Weekday } from '../../graphql/gql/graphql';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button, Input } from '../../components/Form';
import { Select } from '../../components/Form/Select';
import { SelectOption } from '../../components/props';
import { usePageTitle } from '../../contexts/page-title/PageTitleContext';

type FormValues = {
    routeId: number;
    departureTime: string;
    arrivalTime: string;
    departureWeekdayId: number;
    arrivalWeekdayId: number;
}

export const CreateSchedule: React.FC = () => {
    const [routesOptions, setRouteOptions] = useState<SelectOption[]>([]);
    const [weekdayOptions, setWeekdayOptions] = useState<SelectOption[]>([]);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const { loading: routesLoading, data: routesData } = useQuery(GET_ROUTES);
    const { loading: weekdaysLoading, data: weekdaysData } = useQuery(GET_WEEKDAYS);
    const [saveSchedule] = useMutation(SAVE_SCHEDULE);
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState } = useForm<FormValues>();
    const { errors: formErrors } = formState;
    
    useEffect(() => {
        setTitle('Create schedule');
    }, [setTitle]);

    useEffect(() => {
        if(routesData) {
            setRouteOptions(routesData.routes.map((route: Route) => {
                return { key: route.id, value: `${route.startStation?.name} - ${route.endStation?.name}` }
            }));
        }

        if(weekdaysData) {
            setWeekdayOptions(weekdaysData.weekdays.map((weekday: Weekday) => {
                return { key: weekday.id, value: weekday.name }
            }));
        }
    }, [routesData, weekdaysData])

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
            routeId: +data.routeId,
            departureTime: moment(data.departureTime).format('YYYY-MM-DD HH:mm:ss'),
            departureWeekdayId: +data.departureWeekdayId,
            arrivalTime: moment(data.arrivalTime).format('YYYY-MM-DD HH:mm:ss'),
            arrivalWeekdayId: +data.arrivalWeekdayId
         };

        try {
            const result = await saveSchedule({ variables: {schedule: { ...schedule }} });

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
    };

    if(routesLoading || weekdaysLoading) return <p>Loading...</p>

    return (
        <>
            <form onSubmit={handleSubmit(_handleSubmit)}>
                <Select {...register('routeId', { required: 'Route is required' })} label='Route' errorMessage={formErrors.routeId?.message} options={routesOptions} useDefault={true} placeholder='Please select a route' />
                <Input {...register('departureTime', { required: 'Departure Time is required' })} type='datetime-local' label='Departure Time' placeholder='Insert departure time' errorMessage={formErrors.departureTime?.message} />
                <Select {...register('departureWeekdayId', { required: 'Departure Weekday is required' })} label='Departure Weekday' errorMessage={formErrors.departureWeekdayId?.message} options={weekdayOptions} useDefault={true} placeholder='Please select departure weekday'/>
                <Input {...register('arrivalTime', { required: 'Arrival Time is required' })} type='datetime-local' label='Arrival Time' placeholder='Insert arrival time' errorMessage={formErrors.arrivalTime?.message} />
                <Select {...register('arrivalWeekdayId', { required: 'Arrival Weekday is required' })} label='Arrival Weekday' errorMessage={formErrors.arrivalWeekdayId?.message} options={weekdayOptions} useDefault={true} placeholder='Please select arrival weekday'/>
                <Button type='submit' text='Save'/>
                &nbsp;&nbsp;
                <Button type='button' text='Back' handleClick={() => navigate("/schedules")}/>
            </form>
            <DevTool control={control} />
        </>
    )
};