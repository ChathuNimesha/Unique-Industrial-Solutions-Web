import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnNavigate = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant' // Instant scroll on page change
        });
    }, [pathname]);

    return null;
};

export default ScrollToTopOnNavigate;
