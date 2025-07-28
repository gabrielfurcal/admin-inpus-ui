import React from 'react'
import { TableProps } from '../props'

export const Tbody: React.FC<TableProps> = ({ children }) => {
    return (
        <tbody>
            {children}
        </tbody>
    )
  }
