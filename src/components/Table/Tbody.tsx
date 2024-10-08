import React from 'react'
import { TableProps } from '../../types/TableProps'

export const Tbody: React.FC<TableProps> = ({ children }) => {
    return (
        <tbody>
            {children}
        </tbody>
    )
  }
