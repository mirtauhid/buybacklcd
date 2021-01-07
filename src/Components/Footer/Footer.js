import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section id="footer">
            <div className="row footer-wrapper">
                <footer className="site-footer">
                    <div className="container footer-container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <h6>Disclaimer</h6>
                                <p className="text-justify">iPhone is a trademarks of Apple inc. Samsung Galaxy S and Samsung Galaxy Note are trademarks of Samsung Group. All other trademarks are the property of their respective owners. Distriwise BV and its services / products are no way endorsed, sponsored or affiliated with any of the above mentioned entities or subsidiaries thereof.</p>
                            </div>
                            <div className="col-xs-8 col-md-4">

                            </div>
                            <div className="col-xs-4 col-md-2">
                                <h6>Quick Links</h6>
                                <ul className="footer-links">
                                    <li><a href="http://scanfcode.com/about/">Conditions</a></li>
                                    <li><a href="http://scanfcode.com/contact/">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <p className="copyright-text">Copyright © 2021 All Rights Reserved by
          <a href="#"> Buybacklcd.com</a>.
        </p>
                            </div>
                            <div style={{ textAlign: 'right' }} className="col-md-6 col-sm-6 col-xs-12">
                                <p className="copyright-text">BuybackLCD.com is a service of Distriwise BV


        </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </section >
    );
};

export default Footer;