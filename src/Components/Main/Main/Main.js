import React from 'react';
import {
    BrowserRouter as Router,

    Route, Switch
} from "react-router-dom";
import Contact from '../Pages/Contact/Contact';
import ExampleReports from '../Pages/ExampleReports/ExampleReports';
import FAQ from '../Pages/Home/FAQ/FAQ';
import Home from '../Pages/Home/Home/Home';
import Meet from '../Pages/Home/Meet/Meet';
import LCDRegister from '../Pages/LCDRegister/LCDRegister';
import PackagingTips from '../Pages/PackagingTips/PackagingTips';
import Prices from '../Pages/Prices/Prices';
import Requirements from '../Pages/Prices/Requirements/Requirements';
import SignUpLCD from '../Pages/SignUpLCD/SignUpLCD';
import Policy from '../Policy/Policy';
import './Main.css';

const Main = () => {
    return (
        <section>
            <Router>
                <Switch>
                    <Route exact path="/" >
                        <Home></Home>
                    </Route>
                    <Route path="/packaging-tips" >
                        <PackagingTips></PackagingTips>
                    </Route>
                    <Route path="/example-reports" >
                        <ExampleReports></ExampleReports>
                    </Route>
                    <Route path="/prices" >
                        <Prices></Prices>
                    </Route>
                    <Route path="/meet" >
                        <Meet></Meet>
                    </Route>
                    <Route path="/requirements" >
                        <Requirements></Requirements>
                    </Route>
                    <Route path="/sell-lcd" >
                        <SignUpLCD></SignUpLCD>
                    </Route>
                    <Route path="/lcd-reg">
                        <LCDRegister></LCDRegister>
                    </Route>
                    <Route path="/contact" >
                        <Contact></Contact>
                    </Route>
                    <Route path="/faq" >
                        <FAQ></FAQ>
                    </Route>
                    <Route path="/policy">
                        <Policy></Policy>
                    </Route>
                </Switch>
            </Router>
        </section>
    );
};

export default Main;