import { ReactNode } from 'react'

export interface TableProps {
    children: ReactNode;
    withStyle?: boolean;
}

export interface InputProps {
    value?: string | number;
    name?: string;
    label?: string;
    placeholder?: string;
    type?: string;
    allowDecimals?: boolean;
    handleChange?: any;
}

export interface ButtonProps {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    handleClick?: any;
}