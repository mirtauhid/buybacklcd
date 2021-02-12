import React from 'react';
import Logo from '../../../Images/logo.png';
import './NavBar.css';

const NavBar = () => {
    return (
        <section id="navigation">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid nav-body">
                    <a className="navbar-brand " href="/"><img style={{ width: "100px" }} src={Logo} alt="" /></a>
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

                                    Wie Funktioniert Es?



  </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/packaging-tips">Verpackungstipps</a></li>
                                    <hr className="dropdown-divider" />

                                    <li><a className="dropdown-item" href="/requirements">Geschäftsbedingungen</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/prices">Preise</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/sell-lcd">Screens registieren</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/contact">Kontakt</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/faq">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </section>
    );
};

export default NavBar;