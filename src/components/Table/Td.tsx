import React from 'react'
import { WrapperProps } from '../../types/WrapperProps'

export const Td: React.FC<WrapperProps> = ({ children }) => {
  return (
    <td className="whitespace-nowrap px-6 py-4">
        {children}
    </td>
  )
}
