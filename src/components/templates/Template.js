import React from 'react';
import Nav from '../organism/Nav'


const Template = ({ children }) => {

    return <>
        <Nav />
        {children}
    </>
}

export default Template