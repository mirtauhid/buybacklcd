import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <main id="contact">
            <div className="contact-wrapper row">
                <h1>CONTACT US</h1>
                <div style={{ padding: '2.5vw', marginBottom: '100px', textAlign: 'left'}} className="col-md-6">
                    <div style={{ background: '#75B2AD',padding: '1vw 2vw',borderRadius: '10px', fontWeight: 'bold'}}>
                        <h3>Need Custom Offer?</h3>
                        <br />
                        <p>If you have any question about our service then feel free to contact us. We appreciate your feedback.
                            <br /><br />

                    You can also send us a meet request if you have minimum of 500 cell phone LCDs and you agree with our terms and conditions.
                    <br/>
                    We will contact you within 24 hour (Working Day) <br /><br />

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
                            <textarea style={{ minHeight: '150px' }} class="form-control" placeholder="Message" id="floatingTextarea">
                            </textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="address-box">
                    <p>
                        <strong>
                            Contact Details:
                        </strong>
                        <br />
                        <small>
                            Address
                        </small>
                        <br />
                        <small>
                            Address
                        </small>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Contact;