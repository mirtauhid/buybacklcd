import React from 'react';
import heroImage from '../../../../../Images/unnamed.png';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" >
            <div className="row hero-container">
                <div className="col-md-7 for-large">
                    <div className="hero-text">
                        <h1 style={{ fontWeight: 'bold', fontSize: '4vw', color: '#222326' }}>Verkaufen Sie uns Ihr kaputtes iPhone oder Samsung LCDs!</h1>
                        <p><strong>Distriwise bietet Ihnen eine professionelle Lösung für die Abholung von kaputten iPhone und Samsung LCDs zu sehr günstigen Gebühren. Wir stehen auch für transparente Kontrolle und schnelle Bezahlung</strong></p>
                    </div>
                </div>
                <div className="col-md-5">
                    <img id="heroImage" style={{ maxWidth: '100%' }} src={heroImage} alt="" />
                </div>
                <div className="col-md-6 for-mobile">
                    <div className="hero-text">
                        <h1 style={{ fontWeight: 'bold', fontSize: '4vw' }}>Verkaufen Sie uns Ihr kaputtes iPhone oder Samsung LCDs!</h1>
                        <p><strong>Distriwise bietet Ihnen eine professionelle Lösung für die Abholung von kaputten iPhone und Samsung LCDs zu sehr günstigen Gebühren. Wir stehen auch für transparente Kontrolle und schnelle Bezahlung</strong></p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;