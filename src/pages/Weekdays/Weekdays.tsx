import { ApolloError } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

import { Table, Tbody, Td, Th, Thead, Tr } from "../../components/Table";
import { usePageTitle } from "../../contexts/PageTitleContext";
import { useDeleteWeekdayMutation, useGetWeekdaysQuery, Weekday } from "../../graphql/schema";

export const Weekdays: React.FC = () => {
    const [weekdays, setWeekdays] = useState<Weekday[]>([]);
    const [_error, setError] = useState<string>();
    const [isDeleted, setIsDeleted] = useState<boolean>();
    const { loading, data, error, refetch } = useGetWeekdaysQuery();
    const { setTitle } = usePageTitle();
    const [deleteWeekday] = useDeleteWeekdayMutation();

    useEffect(() => {
        setTitle('Weekdays');
    }, [data, setTitle]);

    useEffect(() => {
        if(data) {
            setWeekdays(data.weekdays);
        }

        if(isDeleted) {
            toast.success('Weekday deleted', {
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
        if(await !window.confirm(`Are you sure you want to delete Weekday ${id.toString()}?`)) return;

        try {
            const result = await deleteWeekday({ variables: { id } });

            if(result.errors) {
                throw new Error(result.errors.map((err) => err.message).join(','));
            } else {
                setIsDeleted(result.data?.deleteWeekday || false);
            }
        } catch(err) {
            if(err instanceof ApolloError || err instanceof Error) {
                setError(err.message);
            }
        }
    }

    const fetchWeekdays = (): any => {
        if(weekdays) {
            return weekdays.map((weekday: Weekday) => (
                <Tr key={weekday.id}>
                    <Td><span className="font-medium">{weekday.id}</span></Td>
                    <Td>{weekday.name}</Td>
                    <Td>
                        <Link to={`edit/${weekday.id}`} className="font-medium underline">View</Link>&nbsp;|&nbsp;
                        <button className="font-medium underline" onClick={() => handleDeleteClick(+weekday.id)}>Delete</button>
                    </Td>
                </Tr>
            ));
        }
    }

    if(loading) return <p>Fetching Weekdays...</p>

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
                        <Th>Name</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {fetchWeekdays()}
                </Tbody>
            </Table>
        </>
    )
}