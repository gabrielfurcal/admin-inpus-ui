import React from 'react'
import { WrapperProps } from '../../types/WrapperProps'

export const Tr: React.FC<WrapperProps> = ({ children, withStyle = true }) => {
    const style = "border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600";

    return (
        <tr className={withStyle ? style : ""}>
            {children}
        </tr>
    )
}