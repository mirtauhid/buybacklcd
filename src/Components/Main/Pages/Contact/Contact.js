import emailjs from 'emailjs-com';
import React from 'react';
import './Contact.css';

const Contact = () => {
    
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_w9aqhxm', 'template_m9gex68', e.target, 'user_J3Eo9lyqa5OVUGYdoUzHY')
            .then((result) => {
                console.log(result.text);
                if (result.text === 'OK') {
                    alert('Sent');
                }
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <main id="contact">
            <div className="contact-wrapper row">
                <div className="header-banner">
                    <h1>KONTAKT</h1>
                </div>
                <>
                    <section id="contact" className="add-padding">
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-sm-6 col-md-5 text-right scrollimation fade-up d1">
                                    <h1 className="big-text">SIE BENÖTIGEN EIN INDIVIDUELLES ANGEBOT?


</h1>
                                    <p className="lead">Wenn Sie eine Frage zu unserem Service haben, können Sie uns gerne kontaktieren. Wir schätzen Ihr Feedback. Sie können uns auch eine Anfrage für ein Treffen schicken, wenn Sie mindestens 500 Handy-LCDs haben und Sie mit unseren Bedingungen einverstanden sind. Wir werden uns innerhalb von 24 Stunden (Werktag) mit Ihnen in Verbindung setzen. Bitte beachten Sie: wir bieten Ihnen kein Bargeld für Ihre LCDs an, wir werden Sie nur per Banküberweisung nach Erhalt Ihrer Rechnung bezahlen.</p>
                                </div>
                                {/*=== Contact Form ===*/}
                                <form id="contact-form" className="col-sm-6 offset-md-1 scrollimation fade-left d3" onSubmit={sendEmail}>
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="contact-name">Ihr Name

</label>
                                        <div className="controls">
                                            <input id="contact-name" name="contactName" placeholder="Ihr Name" className="form-control requiredField" data-new-placeholder="Ihr Name" type="text" data-error-empty="Please enter your name" />
                                            <i className="fa fa-user" />
                                        </div>
                                    </div>{/* End name input */}
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="contact-mail">Ihre E-Mail

</label>
                                        <div className=" controls">
                                            <input id="contact-mail" name="email" placeholder="Ihre E-Mail" className="form-control requiredField" data-new-placeholder="Ihre E-Mail" type="email" data-error-empty="Please enter your email" data-error-invalid="Invalid email address" />
                                            <i className="fa fa-envelope" />
                                        </div>
                                    </div>{/* End email input */}
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="contact-message">Ihre Nachricht

</label>
                                        <div className="controls">
                                            <textarea id="contact-message" name="comments" placeholder="Ihre Nachricht" className="form-control requiredField" data-new-placeholder="Your message" rows={6} data-error-empty="Please enter your message" defaultValue={""} />
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
                            <p>KONTAKTINFORMATIONEN</p>
                        </div>
                    </footer>
                </>
            </div>
        </main>
    );
};

export default Contact;


// import React from 'react';
// import { useForm } from "react-hook-form";
// import './Contact.css';

// const Contact = () => {

//     const { register, handleSubmit, errors } = useForm();
//     const onSubmit = (data, r) => {
//         alert(`Thank you for your message from ${data.email}`);
//         const templateId = 'template_m9gex68';
//         const serviceID = 'service_w9aqhxm';
//         sendFeedback(serviceID, templateId, { from_name: data.name, message_html: data.comment, reply_to: data.email })
//         r.target.reset();
//     }

//     const sendFeedback = (serviceID, templateId, templateParams ) => {
//         window.emailjs.send(
//             serviceID, templateId,
//             templateParams 
//         ).then(res => {
//             console.log('Email successfully sent!')
//         })
//             .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
//     }

//     return (
//         <main id="contact">
//             <div className="contact-wrapper row">
//                 <div className="header-banner">
//                     <h1>KONTAKT</h1>
//                 </div>
//                 <>
//                     <section id="contact" className="add-padding">
//                         <div className="container text-center">
//                             <div className="row">
//                                 <div className="col-sm-6 col-md-5 text-right scrollimation fade-up d1">
//                                     <h1 className="big-text">SIE BENÖTIGEN EIN INDIVIDUELLES ANGEBOT?


// </h1>
//                                     <p className="lead">Wenn Sie eine Frage zu unserem Service haben, können Sie uns gerne kontaktieren. Wir schätzen Ihr Feedback. Sie können uns auch eine Anfrage für ein Treffen schicken, wenn Sie mindestens 500 Handy-LCDs haben und Sie mit unseren Bedingungen einverstanden sind. Wir werden uns innerhalb von 24 Stunden (Werktag) mit Ihnen in Verbindung setzen. Bitte beachten Sie: wir bieten Ihnen kein Bargeld für Ihre LCDs an, wir werden Sie nur per Banküberweisung nach Erhalt Ihrer Rechnung bezahlen.</p>
//                                 </div>
//                                 {/*=== Contact Form ===*/}
//                                 <div className="ContactForm">
//                                     <form onSubmit={handleSubmit(onSubmit)}>
//                                         <input
//                                             placeholder="name"
//                                             name="name"
//                                             ref={
//                                                 register({
//                                                     required: "Please enter your name",
//                                                     maxLength: {
//                                                         value: 20,
//                                                         message: "Please enter a name with fewer than 20 characters"
//                                                     }
//                                                 })
//                                             }
//                                         /><br />
//                                         {errors.name && errors.name.message}<br />

//                                         <input
//                                             placeholder="email"
//                                             name="email"
//                                             ref={
//                                                 register({
//                                                     required: "Please enter an email",
//                                                     pattern: {
//                                                         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                                                         message: "invalid email address"
//                                                     }
//                                                 })
//                                             }
//                                         /><br />
//                                         {errors.email && errors.email.message}<br />

//                                         <textarea
//                                             placeholder="comment"
//                                             name="comment"
//                                             ref={
//                                                 register({
//                                                     required: true
//                                                 })
//                                             }
//                                         /><br />
//                                         {errors.comment && "oops, you forgot your message!"}<br />

//                                         <input type="submit" />
//                                     </form>
//                                 </div>
//                                 {/* End contact-form */}
//                             </div>
//                         </div>
//                     </section>
//                     {/* ==============================================
// 		FOOTER
// 		=============================================== */}
//                     <footer id="main-footer" className="add-padding">
//                         <div className="container">
//                             <p>KONTAKTINFORMATIONEN</p>
//                         </div>
//                     </footer>
//                 </>
//             </div>
//         </main>
//     );
// };

// export default Contact;