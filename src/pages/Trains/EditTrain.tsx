import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Train, useGetTrainByIdQuery, useSaveTrainMutation } from '../../graphql/schema';

const EditTrain: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const numericId = id ? parseInt(id) : undefined
    const [train, setTrain] = useState<Train>();
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const { loading, data, error } = useGetTrainByIdQuery({variables: { id: numericId! }});
    const [saveTrain] = useSaveTrainMutation();

    useEffect(() => {
        //document.title+= " | Edit Train";
    }, [])

    useEffect(() => {
        if(data) {
            setTrain(data.trainById!);
        }
    }, [data])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setTrain((prevTrain) => {
            if(!prevTrain) return prevTrain;

            return {
                ...prevTrain,
                [name]: name === 'capacity' || name === 'maxSpeed' ? Number(value) : value,
            }  
        });

    }

    const handleSubmit: any = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!train || !train.id || !train.type || !train.capacity || !train.maxSpeed) return;

        await saveTrain({ variables: {train: { id: train.id!, type: train.type!, capacity: train.capacity!, maxSpeed: train.maxSpeed! }} });

        setIsSaved(true);
    }

    if(loading) return <p>Fetching train...</p>

    if(error) return <p>Error: {error.message}</p>

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-input'>
                <label htmlFor='type'>Type: </label>
                <input name='type' type='text' value={train?.type || ''} onChange={handleChange}/>
            </div>
            <div className='form-input'>
                <label htmlFor='capacity'>Capacity: </label>
                <input name='capacity' type='number' value={train?.capacity || 0} onChange={handleChange}/>
            </div>
            <div className='form-input'>
                <label htmlFor='maxSpeed'>Max Speed (Km/h): </label>
                <input name='maxSpeed' type='number' value={train?.maxSpeed || 0} onChange={handleChange}/>
            </div>
            <div className='form-buttons'>
                <button type='submit' className='border-2 border-black'>Save</button>
                {isSaved ? <label>Train saved</label> : <></>}
            </div>
        </form>
    )
}

export default EditTrain;