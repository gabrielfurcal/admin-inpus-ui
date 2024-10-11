import React, { useEffect, useState } from 'react'
import { TrainInput, useSaveTrainMutation } from '../../graphql/schema';
import { Input, Button } from '../../components/Form';
import { usePageTitle } from '../../contexts/PageTitleContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ApolloError } from '@apollo/client';

const CreateTrain: React.FC = () => {
    const [train, setTrain] = useState<TrainInput>({ type: '', capacity: 0, maxSpeed: 0 });
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const [saveTrain] = useSaveTrainMutation();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();
    
    useEffect(() => {
        setTitle('Create trains');
    }, [setTitle]);

    useEffect(() => {
        if(isSaved) {
            toast.success('Train created', {
                theme: 'light'
            });
            setIsSaved(false);
            navigate('/trains');
        }

        if(error) {
            toast.error(error, {
                theme: 'light'
            })
        }

    }, [error, isSaved, navigate, setTitle]);

    const handleChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setTrain((prevTrain) => {
            return {
                ...prevTrain,
                [name]: name === 'capacity' || name === 'maxSpeed' ? Number(value) : value,
            }
        });
    }

    const handleSubmit: any = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!train) return

        try {
            const result = await saveTrain({ variables: {train: { ...train }} });

            if(result.errors) {
                throw new Error(result.errors.map((err) => err.message).join(','));
            } else {
                setIsSaved(true);
            }
        } catch(err) {
            if(err instanceof ApolloError || err instanceof Error) {
                setError(err.message);
            }
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input name='type' label='Type' placeholder='Insert a type' handleChange={handleChange} />
                <Input type='number' name='capacity' label='Capacity' placeholder='Insert capacity' handleChange={handleChange} />
                <Input type='number' allowDecimals={true}  name='maxSpeed' label='Max Speed (Km/h)' placeholder='Insert max speed' handleChange={handleChange} />
                <Button type='submit' text='Save'/>
            </form>
        </>
    )
};

export default CreateTrain;