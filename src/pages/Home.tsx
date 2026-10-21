import React, { useEffect } from 'react'
import { usePageTitle } from '../contexts/page-title/PageTitleContext';

const Home: React.FC = () => {
    const { setTitle } = usePageTitle();

    useEffect(() => {
        setTitle('Home');
    }, [setTitle]);
    
    return (
        <>
            <span>admin-inputs</span>
        </>
    );
}

export default Home;