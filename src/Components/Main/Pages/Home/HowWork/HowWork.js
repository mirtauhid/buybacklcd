import React from 'react';
import cross from '../../../../../Images/agreement.png';
import signUp from '../../../../../Images/browser.png';
import shipping from '../../../../../Images/delivery-truck.png';
import pay from '../../../../../Images/receipt.png';
import report from '../../../../../Images/report.png';
import email from '../../../../../Images/send-mail.png';
import './HowWork.css';

const HowWork = () => {
    return (
        <section id="How-Work">
            <div className="wrapper">
                <h1>5 Steps to get paid</h1>
                <div className="work">
                    <div className="work_process">
                        <div className="work_img">
                            <img src={signUp} alt="" />
                        </div>
                        <p>Enter how many LCDs you want to sell in the sign up form. When you are signing up you automatically agree with our given prices and conditions.</p>
                    </div>
                    <div className="work_process">
                        <div className="work_img">
                            <img src={email} alt="" />
                        </div>
                        <p>After signing up we will provide you a token as reference number through email</p></div>
                    <div className="work_process">
                        <div className="work_img">
                            <img src={shipping} alt="" />
                        </div>
                        <p>You send minimum 15 LCDs and at least 50 LCDs will be considered for free shipping. Take a look <a href="/packaging-tips">here</a> for packing the broken displays properly.</p>
                    </div>
                    <div className="work_process">
                        <div className="work_img">
                            <img src={report} alt="" />
                        </div>
                        <p>Within five working days of receipt, we will check the LCDs (test on original phones) and then send you a test report. Click <a href="/example-reports">here</a>  to see how the report will be look like</p></div>
                    <div className="work_process">
                        <div className="work_img">
                            <img src={pay} alt="" />
                        </div>
                        <p>After you accept the report and send the invoice to us we will quickly process the payment within five working days.
                        Do you disagree?
                        Then we will return all broken displays free of charge (only 1st shipment, after that we ask for a compensation. See our conditions.)</p></div>
                    <div className="work_process">
                        <div className="work_img">
                            <img src={cross} alt="" />
                        </div>
                        <p>Do you disagree?
                        We have a solution for that also.
                        We will return all broken displays free of charge (only 1st shipment, after that we ask for a compensation. See our terms conditions.)</p></div>
                </div>
            </div>
        </section>
    );
};

export default HowWork;