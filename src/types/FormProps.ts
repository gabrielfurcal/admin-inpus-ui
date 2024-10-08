export interface InputProps {
    value?: string | number;
    label?: string;
    placeholder?: string;
    type?: string;
    handleChange?: any;
}

export interface ButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    handleClick?: any;
}