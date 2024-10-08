import React, { useState, useEffect } from "react";
import { Train, useGetTrainsQuery } from "../../graphql/schema";
import { Link } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "../../components/Table";
import { PageHeader } from "../../components/PageHeader";

const Trains: React.FC = () => {
    const [trains, setTrains] = useState<Train[]>([]);
    const { loading, data, error } = useGetTrainsQuery();

    useEffect(() => {
        // document.title+= " | Trains";

        if(data) {
            setTrains(data.trains);
        }
    }, [data])

    const fetchTrains = (): any => {
        if(trains) {
            return trains.map((train: Train) => (
                <Tr key={train.id}>
                    <Td><span className="font-medium">{train.id}</span></Td>
                    <Td>{train.type}</Td>
                    <Td>{train.capacity} passengers</Td>
                    <Td>{train.maxSpeed} km/h</Td>
                    <Td>
                        <Link to={`edit/${train.id}`} className="font-medium underline">View</Link>&nbsp;|&nbsp;
                        <button className="font-medium underline">Delete</button>
                    </Td>
                </Tr>
            ));
        }
    }

    if(loading) return <p>Fetching Trains...</p>

    if(error) return <p>Error: {error.message}</p>

    return (
        <>  
            <br/>
            <PageHeader title="Trains"></PageHeader> 
            <br/>
            <Link to={`create`} type="button" className="inline-block rounded bg-blue-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                Create New
            </Link>
            <br/>
            <br/>
            <Table>
                <Thead>
                    <Tr withStyle={false}>
                        <Th>ID</Th>
                        <Th>Type</Th>
                        <Th>Capacity</Th>
                        <Th>Max Speed</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {fetchTrains()}
                </Tbody>
            </Table>
        </>
    )
}

export default Trains;