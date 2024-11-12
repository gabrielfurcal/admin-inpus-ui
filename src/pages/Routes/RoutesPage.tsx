import React, { useState, useEffect } from "react";
import { Route, useDeleteRouteMutation, useGetRoutesQuery } from "../../graphql/schema";
import { Link } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "../../components/Table";
import { usePageTitle } from "../../contexts/PageTitleContext";
import { toast } from 'react-toastify';
import { ApolloError } from "@apollo/client";

export const RoutesPage: React.FC = () => {
    const [routes, setRoutes] = useState<Route[]>([]);
    const [_error, setError] = useState<string>();
    const [isDeleted, setIsDeleted] = useState<boolean>();
    const { loading, data, error, refetch } = useGetRoutesQuery();
    const { setTitle } = usePageTitle();
    const [deleteRoute] = useDeleteRouteMutation();

    useEffect(() => {
        setTitle('Routes');
    }, [data, setTitle]);

    useEffect(() => {
        if(data) {
            setRoutes(data.routes);
        }

        if(isDeleted) {
            toast.success('Route deleted', {
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
        if(await !window.confirm(`Are you sure you want to delete Route ${id.toString()}?`)) return;

        try {
            const result = await deleteRoute({ variables: { id } });

            if(result.errors) {
                throw new Error(result.errors.map((err) => err.message).join(','));
            } else {
                setIsDeleted(result.data?.deleteRoute || false);
            }
        } catch(err) {
            if(err instanceof ApolloError || err instanceof Error) {
                setError(err.message);
            }
        }
    }

    const fetchRoutes = (): any => {
        if(routes) {
            return routes.map((route: Route) => (
                <Tr key={route.id}>
                    <Td><span className="font-medium">{route.id}</span></Td>
                    <Td>{route?.startStation?.name} - {route?.endStation?.name}</Td>
                    <Td>{route.distance} Km</Td>
                    <Td>
                        <Link to={`edit/${route.id}`} className="font-medium underline">View</Link>&nbsp;|&nbsp;
                        <button className="font-medium underline" onClick={() => handleDeleteClick(+route.id!)}>Delete</button>
                    </Td>
                </Tr>
            ));
        }
    }

    if(loading) return <p>Fetching Routes...</p>

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
                        <Th>Departure - Arrival</Th>
                        <Th>Distance</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {fetchRoutes()}
                </Tbody>
            </Table>
        </>
    )
}