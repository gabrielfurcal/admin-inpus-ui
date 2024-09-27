import React, { useState, useEffect } from "react";
import { Train } from "../../models/Train";
import { GET_TRAINS } from "../../graphql/queries";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

const Trains: React.FC = () => {
    const [trains, setTrains] = useState<Train[]>([]);
    const { loading, data, error } = useQuery<{trains: Train[]}>(GET_TRAINS);

    useEffect(() => {
        if(data) {
            setTrains(data.trains);
        }
    }, [data])

    const fetchTrains = (): any => {
        if(trains) {
            return trains.map((train: Train) => (
                    <tr key={train.id?.toString()} className="[&>td]:border [&>td]:border-gray-500 [&>td]:px-4 [&>td]:py-2">
                        <td>{train.id}</td>
                        <td>{train.type}</td>
                        <td>{train.capacity} passengers</td>
                        <td>{train.maxSpeed} km/h</td>
                        <td>
                            <Link to={`edit/${train.id?.toString()}`}>View</Link> |
                            <button>Delete</button>
                        </td>
                    </tr>
                )
            );
        }
    }

    if(loading) return <p>Fetching Trains...</p>

    if(error) return <p>Error: {error.message}</p>

    return (
        <>
            <table className="table-auto border border-collapse border-gray-500 w-[1000px]">
                <thead>
                    <tr className="[&>th]:border [&>th]:border-gray-500 [&>th]:px-4 [&>th]:py-2">
                        <th>ID</th>
                        <th>Type</th>
                        <th>Capacity</th>
                        <th>Max Speed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {fetchTrains()}
                </tbody>
            </table>
        </>
    )
}

export default Trains;