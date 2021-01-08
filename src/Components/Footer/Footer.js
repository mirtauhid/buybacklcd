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
                                <p className="text-justify">iPhone is a trademarks of Apple inc. Samsung Galaxy S and Samsung Galaxy Note are trademarks of Samsung Group. All other trademarks are the property of their respective owners.Our services/products are not the slightest bit embraced, supported, or subsidiary with any of the previously mentioned elements or auxiliaries thereof.</p>
                            </div>
                            <div className="col-xs-8 col-md-4">

                            </div>
                            <div className="col-xs-4 col-md-2">
                                <h6>Quick Links</h6>
                                <ul className="footer-links">
                                    <li><a href="/requirements">Conditions</a></li>
                                    <li><a href="/policy">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <p className="copyright-text">Copyright © 2021 All Rights Reserved by
          <a href="#"> test.com</a>.
        </p>
                            </div>
                            <div style={{ textAlign: 'right' }} className="col-md-6 col-sm-6 col-xs-12">
                                <p className="copyright-text">test.com is a service of test limited


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