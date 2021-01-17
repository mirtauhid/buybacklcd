import emailjs from 'emailjs-com';
import React from 'react';
import './Meet.css';

const Meet = () => {

    function sendEmail(e) {
        e.preventDefault();
        console.log(e);
        emailjs.sendForm('service_w9aqhxm', 'template_m9gex68', e.target, 'user_J3Eo9lyqa5OVUGYdoUzHY')
            .then((result) => {
                console.log(result.text);
                if(result.text === 'OK') {
                    alert('Sent');
                }
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section id="meet">
            <div className="row meet-wrapper">
                <div className="meet-heading">
                    <h1>MEET</h1>
                </div>
                <br />
                <div className="col-md-6 info">
                    <p>Are you interested in our service? Then we would be happy to visit you to meet if you have at least 500 LCDs to check.
                    This service applies only to your first registration. After you have been able to see how we check the broken LCDs, you can send us the screens in the future.</p>
                    <br />
                    <br />
                    <h3>Requirements</h3>
                    <br />
                    <p>We have some rules and regulations
                    You can read the conditions here .To come by, there must be at least 500 LCDs to check (only for abroad).</p>
                    <br />
                    <br />
                </div>

                <div className="col-md-6 form">
                    <h3>If you want to meet</h3>
                    <p>and have minimum of 500 LCDs</p>
                    <form onSubmit={sendEmail}>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                placeholder='Company Name'
                                aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                placeholder='Name'
                                aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                placeholder='Address'
                                aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                placeholder='Phone Number'
                                aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                placeholder='Email'
                                aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" placeholder="Message" id="floatingTextarea">
                            </textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Meet;