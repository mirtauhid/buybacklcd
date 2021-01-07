import React from 'react';
import All from '../../../../../Images/allQ.png';
import Display from '../../../../../Images/displaypng.png';
import Pay from '../../../../../Images/pay.png';
import QC from '../../../../../Images/qc.png';
import './Methods.css';

const Methods = () => {
    return (
        <section id="methods-section">
            <div id="methods">
                <h1><span>Our</span> Working Method</h1>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <div className="method">
                            <img style={{ width: '80PX' }} src={QC} alt="" />
                            <br /> <strong>Quality Control</strong> <br />
                            <small className="texts">Broken iPhone & Samsung displays can be OEM A / B or C quality, we will assess this during the check.</small>
                        </div>
                        <div className="method">
                            <img style={{ width: '80PX' }} src={Display} alt="" />
                            <br /> <strong>Display</strong> <br />
                            <small className="texts">Display (and touch) works completely as 'original', only the glass is broken or damaged. Quality A should not include: bad back-light, dead pixels, gray surface, white lines and discoloration, screen burns, water damage or edge printing damage.</small>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="method">
                            <img style={{ width: '80PX' }} src={All} alt="" />
                            <br /> <strong>All Qualities</strong> <br />
                            <small className="texts">We assume that you wish to sell us all qualities, and that you do not wish to exclude a particular quality.</small>
                        </div>
                        <div className="method">
                            <img style={{ width: '80PX' }} src={Pay} alt="" />
                            <br /> <strong>Payment</strong> <br />
                            <small className="texts">We only pay you by bank transfer after receipt of your invoice including VAT, unfortunately we do not pay in cash.</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methods;