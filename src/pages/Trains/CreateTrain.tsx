import React, { useEffect, useState } from 'react'
import { Train, useSaveTrainMutation } from '../../graphql/schema';

const CreateTrain: React.FC = () => {
    const [train, setTrain] = useState<Train>();
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [saveTrain] = useSaveTrainMutation();

    useEffect(() => {
        // document.title+= " | Create Train";
    }, [])

    const handleChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
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

        if(!train) return

        await saveTrain({ variables: {train: { id: train.id!, type: train.type!, capacity: train.capacity!, maxSpeed: train.maxSpeed! }} });

        setIsSaved(true);
    }

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
                {isSaved ? <label>Train saved</label> : <></>}
            </div>
        </form>
    )
}

export default CreateTrain;