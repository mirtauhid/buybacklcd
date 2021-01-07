import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <main id="contact">
            <div className="contact-wrapper row">
                <h1>Contact Us</h1>
                <div style={{ padding: '2.5vw', marginBottom: '100px', textAlign: 'left'}} className="col-md-6">
                    <div style={{ background: '#CBE8F4',padding: '1vw 1.5vw',borderRadius: '10px' }}>
                        <h3>Tailor-made offer?</h3>
                        <br /><br />
                        <p>
                            Do you have a question about our Buyback LCD Service?
                    Feel free to contact us and we will contact you today! <br /><br />

                    You can also request a quote using this form. We do apply a minimum number of 500 LCDs for this.
                    We will contact you without obligation within 24 hours to discuss your specific wishes. <br /><br />

                    Please note: we do not offer you   cash for your LCDs, we will only pay you by bank transfer after receipt of your invoice.
                </p>
                    </div>
                </div>

                <div style={{ padding: '2.5vw', marginBottom: '100px' }} className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                placeholder='Name'
                                aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                placeholder='Email'
                                aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                placeholder='Topic'
                                aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <textarea style={{ minHeight: '174px' }} class="form-control" placeholder="Message" id="floatingTextarea">
                            </textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="address-box">
                    <p>
                        <strong>
                            Contact details:
                        </strong>
                        <br />
                        <small>
                            BuybackLCD.com is a service of Distriwise BV, Arnhem, The Netherlands
                            E: info@buybackLCD.com
                            T: +31 (0) 88 - 2340 381
                        </small>
                        <br />
                        <small>
                            VAT (NL) 855675548 B01 Chamber of Commerce
                            / CoC: Arnhem 64459977
                        </small>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Contact;