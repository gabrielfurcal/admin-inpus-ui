import React from 'react'
import { WrapperProps } from '../../types/WrapperProps'

export const Thead: React.FC<WrapperProps> = ({ children }) => {
    return (
        <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
            {children}
        </thead>
    );
  }
