import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GET_TRAIN_BY_ID } from '../../graphql/queries';
import { SAVE_TRAIN } from '../../graphql/mutations';
import { useMutation, useQuery } from '@apollo/client';
import { TRAINS_TYPE, Train } from '../../graphql/types';

const EditTrain: React.FC = () => {
    const { id } = useParams();
    const [train, setTrain] = useState<Train>();
    const { loading, data, error } = useQuery<TRAINS_TYPE>(GET_TRAIN_BY_ID, {variables: { id: +id! }});
    const [saveTrain, mutationObjects] = useMutation<Train, { train: Train }>(SAVE_TRAIN);

    useEffect(() => {
        if(data) {
            setTrain(data.trainById);
        }
    }, [data])

    const handleChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setTrain((prevTrain) => ({
            ...prevTrain,
            [name]: name === 'capacity' || name === 'maxSpeed' ? Number(value) : value,
        }));
    }

    const handleSubmit: any = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!train) return

        await saveTrain({ variables: {train: { id: train.id!, type: train.type!, capacity: train.capacity!, maxSpeed: train.maxSpeed! }} });
        console.log("Result: ", mutationObjects.data);
        console.log("Error: ", mutationObjects.error);
    }

    if(loading) return <p>Fetching train...</p>

    if(error) return <p>Error: {error.message}</p>

    return (
        <form onSubmit={handleSubmit} onChange={handleChange}>
            <div className='form-input'>
                <label htmlFor='type'>Type: </label>
                <input name='type' type='text' defaultValue={train?.type}/>
            </div>
            <div className='form-input'>
                <label htmlFor='capacity'>Capacity: </label>
                <input name='capacity' type='number' defaultValue={train?.capacity} />
            </div>
            <div className='form-input'>
                <label htmlFor='maxSpeed'>Max Speed (Km/h): </label>
                <input name='maxSpeed' type='number' defaultValue={train?.maxSpeed} />
            </div>
            <div className='form-buttons'>
                <button type='submit' className='border-2 border-black'>Save</button>
            </div>
        </form>
    )
}

export default EditTrain;