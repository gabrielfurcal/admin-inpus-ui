import React from 'react'
import { TableProps } from '../../types/TableProps'

export const Thead: React.FC<TableProps> = ({ children }) => {
    return (
        <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
            {children}
        </thead>
    );
  }
