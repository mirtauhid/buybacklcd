import React from 'react';
import Pay from '../../../../../Images/invoice.png';
import All from '../../../../../Images/like.png';
import Display from '../../../../../Images/phone (2).png';
import QC from '../../../../../Images/qc.png';
import './Methods.css';

const Methods = () => {
    return (
        <section id="methods-section">
            <div id="methods">
                <h1><span>How</span> We Work</h1>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <div className="method">
                            <img style={{ width: '80PX' }} src={QC} alt="" />
                            <br /> <strong>Quality Control</strong> <br />
                            <small className="texts">Broken cell phone displays can be classified to A and B category by considering their quality</small>
                        </div>
                        <div className="method">
                            <img style={{ width: '80PX' }} src={Display} alt="" />
                            <br /> <strong>Cell Phone LCDs</strong> <br />
                            <small className="texts">Cell phone display's works as 'original', only the glass layer is broken or damaged. Quality A should not include: bad back-light, dead pixels, gray surface, #F5F5F5 lines and discoloration, screen burns, water damage or edge printing damage.</small>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="method">
                            <img style={{ width: '80PX' }} src={All} alt="" />
                            <br /> <strong>Qualities We Accept</strong> <br />
                            <small className="texts">We accept all qualities you wish to sell. We just put them into categories according to their condition</small>
                        </div>
                        <div className="method">
                            <img style={{ width: '80PX' }} src={Pay} alt="" />
                            <br /> <strong>Our Payment Process</strong> <br />
                            <small className="texts">We only pay through bank transfer after receipt of your invoice including VAT, unfortunately we do not pay in cash.</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methods;