import emailjs from 'emailjs-com';
import React from 'react';
import './SignUpLCD.css';

const SignUpLCD = () => {

    function sendEmail(e) {
        e.preventDefault();
        console.log(e.target);
        emailjs.sendForm('service_igrj1xe', 'template_egj4cao', e.target, "user_ge6H8ueGbAN5AhIkjedVC")
            .then((result) => {
                alert(result.text + ":" + " Erfolgreich gesendet");
            }, (error) => {
                alert(error.text + ":" + "Nicht erfolgreich. Versuch es noch einmal");
            });
    }



    return (
        <main id="sign-up">
            <div className="sign-up-wrapper">
                <div className="sign-up-banner">
                    <h1 style={{ textAlign: "center" }}>LCD REGISTRIEREN</h1>
                </div>
                <div className="form-wrapper">
                    <form id="submit-form" onSubmit={sendEmail} >
                        <div className="form-segment">
                            <div className="labels">Kunde*<label htmlFor=""></label></div>
                            <div className="inputs">
                                <div className="radio-section">
                                    <input type="radio" name="user" id="New_User" 
                                    value="New User"
                                    className="radio-input" />
                                    <label htmlFor="New_User">New customer</label>
                                </div>
                                <div className="radio-section">
                                    <input type="radio" name="user" 
                                    value="Existing User"
                                    id="Existing_User" className="radio-input" />
                                    <label htmlFor="Existing_User">Existing customer</label>
                                </div>
                                <br />

                            </div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">Steuernummer<label htmlFor=""></label></div>
                            <div className="inputs"><input type="text" name="VAT_Number" id="" /></div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">Firmenname<label htmlFor=""></label></div>
                            <div className="inputs"><input type="text" name="Company_Name" id="" /></div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">Vor und Nachname*<label htmlFor=""></label></div>
                            <div className="inputs"><input type="text" name="name" id="" /></div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">Adresse<label htmlFor=""></label></div>
                            <div className="inputs"><input type="text" name="Adress" id="" /></div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">Postleitzahl<label htmlFor=""></label></div>
                            <div className="inputs"><input type="text" name="ZIP_Code" id="" /></div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">Stadt<label htmlFor=""></label></div>
                            <div className="inputs"><input type="text" name="City" id="" /></div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">Land<label htmlFor=""></label></div>
                            <div className="inputs"><input type="text" name="Country" id="" /></div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">E-Mail<label htmlFor=""></label></div>
                            <div className="inputs"><input type="text" name="Email" id="" /></div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">Telefonnummer<label htmlFor=""></label></div>
                            <div className="inputs"><input type="text" name="Phone_Number" id="" /></div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">IBAN-Nummer<label htmlFor=""></label></div>
                            <div className="inputs"><input type="text" name="Bank_Acc_Number" id="" /></div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">Displaymarken und Anzahl<label htmlFor=""></label></div>
                            <div className="inputs-group">
                                <div className="single-group">
                                    <label htmlFor="">Samsung </label><br /><input type="text" name="Samsung" id="" />
                                </div>
                                <div className="single-group">
                                    <label htmlFor="">Apple iPhone	</label><br /><input type="text" name="iPhone" id="" />
                                </div>
                                <div className="single-group">
                                    <label htmlFor="">Apple iPad	</label><br /><input type="text" name="iPad" id="" />
                                </div>
                                <div className="single-group">
                                    <label htmlFor="">Other brands	</label><br /><input type="text" name="Others" id="" />
                                </div>
                            </div>
                        </div>
                        <br />
                        <small style={{ float: "right", marginRight: "5.2vw" }}>Geben Sie die Anzahl der Bildschirme ein, die Sie pro Marke an uns senden
</small>
                        <br />
                        <div className="form-segment">
                            <div className="labels">Anzahl der LCDS -TOTAL<label htmlFor=""></label></div>
                            <div className="inputs"><input type="text" name="Total" id="" /></div>
                        </div>
                        <div className="form-segment">
                            <div className="labels">*<label htmlFor=""></label></div>
                            <small style={{ float: "right", marginRight: "6vw" }}><span><input type="checkbox" name="Terms" value="Agree" id="" />  </span>Ich stimme den Allgemeinen Geschäftsbedingungen und unseren Datenschutzbestimmungen zu.
</small>
                        </div>


                        <br />
                        <br />
                        <input className="submit-btn" style={{ marginLeft: "50%" }} type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </main >
    );
};

export default SignUpLCD;