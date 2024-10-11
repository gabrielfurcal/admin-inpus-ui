import React from 'react'
import { TableProps } from '../props'

export const Th: React.FC<TableProps> = ({ children }) => {
  return (
    <th scope="col" className="px-6 py-4">
        {children}
    </th>
  )
}
