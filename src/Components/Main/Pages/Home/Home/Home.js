import React from 'react';
import FAQ from '../FAQ/FAQ';
import Hero from '../Hero/Hero';
import HowWork from '../HowWork/HowWork';
import Meet from '../Meet/Meet';
import Methods from '../Methods/Methods';
import QAndD from '../QAndD/QAndD';
import './Home.css';

const Home = () => {
    return (
        <main>
            <Hero></Hero>
            <Methods></Methods>
            <HowWork></HowWork>
            <QAndD></QAndD>
            <Meet></Meet>
            <FAQ></FAQ>
        </main>
    );
};

export default Home;