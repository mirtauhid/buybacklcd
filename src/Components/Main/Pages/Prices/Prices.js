import React from 'react';
import './Prices.css';

const Prices = () => {
    return (
        <main id="prices">
            <div className="price-wrapper">
                <div className="price-heading">
                    <h1>Preise</h1>
                </div>
                <div className="row justify-center">
                    <div className="col-md-12 text-center">
                        <br/>
                        <br/>
                        <h2>Gerne können wir Ihnen unsere Preisliste zukommen lassen. Senden Sie uns hierfür eine <span style={{fontWeight: "500"}} >E-Mail an preise@displayankauf.ch</span>

</h2>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default Prices;