import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

import Paginator from "../../components/Paginator";
import { Table, Tbody, Td, Th, Thead, Tr } from "../../components/Table";
import { usePageTitle } from "../../contexts/PageTitleContext";
import { Timezone, useDeleteTimezoneMutation, useGetTimezonesQuery } from "../../graphql/schema";

export const Timezones: React.FC = () => {
    const [timezones, setTimezones] = useState<Timezone[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [_error, setError] = useState<string>();
    const [isDeleted, setIsDeleted] = useState<boolean>();
    const { loading, data, error, refetch } = useGetTimezonesQuery();
    const { setTitle } = usePageTitle();
    const [deleteTimezone] = useDeleteTimezoneMutation();

    useEffect(() => {
        setTitle('Timezones');
    }, [data, setTitle]);

    useEffect(() => {
        if(data) {
            setTimezones(data.timezones);
        }

        if(isDeleted) {
            toast.success('Timezone deleted', {
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
        if(await !window.confirm(`Are you sure you want to delete Timezone ${id.toString()}?`)) return;

        try {
            const result = await deleteTimezone({ variables: { id } });

            if(result.error) {
                throw new Error(result.error.message);
            } else {
                setIsDeleted(result.data?.deleteTimezone || false);
            }
        } catch(err) {
            if(err instanceof Error) {
                setError(err.message);
            }
        }
    }

    const fetchTimezones = (): any => {
        if(timezones) {
            return timezones.map((timezone: Timezone) => (
                <Tr key={timezone.id}>
                    <Td><span className="font-medium">{timezone.id}</span></Td>
                    <Td>{timezone.name}</Td>
                    <Td>{timezone.region}</Td>
                    <Td>
                        <Link to={`edit/${timezone.id}`} className="font-medium underline">View</Link>&nbsp;|&nbsp;
                        <button className="font-medium underline" onClick={() => handleDeleteClick(+timezone.id)}>Delete</button>
                    </Td>
                </Tr>
            ));
        }
    }

    if(loading) return <p>Fetching Timezones...</p>

    if(error) {
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
                        <Th>Region</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {fetchTimezones()}
                </Tbody>
            </Table>
            <Paginator currentPage={50} totalPages={100} onPageChange={(page) => {alert('Page changed to ' + page)}} />
        </>
    )
}