import { ReactNode } from 'react'
import { ChangeHandler, RefCallBack } from 'react-hook-form';

export interface TableProps {
    children: ReactNode;
    withStyle?: boolean;
}

export interface InputProps {
    defaultValue?: string | number;
    name?: string;
    label?: string;
    placeholder?: string;
    type?: string;
    allowDecimals?: boolean;
    minDate?: string;
    maxDate?: string;
    handleChange?: any;
    ref?: RefCallBack;
    onChange?: ChangeHandler;
    onBlur?: ChangeHandler;
    errorMessage?: string;
}

export interface SelectOption {
    key: any;
    value: any;
}

export interface SelectProps {
    defaultValue?: string | number;
    name?: string;
    label?: string;
    handleChange?: any;
    options: SelectOption[];
    useDefault: boolean;
    placeholder?: string;
    ref?: RefCallBack;
    onChange?: ChangeHandler;
    errorMessage?: string;
}

export interface ButtonProps {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    handleClick?: any;
}