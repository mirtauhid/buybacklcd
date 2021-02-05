import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <section id="footer">
            <div className="row footer-wrapper">
                <footer className="site-footer">
                    <div className="container footer-container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <h6>HAFTUNGSAUSSCHLUSS</h6>
                                <p className="text-justify">
                                    iPhone ist ein Warenzeichen von Apple inc. Samsung Galaxy S
                                    und Samsung Galaxy Note sind Warenzeichen der Samsung Group.
                                    Unsere Dienstleistungen/Produkte sind nicht im Geringsten mit
                                    einem der zuvor genannten Elemente oder deren Hilfsmitteln
                                    verbunden, unterstützt oder verbunden.
                </p>
                            </div>
                            <div className="col-xs-8 col-md-4"></div>
                            <div className="col-xs-4 col-md-2">
                                <h6>SCHNELL-LINKS</h6>
                                <ul className="footer-links">
                                    <li>
                                        <a href="/policy">Geschäftsbedining</a>
                                    </li>
                                    <li>
                                        <a href="/requirements">Geschäftsbedingungen</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <p className="copyright-text">
                                    Copyright © 2021 Alle Rechte vorbehalten durch
                  <a href="/"> Displayankauf.ch</a>.
                </p>
                            </div>
                            <div
                                style={{ textAlign: "right" }}
                                className="col-md-6 col-sm-6 col-xs-12"
                            >
                                
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Footer;
