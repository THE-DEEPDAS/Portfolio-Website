import React from 'react';
import Sidebar from './Sidebar';
import HamburgerMenu from './HamburgerMenu';
import { useMediaQuery } from 'react-responsive';

const Navigation = () => {
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    return (
        <>
            {isDesktop ? <Sidebar /> : <HamburgerMenu />}
        </>
    );
};

export default Navigation;
