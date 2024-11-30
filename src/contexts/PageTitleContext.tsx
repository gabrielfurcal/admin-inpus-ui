import React, { useContext, useState } from 'react'
import { PageTitleContextProps } from './props';

interface _PageTitleContextProps {
    title: string,
    setTitle: any
}

const PAGE_TITLE_CONTEXT = React.createContext<_PageTitleContextProps>({
    title: 'No title',
    setTitle: () => {}
});

export const usePageTitle = () => {
    return useContext(PAGE_TITLE_CONTEXT);
}

export const PageTitleContext: React.FC<PageTitleContextProps> = ({ children }) => {
    const [pageTitle, setPageTitle] = useState<string>('No title');

    return (
        <PAGE_TITLE_CONTEXT.Provider value={{title: pageTitle, setTitle: setPageTitle}}>
            {children}
        </PAGE_TITLE_CONTEXT.Provider>
    )
}
