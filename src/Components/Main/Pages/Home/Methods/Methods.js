import React from 'react';
import img1 from './Assets/how1.png';
import img2 from './Assets/how2.png';
import img3 from './Assets/how3.png';
import img4 from './Assets/how4.png';
import './Methods.css';

const Methods = () => {
    return (
        <section id="methods-section">
            <br/>
            <br/>
            <h1 style={{textAlign: 'center', fontSize:"3vw"}}>
                <strong>In 4 einfachen Schritten bezahlt werden</strong></h1>
                <br/>
            <div id="methods">
                <div className="section mcb-section  no-margin-h no-margin-v  " style={{ paddingTop: 0, paddingBottom: 0, backgroundColor: '' }}>
                    <div id="section-wrap" className="section_wrapper mcb-section-inner">
                        <div className="icon_box icon_position_top no_border">
                            <div className="icon_wrapper">
                                <div className="icon icon-size"><img src={img1} alt="" /></div>
                            </div>
                            <div className="desc_wrapper">
                                <div className="desc">
                                    <span style={{ fontSize: 20 }}><b><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> Bieten Sie Ihre LCDs an</font></font></b></span><br /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                        Registrieren Sie Ihre LCDs <br /> online über unsere Website.
                                            </font>
                                    </font>
                                </div>
                            </div>
                        </div>
                        <div className="icon_box icon_position_top no_border">
                            <div className="icon_wrapper">
                                <div className="icon icon-size"><img src={img2} alt="" /></div>
                            </div>
                            <div className="desc_wrapper">
                                <div className="desc">
                                    <span style={{ fontSize: 20 }}><b><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>VERSENDEN SIE SIE</font></font></b></span><br /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                        Senden Sie Ihre LCDs kostenlos innerhalb <br /> der Niederlande.
                                        </font>
                                    </font>
                                </div>
                            </div>
                        </div>
                        <div className="icon_box icon_position_top no_border">
                            <div className="icon_wrapper">
                                <div className="icon icon-size"><img src={img3} alt="" /></div>
                            </div>
                            <div className="desc_wrapper">
                                <div className="desc">
                                    <span style={{ fontSize: 20 }}><b><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>WIR AKZEPTIEREN DIE LCDs Sie</font></font></b></span><br /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                        erhalten unseren Prüfbericht <br /> innerhalb von 5 Arbeitstagen.
                                                </font></font>
                                </div>
                            </div>
                        </div>
                        <div className="icon_box icon_position_top no_border">
                            <div className="icon_wrapper">
                                <div className="icon icon-size"><img src={img4} alt="" /></div>
                            </div>
                            <div className="desc_wrapper">
                                <div className="desc">
                                    <span style={{ fontSize: 20 }}><b><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> IHR GELD ERHALTEN</font></font></b></span><br /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                        Nach Erhalt Ihrer Rechnung erfolgt <br />
                                         eine sofortige Zahlung.</font></font>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Methods;