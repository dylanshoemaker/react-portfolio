import React from 'react';
import About from '../About';
import Hero from '../Hero';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

const SinglePage = () => {
    document.title = "Dylan's Portfolio";
    return (
        <>
        <Hero />
        <About />
        <Portfolio />
        <Resume />
        </>
    );
};

export default SinglePage;