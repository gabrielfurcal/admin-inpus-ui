import React from 'react'
import { useEffect, useState } from 'react';

import { PaginatorProps } from './props';

const Paginator: React.FC<PaginatorProps> = ({ currentPage, totalPages, onPageChange }) => {
    const [pages, setPages] = useState<number[]>([]);
    const [page, setPage] = useState<number>(0);

    useEffect(() => {
        setPage(currentPage);
        setPages([]);
        for(let i = 1; i <= totalPages; i++) {
            setPages((prevPages) => [...prevPages, i]);
        }
    }, []);
  
    const handlePageChange = (pageNumber: number) => {
        setPage(pageNumber);
        onPageChange(pageNumber);       
    }

    const renderPageNumbers = (): any => {
        return pages.map((pageNumber) => {
            if(pageNumber > page - 5 && pageNumber < page + 5) {
                return (
                    <li key={pageNumber}>
                        <a className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-blue-100 focus:bg-blue-100 focus:text-primary-700 focus:outline-none active:bg-blue-100 active:text-primary-700 dark:text-white dark:hover:bg-blue-800 dark:focus:bg-blue-800 dark:focus:text-primary-500 dark:active:bg-blue-800 dark:active:text-primary-500 ${pageNumber === page ? 'bg-blue-100 text-grey-700' : ''}`}
                            href="#" onClick={() => handlePageChange(pageNumber)}>
                            {pageNumber}
                        </a>
                    </li>
                );
            } 
        });
    }

    return (
        <nav aria-label="Page navigation" className="mt-2">
            <hr/>
            <ul className="list-style-none flex mt-1 justify-end">
                <li>
                    <a className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-blue-400 hover:text-white active:bg-blue-100 active:text-primary-700 dark:hover:bg-blue-800 dark:focus:text-primary-500 dark:active:bg-blue-800 dark:active:text-primary-500"
                        href="#" onClick={() => handlePageChange(1)}>{"First"}</a>
                </li>
                <li>
                    <a className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-blue-300 hover:text-white active:bg-blue-100 active:text-primary-700 dark:hover:bg-blue-800 dark:focus:text-primary-500 dark:active:bg-blue-800 dark:active:text-primary-500"
                        href="#" onClick={() => handlePageChange(page - 1)}>{"Prev"}</a>
                </li>
                {renderPageNumbers()}
                <li>
                    <a className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-blue-300 hover:text-white active:bg-blue-100 active:text-primary-700 dark:hover:bg-blue-800 dark:focus:text-primary-500 dark:active:bg-blue-800 dark:active:text-primary-500"
                        href="#" onClick={() => handlePageChange(page + 1)}>{"Next"}</a>
                </li>
                <li>
                    <a className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-blue-400 hover:text-white active:bg-blue-100 active:text-primary-700 dark:hover:bg-blue-800 dark:focus:text-primary-500 dark:active:bg-blue-800 dark:active:text-primary-500"
                        href="#" onClick={() => handlePageChange(totalPages)}>{"Last"}</a>
                </li>
            </ul>
        </nav>
    )
}

export default Paginator;
