import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <section>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div id="nav-body" className="container-fluid">
                    <a className="navbar-brand" href="/">NAVBAR LOGO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul  style={{marginLeft: 'auto'}}  className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/example-reports">Sample Report</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/packaging-tips">Packaging</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/requirements">Requirements</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/prices">Prices</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/sell-lcd">Sell Now</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </section>
    );
};

export default NavBar;