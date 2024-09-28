import React from 'react'
import { WrapperProps } from '../../types/WrapperProps'

export const Tbody: React.FC<WrapperProps> = ({ children }) => {
    return (
        <tbody>
            {children}
        </tbody>
    )
  }
