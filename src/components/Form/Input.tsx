import React, { useEffect, useRef, useState } from 'react'
import { InputProps } from '../props'

export const Input: React.FC<InputProps> = ({ value, name, label, placeholder, handleChange, type = 'text', allowDecimals = false }) => {
    const [defaultId, setDefaultId] = useState('');
    const [filledStyle, setFilledStype] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(value !== '') setFilledStype('-translate-y-[0.9rem] scale-[0.8] text-gray');
    }, [value])

    useEffect(() => {
        if(!label) setDefaultId(crypto.randomUUID());
    }, [label])

    const internalHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        if(value !== '') {
            setFilledStype('-translate-y-[0.9rem] scale-[0.8] text-gray');
        } else {
            setFilledStype('');
        }

        handleChange(e);
    }

    return (
        <div className='relative mb-5' data-twe-input-wrapper-init>
            <input
                type={type}
                step={allowDecimals ? '.01': ''}
                ref={inputRef}
                defaultValue={value}
                className='peer block min-h-[auto] w-full rounded shadow-sm bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0'
                name={name}
                id={`${label || defaultId}FormControlInputText`}
                placeholder={placeholder}
                onChange={internalHandleChange} />
            <label
                htmlFor={`${label || defaultId}FormControlInputText`}
                className={`${filledStyle} pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-gray peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary`}
                >{label}
            </label>
        </div>
    )
}
