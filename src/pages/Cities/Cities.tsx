import React, { useState, useEffect } from "react";
import { City, useDeleteCityMutation, useGetCitiesQuery } from "../../graphql/schema";
import { Link } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "../../components/Table";
import { usePageTitle } from "../../contexts/PageTitleContext";
import { toast } from 'react-toastify';
import { ApolloError } from "@apollo/client";

export const Cities: React.FC = () => {
    const [cities, setCities] = useState<City[]>([]);
    const [_error, setError] = useState<string>();
    const [isDeleted, setIsDeleted] = useState<boolean>();
    const { loading, data, error, refetch } = useGetCitiesQuery();
    const { setTitle } = usePageTitle();
    const [deleteCity] = useDeleteCityMutation();

    useEffect(() => {
        setTitle('Cities');
    }, [data, setTitle]);

    useEffect(() => {
        if(data) {
            setCities(data.cities);
        }

        if(isDeleted) {
            toast.success('City deleted', {
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
        if(await !window.confirm(`Are you sure you want to delete City ${id.toString()}?`)) return;

        try {
            const result = await deleteCity({ variables: { id } });

            if(result.errors) {
                throw new Error(result.errors.map((err) => err.message).join(','));
            } else {
                setIsDeleted(result.data?.deleteCity || false);
            }
        } catch(err) {
            if(err instanceof ApolloError || err instanceof Error) {
                setError(err.message);
            }
        }
    }

    const fetchCities = (): any => {
        if(cities) {
            return cities.map((city: City) => (
                <Tr key={city.id}>
                    <Td><span className="font-medium">{city.id}</span></Td>
                    <Td>{city.city}</Td>
                    <Td>{city.province}</Td>
                    <Td>{city.country}</Td>
                    <Td>
                        <Link to={`edit/${city.id}`} className="font-medium underline">View</Link>&nbsp;|&nbsp;
                        <button className="font-medium underline" onClick={() => handleDeleteClick(+city.id)}>Delete</button>
                    </Td>
                </Tr>
            ));
        }
    }

    if(loading) return <p>Fetching Cities...</p>

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
                        <Th>City</Th>
                        <Th>Province</Th>
                        <Th>Country</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {fetchCities()}
                </Tbody>
            </Table>
        </>
    )
}