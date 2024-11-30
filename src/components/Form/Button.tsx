import { useEffect, useState } from 'react'
import { ButtonProps } from '../props'

export const Button: React.FC<ButtonProps> = ({ text, handleClick, type = 'button' }) => {
    const [styleType, setStyleType] = useState('neutral');

    useEffect(() => {
        if(type === 'submit') setStyleType('primary')
    }, [type])

    return (
        <button type={type} onClick={handleClick} className={`inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-${styleType}-accent-300 hover:shadow-primary-2 focus:bg-${styleType}-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-${styleType}-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong`}>
            {text}
        </button>
    )
}
