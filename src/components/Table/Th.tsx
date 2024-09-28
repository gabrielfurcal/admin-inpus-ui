import React from 'react'
import { WrapperProps } from '../../types/WrapperProps'

export const Th: React.FC<WrapperProps> = ({ children }) => {
  return (
    <th scope="col" className="px-6 py-4">
        {children}
    </th>
  )
}
