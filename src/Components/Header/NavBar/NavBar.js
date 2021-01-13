import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <section id="navigation">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid nav-body">
                    <a className="navbar-brand " href="/">Brand Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto mr-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                                Requirements

  </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/example-reports">Sample Report</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/packaging-tips">Packaging Tips</a></li>
                                    <hr className="dropdown-divider" />
                                    <li><a className="dropdown-item" href="/requirements">Requirements</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/meet">Meet</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/prices">Prices</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/sell-lcd">Sell Now</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/faq">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </section>
    );
};

export default NavBar;