import React, { useState, useEffect } from "react";
import { Station, useDeleteStationMutation, useGetStationsQuery } from "../../graphql/schema";
import { Link } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "../../components/Table";
import { usePageTitle } from "../../contexts/PageTitleContext";
import { toast } from 'react-toastify';
import { ApolloError } from "@apollo/client";

export const Stations: React.FC = () => {
    const [stations, setStations] = useState<Station[]>([]);
    const [_error, setError] = useState<string>();
    const [isDeleted, setIsDeleted] = useState<boolean>();
    const { loading, data, error, refetch } = useGetStationsQuery();
    const { setTitle } = usePageTitle();
    const [deleteStation] = useDeleteStationMutation();

    useEffect(() => {
        setTitle('Stations');
    }, [data, setTitle]);

    useEffect(() => {
        if(data) {
            setStations(data.stations);
        }

        if(isDeleted) {
            toast.success('Status deleted', {
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
        if(await !window.confirm(`Are you sure you want to delete Station ${id.toString()}?`)) return;

        try {
            const result = await deleteStation({ variables: { id } });

            if(result.errors) {
                throw new Error(result.errors.map((err) => err.message).join(','));
            } else {
                setIsDeleted(result.data?.deleteStation || false);
            }
        } catch(err) {
            if(err instanceof ApolloError || err instanceof Error) {
                setError(err.message);
            }
        }
    }

    const fetchStations = (): any => {
        if(stations) {
            return stations.map((station: Station) => (
                <Tr key={station.id}>
                    <Td><span className="font-medium">{station.id}</span></Td>
                    <Td>{station.name}</Td>
                    <Td>+{station.countryCode} {station.phone}</Td>
                    <Td>{station.postalCode}</Td>
                    <Td>{station.latitude}, {station.longitude}</Td>
                    <Td>
                        <Link to={`edit/${station.id}`} className="font-medium underline">View</Link>&nbsp;|&nbsp;
                        <button className="font-medium underline" onClick={() => handleDeleteClick(station.id)}>Delete</button>
                    </Td>
                </Tr>
            ));
        }
    }

    if(loading) return <p>Fetching Stations...</p>

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
                        <Th>Phone</Th>
                        <Th>Postal Code</Th>
                        <Th>Coordinates</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {fetchStations()}
                </Tbody>
            </Table>
        </>
    )
}