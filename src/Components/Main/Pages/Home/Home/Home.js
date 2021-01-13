import React from 'react';
import Acquainted from '../Acquainted/Acquainted';
import Hero from '../Hero/Hero';
import Methods from '../Methods/Methods';
import './Home.css';

const Home = () => {
    return (
        <main id="home-wrapper">
            <Hero></Hero>
            <Methods></Methods>
            <Acquainted></Acquainted>
        </main>
    );
};

export default Home;