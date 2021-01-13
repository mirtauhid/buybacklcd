import emailjs from 'emailjs-com';
import React from 'react';
import './Contact.css';

const Contact = () => {
    
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_w9aqhxm', 'template_m9gex68', e.target, 'user_J3Eo9lyqa5OVUGYdoUzHY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <main id="contact">
            <div className="contact-wrapper row">
                <div className="header-banner">
                    <h1>CONTACT US</h1>
                </div>
                <>
                    <section id="contact" className="add-padding">
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-sm-6 col-md-5 text-right scrollimation fade-up d1">
                                    <h1 className="big-text">Need Custom Offer?
</h1>
                                    <p className="lead">If you have any question about our service then feel free to contact us. We appreciate your feedback.

                                    You can also send us a meet request if you have minimum of 500 cell phone LCDs and you agree with our terms and conditions.
                                    We will contact you within 24 hour (Working Day)

                                    Please note: we do not offer you cash for your LCDs, we will only pay you by bank transfer after receipt of your invoice.</p>
                                </div>
                                {/*=== Contact Form ===*/}
                                <form id="contact-form" className="col-sm-6 offset-md-1 scrollimation fade-left d3" onSubmit={sendEmail}>
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="contact-name">Name</label>
                                        <div className="controls">
                                            <input id="contact-name" name="contactName" placeholder="Your name" className="form-control requiredField" data-new-placeholder="Your name" type="text" data-error-empty="Please enter your name" />
                                            <i className="fa fa-user" />
                                        </div>
                                    </div>{/* End name input */}
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="contact-mail">Email</label>
                                        <div className=" controls">
                                            <input id="contact-mail" name="email" placeholder="Your email" className="form-control requiredField" data-new-placeholder="Your email" type="email" data-error-empty="Please enter your email" data-error-invalid="Invalid email address" />
                                            <i className="fa fa-envelope" />
                                        </div>
                                    </div>{/* End email input */}
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="contact-message">Message</label>
                                        <div className="controls">
                                            <textarea id="contact-message" name="comments" placeholder="Your message" className="form-control requiredField" data-new-placeholder="Your message" rows={6} data-error-empty="Please enter your message" defaultValue={""} />
                                            <i className="fa fa-comment" />
                                        </div>
                                    </div>{/* End textarea */}
                                    <p><button name="submit" type="submit" className="btn btn-color2 btn-block" data-error-message="Error!" data-sending-message="Sending..." data-ok-message="Message Sent"><i className="fa fa-paper-plane" />Send Message</button></p>
                                    <input type="hidden" name="submitted" id="submitted" defaultValue="true" />
                                </form>{/* End contact-form */}
                            </div>
                        </div>
                    </section>
                    {/* ==============================================
		FOOTER
		=============================================== */}
                    <footer id="main-footer" className="add-padding">
                        <div className="container">
                            <p>CONTACT DETAILS</p>
                        </div>
                    </footer>
                </>
            </div>
        </main>
    );
};

export default Contact;