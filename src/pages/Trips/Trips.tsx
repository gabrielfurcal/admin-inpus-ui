import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client/react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

import Paginator from "../../components/Paginator";
import { Table, Tbody, Td, Th, Thead, Tr } from "../../components/Table";
import { usePageTitle } from "../../contexts/page-title/PageTitleContext";
import { GET_TRIPS_PAGE } from "../../graphql/queries";
import { DELETE_TRIP } from "../../graphql/mutations";
import { Trip } from "../../graphql/gql/graphql";

export const Trips: React.FC = () => {
    const [trips, setTrips] = useState<Trip[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const [_error, setError] = useState<string>();
    const [isDeleted, setIsDeleted] = useState<boolean>();
    const { loading, data, error, refetch } = useQuery(GET_TRIPS_PAGE, { variables: { offset: currentPage - 1, limit } });
    const { setTitle } = usePageTitle();
    const [deleteTrip] = useMutation(DELETE_TRIP);
    const totalPages = Math.ceil((data?.tripsPage.totalCount ?? 0) / limit);

    useEffect(() => {
        setTitle('Trips');
    }, [data, setTitle]);

    useEffect(() => {
        if (totalPages > 0 && currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    useEffect(() => {
        if(data) {
            setTrips(data.tripsPage.items);
        }

        if(isDeleted) {
            toast.success('Trip deleted', {
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
        if(await !window.confirm(`Are you sure you want to delete Trip ${id.toString()}?`)) return;

        try {
            const result = await deleteTrip({ variables: { id } });

            if(result.error) {
                throw new Error(result.error.message);
            } else {
                setIsDeleted(result.data?.deleteTrip || false);
            }
        } catch(err) {
            if(err instanceof Error) {
                setError(err.message);
            }
        }
    }

    const fetchTrips = (): any => {
        if(trips) {
            return trips.map((trip: Trip) => (
                <Tr key={trip.id}>
                    <Td><span className="font-medium">{trip.id}</span></Td>
                    <Td>{trip.schedule?.id}</Td>
                    <Td>{trip.train?.type}</Td>
                    <Td>{trip.startTime} - {trip.endTime}</Td>
                    <Td>{trip.status?.name}</Td>
                    <Td>
                        <Link to={`edit/${trip.id}`} className="font-medium underline">View</Link>&nbsp;|&nbsp;
                        <button className="font-medium underline" onClick={() => handleDeleteClick(trip.id)}>Delete</button>
                    </Td>
                </Tr>
            ));
        }
    }

    if(loading) return <p>Fetching Trips...</p>

    if(error) {
        return <p>Error: {error.message}</p>
    }

    return (
        <>
            <Link to={`create`} type="button" className="inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-light-3 transition duration-150 ease-in-out hover:bg-blue-500 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                Create New
            </Link>
            <label className="ml-2 mr-2">Show Results</label>
            <select onChange={(e) => { setCurrentPage(1); setLimit(+e.target.value); }} value={limit}>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
            </select>
            <br/>
            <br/>
            <Table>
                <Thead>
                    <Tr withStyle={false}>
                        <Th>ID</Th>
                        <Th>Schedule ID</Th>
                        <Th>Train Type</Th>
                        <Th>Time</Th>
                        <Th>Status</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {fetchTrips()}
                </Tbody>
            </Table>
            <Paginator currentPage={currentPage} totalPages={totalPages} onPageChange={(pageNumber) => setCurrentPage(pageNumber)} />
        </>
    )
}