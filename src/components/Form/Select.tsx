import React, { useEffect, useRef, useState } from 'react'
import { SelectOption, SelectProps } from '../props'

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ name, defaultValue, label, handleChange, onChange, options, useDefault = false, placeholder, errorMessage }, ref) => {
    const [defaultId, setDefaultId] = useState('');
    const [filledStyle, setFilledStype] = useState('');
    const selectRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        setFilledStype('-translate-y-[0.9rem] scale-[0.8] text-gray');
    }, []);

    useEffect(() => {
        if(!label) setDefaultId(crypto.randomUUID());
    }, [label]);

    const internalHandleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if(onChange) onChange(e);

        if(handleChange) handleChange(e);
    }

    return (
        <div className='relative mb-5' data-twe-input-wrapper-init>
            <select
                ref={ref || selectRef}
                name={name}
                onChange={internalHandleChange}
                defaultValue={defaultValue}
                className='peer block min-h-[auto] w-full rounded shadow-sm bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear peer-focus:text-primary motion-reduce:transition-none dark:text-white dark:autofill:shadow-autofill dark:peer-focus:text-primary'
                id={`${label || defaultId}FormControlSelectText`}
            >
                {useDefault ? <option key="-1" value="">{placeholder}</option> : null}
                {options.map((option: SelectOption) => <option key={option.key} value={option.key}>{option.value}</option>)}
            </select>
            <label
                htmlFor={`${label || defaultId}FormControlInputText`}
                className={`${filledStyle} pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-gray peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary`}
                >{label}
            </label>
            {errorMessage ? <p className='text-red-500'>{errorMessage}</p> : <></>}
        </div>
    )
});