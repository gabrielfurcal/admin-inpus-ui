import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { TrainInput, useGetTrainByIdQuery, useSaveTrainMutation } from '../../graphql/schema';
import { Input, Button } from '../../components/Form';
import { usePageTitle } from '../../contexts/PageTitleContext';
import { toast } from 'react-toastify';
import { ApolloError } from '@apollo/client';

const EditTrain: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const numericId = id ? parseInt(id) : undefined
    const [train, setTrain] = useState<TrainInput>();
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [_error, setError] = useState<string>();
    const { loading, data, error } = useGetTrainByIdQuery({variables: { id: numericId! }});
    const [saveTrain] = useSaveTrainMutation();
    const { setTitle } = usePageTitle();
    const navigate = useNavigate();

    useEffect(() => {
        setTitle('Edit trains');
    }, [setTitle]);

    useEffect(() => {
        if(data && !isSaved) {
            setTrain({
                id: data.trainById?.id,
                type: data.trainById?.type,
                capacity: data.trainById?.capacity,
                maxSpeed: data.trainById?.maxSpeed
            });
        }

        if(isSaved) {
            toast.success('Train saved', {
                theme: 'light'
            });
            setIsSaved(false);
            navigate('/trains');
        }

        if(_error) {
            toast.error(_error, {
                theme: 'light'
            })
        }
    }, [data, _error, isSaved, navigate]);

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

        if (!train) return;

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
    }

    if(loading) return <p>Fetching train...</p>

    if(error) return <p>Error: {error.message}</p>

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input value={train?.type?.toString()} name='type' label='Type' placeholder='Insert a type' handleChange={handleChange} />
                <Input value={train?.capacity?.toString()} name='capacity' type='number' label='Capacity' placeholder='Insert capacity' handleChange={handleChange} />
                <Input value={train?.maxSpeed?.toString()} name='maxSpeed' type='number' allowDecimals={true} label='Max Speed (Km/h)' placeholder='Insert max speed' handleChange={handleChange} />
                <Button type='submit' text='Save'/>
            </form>
        </>
    )
};

export default EditTrain;