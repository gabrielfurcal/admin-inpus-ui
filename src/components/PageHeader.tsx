import React from 'react'

export const PageHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-blue-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4 rounded-md">
    <div className="flex w-full flex-wrap items-center justify-between px-3">
        <span className="ms-2 text-black/60 dark:text-white/60">{title}</span>
    </div>
    </nav>
  )
}
