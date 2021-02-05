import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import './SignUpLCD.css';

const SignUpLCD = () => {
    const [data, setData] = useState({})

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_w9aqhxm', 'template_m9gex68', e.target, 'user_J3Eo9lyqa5OVUGYdoUzHY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }



    return (
        <main id="sign-up">
            <div className="sign-up-wrapper">
                <div className="sign-up-banner">
                    <h1 style={{ textAlign: "center" }}>LCD REGISTRIEREN</h1>
                </div>
                <div className="form-wrapper">
                    <form id="submit-form" action="">
                        <div className="form-segment">
                            <div className="labels">Customer*<label htmlFor=""></label></div>
                            <div className="inputs">
                                <div className="radio-section">
                                    <input type="radio" name="New_User" id="" className="radio-input" />
                                    <label htmlFor="">New customer</label>
                                </div>
                                <div className="radio-section">
                                    <input type="radio" name="Existing_User" id="" className="radio-input" />
                                    <label htmlFor="">Existing customer</label>
                                </div>
                                <br />

                            </div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">VAT number<label htmlFor=""></label></div>
                            <div className="inputs"><input type="text" name="VAT_Number" id="" /></div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">Company Name<label htmlFor=""></label></div>
                            <div className="inputs"><input type="text" name="Company_Name" id="" /></div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">First and Last Name*<label htmlFor=""></label></div>
                            <div className="inputs"><input type="text" name="Name" id="" /></div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">Adress (Street and number)<label htmlFor=""></label></div>
                            <div className="inputs"><input type="text" name="Adress" id="" /></div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">ZIP Code<label htmlFor=""></label></div>
                            <div className="inputs"><input type="text" name="ZIP_Code" id="" /></div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">City<label htmlFor=""></label></div>
                            <div className="inputs"><input type="text" name="City" id="" /></div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">Country<label htmlFor=""></label></div>
                            <div className="inputs"><input type="text" name="Country" id="" /></div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">Email<label htmlFor=""></label></div>
                            <div className="inputs"><input type="text" name="Email" id="" /></div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">Phone Number<label htmlFor=""></label></div>
                            <div className="inputs"><input type="text" name="Phone_Number" id="" /></div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">Bank Account Number<label htmlFor=""></label></div>
                            <div className="inputs"><input type="text" name="Bank_Acc_Number" id="" /></div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">Brands and qualities<label htmlFor=""></label></div>
                            <div className="inputs-group">
                                <div className="single-group">
                                    <label htmlFor="">Samsung </label><br /><input type="text" name="Samsung" id="" />
                                </div>
                                <div className="single-group">
                                    <label htmlFor="">Apple iPhone	</label><br /><input type="text" name="Apple" id="" />
                                </div>
                                <div className="single-group">
                                    <label htmlFor="">Apple iPad	</label><br /><input type="text" name="Ipad" id="" />
                                </div>
                                <div className="single-group">
                                    <label htmlFor="">Other brands	</label><br /><input type="text" name="Others" id="" />
                                </div>
                            </div>
                        </div>
                        <br />
                        <small style={{ float: "right", marginRight: "5.2vw" }}>Enter the number of screens that you send to us per brand
</small>
                        <br />
                        <div className="form-segment">
                            <div className="labels">Total (minimum of 25)<label htmlFor=""></label></div>
                            <div className="inputs"><input type="text" name="Total" id="" /></div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">*<label htmlFor=""></label></div>
                            <small style={{ float: "right", marginRight: "6vw" }}><span><input type="checkbox" name="Terms" id="" />  </span>  I agree with the terms and conditions and our Privacy policy.
</small>
                        </div>
                        

                        <br />
                        <br />
<input className="submit-btn" style={{marginLeft: "50%"}} type="submit" value="Send"/>
                    </form>
                </div>
            </div>
        </main >
    );
};

export default SignUpLCD;