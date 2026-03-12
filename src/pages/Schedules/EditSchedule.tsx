import { DevTool } from '@hookform/devtools';
import React, { useEffect, useState } from 'react'
import { ScheduleInput, useSaveScheduleMutation, useGetScheduleByIdQuery, useGetRoutesQuery, useGetWeekdaysQuery, Route, Weekday } from '../../graphql/schema';
import { usePageTitle } from '../../contexts/PageTitleContext';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Input } from '../../components/Form';
import { Select } from '../../components/Form/Select';
import { SelectOption } from '../../components/props';
import moment from 'moment';
import { DEFAULT_REF_VALUE, DEFAULT_REF_VALUE_NUMERIC } from '../../constants';

type FormValues = {
    trainId: number;
    routeId: number;
    departureTime: string;
    arrivalTime: string;
    statusId: number;
    departureWeekdayId: number;
    arrivalWeekdayId: number;
}

export const EditSchedule: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const numericId = id ? parseInt(id) : undefined;
    const [routesOptions, setRouteOptions] = useState<SelectOption[]>([]);
    const [weekdayOptions, setWeekdayOptions] = useState<SelectOption[]>([]);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [_error, setError] = useState<string>();
    const { loading, data, error } = useGetScheduleByIdQuery({variables: { id: numericId! }});
    const { loading: routesLoading, data: routesData } = useGetRoutesQuery();
    const { loading: weekdaysLoading, data: weekdaysData } = useGetWeekdaysQuery();
    const [saveSchedule] = useSaveScheduleMutation();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState, setValue } = useForm<FormValues>();
    const { errors: formErrors } = formState;
    
    useEffect(() => {
        setTitle('Edit schedule');
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

        if(data && !isSaved && !routesLoading && !weekdaysLoading) {
            setValue('departureTime', data.scheduleById?.departureTime || '');
            setValue('arrivalTime', data.scheduleById?.arrivalTime || '');
            setValue('departureWeekdayId', +data.scheduleById?.departureWeekday?.id! || -1);
            setValue('arrivalWeekdayId', +data.scheduleById?.arrivalWeekday?.id! || -1);

            setTimeout(() => {
                setValue('routeId', +data.scheduleById?.route?.id! || -1);
            }, 100);
        }
    }, [routesData, weekdaysData, data, isSaved, setValue, routesLoading, weekdaysLoading])

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

    if(loading || routesLoading || weekdaysLoading) return <p>Loading...</p>

    return (
        <>
            <form onSubmit={handleSubmit(_handleSubmit)}>
                <Select {...register('routeId', { required: 'Route is required' })} defaultValue={DEFAULT_REF_VALUE_NUMERIC} label='Route' errorMessage={formErrors.routeId?.message} options={routesOptions} useDefault={true} placeholder='Please select a route' />
                <Input {...register('departureTime', { required: 'Departure Time is required' })} defaultValue={DEFAULT_REF_VALUE} type='datetime-local' label='Departure Time' placeholder='Insert departure time' errorMessage={formErrors.departureTime?.message} />
                <Select {...register('departureWeekdayId', { required: 'Departure Weekday is required' })} defaultValue={DEFAULT_REF_VALUE_NUMERIC} label='Departure Weekday' errorMessage={formErrors.departureWeekdayId?.message} options={weekdayOptions} useDefault={true} placeholder='Please select departure weekday'/>
                <Input {...register('arrivalTime', { required: 'Arrival Time is required' })} defaultValue={DEFAULT_REF_VALUE} type='datetime-local' label='Arrival Time' placeholder='Insert arrival time' errorMessage={formErrors.arrivalTime?.message} />
                <Select {...register('arrivalWeekdayId', { required: 'Arrival Weekday is required' })} defaultValue={DEFAULT_REF_VALUE_NUMERIC} label='Arrival Weekday' errorMessage={formErrors.arrivalWeekdayId?.message} options={weekdayOptions} useDefault={true} placeholder='Please select arrival weekday'/>
                <Button type='submit' text='Save'/>
            </form>
            <DevTool control={control} />
        </>
    )
};