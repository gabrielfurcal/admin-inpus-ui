import React from 'react'
import { TableProps } from '../props'

export const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-y-auto sm:-mx-6 lg:-mx-8">
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
