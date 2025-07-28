import React from 'react'
import { LayoutProps } from './props'
import { PageHeader } from '../components/PageHeader'
import { ToastContainer } from 'react-toastify'

export const PageLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='w-4/5 mx-auto'>
      <section className='py-2'>
        <PageHeader/>
      </section>
      <section className='shadow-xl p-3 mt-2 bg-neutral-100 rounded-md'>
        {children}
      </section>
      <ToastContainer />
    </div>
  )
}
