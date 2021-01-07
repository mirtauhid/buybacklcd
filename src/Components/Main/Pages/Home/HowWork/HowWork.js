import React from 'react';
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
                <h1>How does it work?</h1>
                <div className="work">
                    <div className="work_process">
                        <div className="work_img">
                            <img src={signUp} alt="" />
                        </div>
                        <p>Enter the number of LCDs to be sold in the registration form . When you fill in the form you automatically agree with the stated  prices and  conditions .</p>
                    </div>
                    <div className="work_process">
                        <div className="work_img">
                            <img src={email} alt="" />
                        </div>
                        <p>Within one working day we will send a shipping label by email quoting the reference number.</p></div>
                    <div className="work_process">
                        <div className="work_img">
                            <img src={shipping} alt="" />
                        </div>
                        <p>You send the broken LCDs to us free of charge with a minimum of 15 LCDs. Outside the Netherlands, a minimum of 50 LCDs applies for free shipping. See  here  the tips for packing the broken displays.</p>
                    </div>
                    <div className="work_process">
                        <div className="work_img">
                            <img src={report} alt="" />
                        </div>
                        <p>Within five working days of receipt, we will check the LCDs (test on original phones) and send you a comprehensive report by email. Check  here  looks like an example of how a check report.</p></div>
                    <div className="work_process">
                        <div className="work_img">
                            <img src={pay} alt="" />
                        </div>
                        <p>After approval of the report you will receive a request for invoicing. After receiving the invoice, we will pay it within 5 working days.
                        Do you disagree?
                        Then we will return all broken displays free of charge (only 1st shipment, after that we ask for a compensation. See our conditions.)F</p></div>
                </div>
            </div>
        </section>
    );
};

export default HowWork;