import React from 'react'
import { TableProps } from '../props'

export const Td: React.FC<TableProps> = ({ children }) => {
  return (
    <td className="whitespace-nowrap px-6 py-4">
        {children}
    </td>
  )
}
