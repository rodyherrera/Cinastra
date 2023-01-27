import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = (Properties) => {
    const Location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [Location]);

    return <>{Properties.children}</>
};

export default ScrollToTop;