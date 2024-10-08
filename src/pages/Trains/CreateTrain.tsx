import React, { useEffect, useState } from 'react'
import { Train, useSaveTrainMutation } from '../../graphql/schema';
import { Input } from '../../components/Form/Input';
import { PageHeader } from '../../components/PageHeader';
import { Button } from '../../components/Form/Button';

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
        <>
            <br/>
            <PageHeader title="Create Train"></PageHeader> 
            <br/>
            <form onSubmit={handleSubmit}>
            <Input value={train?.type} label='Type' placeholder='Insert a type' handleChange={handleChange} />
            <Input value={train?.capacity} label='Capacity' placeholder='Insert capacity' handleChange={handleChange} />
            <Input value={train?.capacity} label='Max Speed (Km/h)' placeholder='Insert max speed' handleChange={handleChange} />
            
            <div className='form-buttons'>
                <Button type='submit' text='Save'></Button>
                {isSaved ? <label>Train saved</label> : <></>}
            </div>
        </form>
        </>
    )
}

export default CreateTrain;