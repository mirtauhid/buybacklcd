import React from 'react';
import './Meet.css';

const Meet = () => {
    return (
        <section id="meet">
            <div className="row meet-wrapper">
                <div className="col-md-6 info">
                    <h3>MEET</h3>
                    <br />
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
                    <small>and have minimum of 500 LCDs</small>
                    <br />
                    <br />
                    <form>
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