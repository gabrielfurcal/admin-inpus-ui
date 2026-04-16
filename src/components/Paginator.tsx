import React from 'react';

import { PAGINATION_PAGES } from '../constants';
import { PaginatorProps } from './props';

const getVisiblePages = (
    currentPage: number,
    totalPages: number,
    maxVisiblePages: number
): number[] => {
    if (totalPages <= 0) {
        return [];
    }

    const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);
    const visibleCount = Math.min(maxVisiblePages, totalPages);
    const half = Math.floor(visibleCount / 2);

    let startPage = safeCurrentPage - half;
    let endPage = startPage + visibleCount - 1;

    if (startPage < 1) {
        startPage = 1;
        endPage = visibleCount;
    }

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, totalPages - visibleCount + 1);
    }

    return Array.from(
        { length: endPage - startPage + 1 },
        (_, index) => startPage + index
    );
};

const Paginator: React.FC<PaginatorProps> = ({ currentPage, totalPages, onPageChange }) => {
    const safeCurrentPage = Math.min(Math.max(currentPage, 1), Math.max(totalPages, 1));
    const visiblePages = getVisiblePages(safeCurrentPage, totalPages, PAGINATION_PAGES);

    const handlePageChange = (pageNumber: number) => {
        const nextPage = Math.min(Math.max(pageNumber, 1), totalPages);

        if (nextPage !== safeCurrentPage) {
            onPageChange(nextPage);
        }
    };

    return (
        <nav aria-label="Page navigation" className="mt-2">
            <hr />
            <ul className="list-style-none flex mt-1 justify-end">
                <li>
                    <button
                        type="button"
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-blue-400 hover:text-white active:bg-blue-100 active:text-primary-700 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-blue-800 dark:focus:text-primary-500 dark:active:bg-blue-800 dark:active:text-primary-500"
                        onClick={() => handlePageChange(1)}
                        disabled={safeCurrentPage === 1 || totalPages <= 0}
                    >
                        First
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-blue-300 hover:text-white active:bg-blue-100 active:text-primary-700 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-blue-800 dark:focus:text-primary-500 dark:active:bg-blue-800 dark:active:text-primary-500"
                        onClick={() => handlePageChange(safeCurrentPage - 1)}
                        disabled={safeCurrentPage === 1 || totalPages <= 0}
                    >
                        Prev
                    </button>
                </li>
                {visiblePages.map((pageNumber) => {
                    const isActive = pageNumber === safeCurrentPage;

                    return (
                        <li key={pageNumber}>
                            <button
                                type="button"
                                className={[
                                    'relative block rounded px-3 py-1.5 text-sm transition duration-300 focus:outline-none dark:text-white dark:hover:bg-blue-800 dark:focus:bg-blue-800',
                                    isActive
                                        ? 'bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:bg-blue-500'
                                        : 'bg-transparent text-surface hover:bg-blue-100 focus:bg-blue-100 focus:text-primary-700 active:bg-blue-100 active:text-primary-700 dark:focus:text-primary-500 dark:active:bg-blue-800 dark:active:text-primary-500',
                                ].join(' ')}
                                onClick={() => handlePageChange(pageNumber)}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                {pageNumber}
                            </button>
                        </li>
                    );
                })}
                <li>
                    <button
                        type="button"
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-blue-300 hover:text-white active:bg-blue-100 active:text-primary-700 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-blue-800 dark:focus:text-primary-500 dark:active:bg-blue-800 dark:active:text-primary-500"
                        onClick={() => handlePageChange(safeCurrentPage + 1)}
                        disabled={safeCurrentPage === totalPages || totalPages <= 0}
                    >
                        Next
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-blue-400 hover:text-white active:bg-blue-100 active:text-primary-700 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-blue-800 dark:focus:text-primary-500 dark:active:bg-blue-800 dark:active:text-primary-500"
                        onClick={() => handlePageChange(totalPages)}
                        disabled={safeCurrentPage === totalPages || totalPages <= 0}
                    >
                        Last
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Paginator;
