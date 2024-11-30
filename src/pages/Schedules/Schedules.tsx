import React, { useState, useEffect } from "react";
import { Schedule, useDeleteScheduleMutation, useGetSchedulesQuery } from "../../graphql/schema";
import { Link } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "../../components/Table";
import { usePageTitle } from "../../contexts/PageTitleContext";
import { toast } from 'react-toastify';
import { ApolloError } from "@apollo/client";
import { toPascalCase } from "../../hooks/utils";

export const Schedules: React.FC = () => {
    const [schedules, setSchedules] = useState<Schedule[]>([]);
    const [_error, setError] = useState<string>();
    const [isDeleted, setIsDeleted] = useState<boolean>();
    const { loading, data, error, refetch } = useGetSchedulesQuery();
    const { setTitle } = usePageTitle();
    const [deleteSchedule] = useDeleteScheduleMutation();

    useEffect(() => {
        setTitle('Schedules');
    }, [setTitle]);

    useEffect(() => {
        if(data) {
            setSchedules(data.schedules);
        }

        if(isDeleted) {
            toast.success('Schedule deleted', {
                theme: 'light'
            });
            setIsDeleted(false);
            refetch();
        }

        if(_error) {
            toast.error(_error, {
                theme: 'light'
            })
        }
    }, [isDeleted, _error, setIsDeleted, data, refetch]);

    const handleDeleteClick: any = async (id: number) => {
        if(await !window.confirm(`Are you sure you want to delete Schedule ${id.toString()}?`)) return;

        try {
            const result = await deleteSchedule({ variables: { id } });

            if(result.errors) {
                throw new Error(result.errors.map((err) => err.message).join(','));
            } else {
                setIsDeleted(result.data?.deleteSchedule || false);
            }
        } catch(err) {
            if(err instanceof ApolloError || err instanceof Error) {
                setError(err.message);
            }
        }
    }

    const fetchSchedule = (): any => {
        if(schedules) {
            return schedules.map((schedule: Schedule) => (
                <Tr key={schedule.id}>
                    <Td><span className="font-medium">{schedule.id}</span></Td>
                    <Td>{`${schedule.train?.id}-${schedule.train?.type}`}</Td>
                    <Td>{schedule.route?.startStation?.name} - {schedule.route?.endStation?.name}</Td>
                    <Td>{schedule.departureTime}</Td>
                    <Td>{schedule.arrivalTime || 'N/A'}</Td>
                    <Td>{toPascalCase(schedule.status?.name!)}</Td>
                    <Td>
                        <Link to={`edit/${schedule.id}`} className="font-medium underline">View</Link>&nbsp;|&nbsp;
                        <button className="font-medium underline" onClick={() => handleDeleteClick(+schedule.id)}>Delete</button>
                    </Td>
                </Tr>
            ));
        }
    }

    if(loading) return <p>Fetching Schedules...</p>

    if(error) {
        console.log(error.cause);

        return <p>Error: {error.message}</p>
    }

    return (
        <>  
            <Link to={`create`} type="button" className="inline-block rounded bg-blue-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                Create New
            </Link>
            <br/>
            <br/>
            <Table>
                <Thead>
                    <Tr withStyle={false}>
                        <Th>ID</Th>
                        <Th>Train</Th>
                        <Th>Route</Th>
                        <Th>Departure Time</Th>
                        <Th>Arrival Time</Th>
                        <Th>Status</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {fetchSchedule()}
                </Tbody>
            </Table>
        </>
    )
}