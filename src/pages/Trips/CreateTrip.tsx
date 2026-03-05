import { ApolloError } from '@apollo/client';
import { DevTool } from '@hookform/devtools';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button, Input } from '../../components/Form';
import { Select } from '../../components/Form/Select';
import { SelectOption } from '../../components/props';
import { usePageTitle } from '../../contexts/PageTitleContext';
import { Schedule, Status, Train, TripInput, useGetSchedulesQuery, useGetStatusQuery, useGetTrainsQuery, useSaveTripMutation } from '../../graphql/schema';

type FormValues = {
    scheduleId: number;
    trainId: number;
    statusId: number;
    startTime: string;
    endTime: string;
}

export const CreateTrip: React.FC = () => {
    const [scheduleOptions, setScheduleOptions] = useState<SelectOption[]>([]);
    const [trainOptions, setTrainOptions] = useState<SelectOption[]>([]);
    const [statusOptions, setStatusOptions] = useState<SelectOption[]>([]);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const { loading: schedulesLoading, data: schedulesData } = useGetSchedulesQuery();
    const { loading: trainsLoading, data: trainsData } = useGetTrainsQuery();
    const { loading: statusesLoading, data: statusesData } = useGetStatusQuery();
    const [saveTrip] = useSaveTripMutation();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState } = useForm<FormValues>();
    const { errors: formErrors } = formState;

    useEffect(() => {
        setTitle('Create trip');
    }, [setTitle]);

    useEffect(() => {
        if(schedulesData) {
            setScheduleOptions(schedulesData.schedules.map((schedule: Schedule) => {
                return { key: schedule.id, value: `Schedule ${schedule.id}` }
            }));
        }
    }, [schedulesData])

    useEffect(() => {
        if(trainsData) {
            setTrainOptions(trainsData.trains.map((train: Train) => {
                return { key: train.id, value: `${train.type} (${train.id})` }
            }));
        }
    }, [trainsData])

    useEffect(() => {
        if(statusesData) {
            setStatusOptions(statusesData.status.map((status: Status) => {
                return { key: status.id, value: status.name }
            }));
        }
    }, [statusesData])

    useEffect(() => {
        if(isSaved) {
            toast.success('Trip created', {
                theme: 'light'
            });
            setIsSaved(false);
            navigate('/trips');
        }

        if(error) {
            toast.error(error, {
                theme: 'light'
            })
        }

    }, [error, isSaved, navigate, setTitle]);

    const _handleSubmit: any = async (data: FormValues) => {
        const trip: TripInput = {
            scheduleId: +data.scheduleId,
            trainId: +data.trainId,
            statusId: +data.statusId,
            startTime: data.startTime,
            endTime: data.endTime
         };

        try {
            const result = await saveTrip({ variables: {trip: { ...trip }} });

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

    if(schedulesLoading || trainsLoading || statusesLoading) return <p>Loading...</p>

    return (
        <>
            <form onSubmit={handleSubmit(_handleSubmit)}>
                <Select {...register('scheduleId', { required: 'Schedule is required' })} label='Schedule' errorMessage={formErrors.scheduleId?.message} options={scheduleOptions} useDefault={true} placeholder='Please select a schedule'/>
                <Select {...register('trainId', { required: 'Train is required' })} label='Train' errorMessage={formErrors.trainId?.message} options={trainOptions} useDefault={true} placeholder='Please select a train'/>
                <Select {...register('statusId', { required: 'Status is required' })} label='Status' errorMessage={formErrors.statusId?.message} options={statusOptions} useDefault={true} placeholder='Please select a status'/>
                <Input {...register('startTime', { required: 'Start Time is required' })} type='datetime-local' label='Start Time' placeholder='Select start time' errorMessage={formErrors.startTime?.message}/>
                <Input {...register('endTime', { required: 'End Time is required' })} type='datetime-local' label='End Time' placeholder='Select end time' errorMessage={formErrors.endTime?.message}/>
                <Button type='submit' text='Save'/>
            </form>
            <DevTool control={control}/>
        </>
    )
};