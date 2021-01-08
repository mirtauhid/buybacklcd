import React from 'react';
import heroImage from '../../../../../Images/unnamed.png';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" >
            <div className="row hero-container">
                <div className="col-md-6 for-large">
                    <div className="hero-text">
                        <h1 style={{ fontWeight: 'bold', fontSize: '4vw' }}>Get some cash by selling your broken cell phone LCDs</h1>
                        <p><strong>We are offering the best solution for your collection of broken cell phone LCDs at a very good price. Just sign up and send info and get profited from recycling assets.</strong></p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img id="heroImage" style={{ maxWidth: '100%' }} src={heroImage} alt="" />
                </div>
                <div className="col-md-6 for-mobile">
                    <div className="hero-text">
                        <h1 style={{ fontWeight: 'bold', fontSize: '4vw' }}>Sell ​​us your broken iPhone or Samsung LCDs!</h1>
                        <p><strong>Distriwise offers you a professional solution for the collection of broken iPhone and Samsung LCDs at very favorable fees. We also stand for transparent control and fast payment.</strong></p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;