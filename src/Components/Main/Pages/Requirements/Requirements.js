import React from 'react';
import './Requirements.css';

const Requirements = () => {
    return (
        <main id="requirements">
            <div className="req-container">
                <div className="req-wrapper">
                    <h1>REQUIREMENTS</h1>
                    <br />
                    <br />
                    <h3>Conditions for our services</h3>
                    <br />
                    <p>
                        With BuybackLCD.com, Distriwise BV offers you a professional solution for the collection of broken iPhone and Samsung LCDs at very favorable fees. We also stand for transparent control and fast payment.
                                <br />
                                We use the following conditions for this service:
                            </p>
                    <br />
                    <br />
                    <h3>Quality</h3>
                    <br />
                    <ul>
                        <li>
                            <p>For broken iPhone & SAMSUNG displays it can be OEM (A / B or C quality) or non-OEM (only refurbishment), we will assess this during the check.</p>
                        </li>
                        <li>
                            <p>
                                Display (and touch) works completely as 'original', only the glass is broken or damaged. Quality A / B should not include: bad back-light, dead pixels, gray surface, white lines and discoloration, screen burn-in, water damage or edge printing damage.
                                    </p>
                        </li>
                        <li>
                            We assume that you wish to sell us all qualities, and that you do not wish to exclude a particular quality.
                                </li>
                    </ul>


                    <br />
                    <br />
                    <h3>Packing up:
</h3>
                    <br />
                    <ul>
                        <li>
                            <p>If our recommended packing method is not followed, we reserve the right to calculate unpacking costs *.</p>
                        </li>
                        <li>
                            <p>
                                After registering your LCDs you will receive a reference number from us. Please state this number at the top and on the side of the box.
                                    </p>
                        </li>
                    </ul>


                    <br />
                    <br />
                    <h3>Report:</h3>
                    <br />
                    <ul>
                        <li>
                            <p>If you agree to the report, you agree to all qualities stated in the report. If you want to see one specific quality return, everything will be returned and we charge a research fee *. These will be billed to you.</p>
                        </li>
                        <li>
                            <p>
                                Not satisfied with the report? You can always request a return. We do charge research costs *. (except for the first shipment, we do not charge any costs here)
                                    </p>
                        </li>
                        <li>
                            <p>
                                If you have not given us a response to the report after 14 days of receipt of our report, you hereby automatically agree to the content of our report and can no longer request a return.
                                    </p>
                        </li>
                    </ul>


                    <br />
                    <br />
                    <h3>Payment:</h3>
                    <br />
                    <ul>
                        <li>
                            <p>We only pay you by bank transfer after receipt of your invoice incl. VAT, unfortunately we do not pay in cash.</p>
                        </li>
                        <li>
                            <p>
                                Send us an invoice after 60 days (from the date of sending the report); then we pay out the current value and not the value stated on our report. You will receive a new report from us stating the value.
                                    </p>
                        </li>
                    </ul>
                    <br />
                    <br />
                    <strong>Our costs excl. VAT</strong>
                </div>
                <div className="table-wrapper">
                    <table className="fl-table">
                        <thead>
                            <tr>
                                <th>Number of LCDs</th>
                                <th>Research costs
                                in case of disagreement
                                (After 1st shipment)</th>
                                <th>Unpacking costs
if packaged difficult	</th>
                                <th>Shipping costs</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Up to 30 LCD</td>
                                <td>€ 15.00	</td>
                                <td>€ 10.00	</td>
                                <td>Own cost</td>
                            </tr>
                            <tr>
                                <td>Up to 50 LCD</td>
                                <td>€ 25.00	</td>
                                <td>-</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td>Up to 100 LCD</td>
                                <td>€ 50.00</td>
                                <td>-</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td>Up to 250 LCD</td>
                                <td>€ 100.00</td>
                                <td>-</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td>From 250 LCD</td>
                                <td>€ 150.00</td>
                                <td>-</td>
                                <td>Free</td>
                            </tr>
                        </tbody><tbody>
                        </tbody></table>
                </div>
            </div>
        </main>
    );
};

export default Requirements;