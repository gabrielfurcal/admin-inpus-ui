import React from 'react'
import { WrapperProps } from '../../types/WrapperProps'

export const Table: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                {children}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
