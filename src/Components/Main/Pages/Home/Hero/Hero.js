import React from 'react';
import heroImage from '../../../../../Images/unnamed.png';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" >
            <div className="row hero-container">
                <div className="col-md-7 for-large">
                    <div className="hero-text">
                        <h1 style={{ fontWeight: 'bold', fontSize: '4vw', color: '#222326' }}>Transparenz, und das seit 12 Jahren</h1>
                        <p><strong>Wir legen besonders viel Wert auf eine transparentes Bewertungsystem, dass sich seit Jahren bewährt hat. Es ist eigenes auf unseren Markt konzipiert und gewährt absolute Transparenz, Fairness und langfristige Geschäftsbeziehungen.</strong></p>
                    </div>
                </div>
                <div className="col-md-5">
                    <img id="heroImage" style={{ maxWidth: '100%' }} src={heroImage} alt="" />
                </div>
                <div className="col-md-6 for-mobile">
                    <div className="hero-text">
                        <h1 style={{ fontWeight: 'bold', fontSize: '4vw' }}>Transparenz, und das seit 12 Jahren</h1>
                        <p><strong>Wir legen besonders viel Wert auf eine transparentes Bewertungsystem, dass sich seit Jahren bewährt hat. Es ist eigenes auf unseren Markt konzipiert und gewährt absolute Transparenz, Fairness und langfristige Geschäftsbeziehungen.</strong></p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;