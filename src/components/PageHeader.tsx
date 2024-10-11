import React from 'react'
import { usePageTitle } from '../contexts/PageTitleContext'

export const PageHeader: React.FC = () => {
  const { title } = usePageTitle();

  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-blue-400 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4 rounded-md">
    <div className="flex w-full flex-wrap items-center justify-between px-3">
        <span className="ms-2 text-white/100 dark:text-white/60 font-semibold">{title}</span>
    </div>
    </nav>
  )
}
