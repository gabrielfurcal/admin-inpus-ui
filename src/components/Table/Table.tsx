import React from 'react'
import { TableProps } from '../props'

export const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <div className="flex flex-col bg-neutral-300 rounded-md ">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 h-96">
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
