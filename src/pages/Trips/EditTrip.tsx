import { ApolloError } from '@apollo/client';
import { DevTool } from '@hookform/devtools';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button, Input } from '../../components/Form';
import { Select } from '../../components/Form/Select';
import { SelectOption } from '../../components/props';
import { DEFAULT_REF_VALUE_NUMERIC } from '../../constants';
import { usePageTitle } from '../../contexts/PageTitleContext';
import { Schedule, Status, Train, TripInput, useGetSchedulesQuery, useGetStatusQuery, useGetTrainsQuery, useGetTripByIdQuery, useSaveTripMutation } from '../../graphql/schema';

type FormValues = {
    scheduleId: number;
    trainId: number;
    statusId: number;
    startTime: string;
    endTime: string;
}

export const EditTrip: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const numericId = id ? parseInt(id) : undefined;
    const [scheduleOptions, setScheduleOptions] = useState<SelectOption[]>([]);
    const [trainOptions, setTrainOptions] = useState<SelectOption[]>([]);
    const [statusOptions, setStatusOptions] = useState<SelectOption[]>([]);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const { loading, data } = useGetTripByIdQuery({ variables: { id: numericId! } });
    const { loading: schedulesLoading, data: schedulesData } = useGetSchedulesQuery();
    const { loading: trainsLoading, data: trainsData } = useGetTrainsQuery();
    const { loading: statusesLoading, data: statusesData } = useGetStatusQuery();
    const [saveTrip] = useSaveTripMutation();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState, setValue } = useForm<FormValues>();
    const { errors: formErrors } = formState;

    useEffect(() => {
        setTitle('Edit trip');
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

        if (data && !schedulesLoading && !trainsLoading && !statusesLoading) {
            setTimeout(() => {
                setValue('scheduleId', +data.tripById?.schedule?.id! || -1);
                setValue('trainId', +data.tripById?.train?.id! || -1);
                setValue('statusId', +data.tripById?.status?.id! || -1);
            }, 500);
            setValue('startTime', data.tripById?.startTime || '');
            setValue('endTime', data.tripById?.endTime || '');
        }
    }, [data, setValue, schedulesData, trainsData, statusesData, schedulesLoading, trainsLoading, statusesLoading])

    useEffect(() => {
        if(isSaved) {
            toast.success('Trip updated', {
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
            id,
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

    if(loading || schedulesLoading || trainsLoading || statusesLoading) return <p>Loading...</p>

    return (
        <>
            <form onSubmit={handleSubmit(_handleSubmit)}>
                <Select {...register('scheduleId', { required: 'Schedule is required' })} label='Schedule' defaultValue={DEFAULT_REF_VALUE_NUMERIC} errorMessage={formErrors.scheduleId?.message} options={scheduleOptions} useDefault={true} placeholder='Please select a schedule'/>
                <Select {...register('trainId', { required: 'Train is required' })} label='Train' defaultValue={DEFAULT_REF_VALUE_NUMERIC} errorMessage={formErrors.trainId?.message} options={trainOptions} useDefault={true} placeholder='Please select a train'/>
                <Select {...register('statusId', { required: 'Status is required' })} label='Status' defaultValue={DEFAULT_REF_VALUE_NUMERIC} errorMessage={formErrors.statusId?.message} options={statusOptions} useDefault={true} placeholder='Please select a status'/>
                <Input {...register('startTime', { required: 'Start Time is required' })} type='datetime-local' label='Start Time' defaultValue={DEFAULT_REF_VALUE_NUMERIC} placeholder='Select start time' errorMessage={formErrors.startTime?.message}/>
                <Input {...register('endTime', { required: 'End Time is required' })} type='datetime-local' label='End Time' defaultValue={DEFAULT_REF_VALUE_NUMERIC} placeholder='Select end time' errorMessage={formErrors.endTime?.message}/>
                <Button type='submit' text='Save'/>
            </form>
            <DevTool control={control}/>
        </>
    )
};