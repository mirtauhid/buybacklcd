import React from 'react';
import './FAQ.css';

const FAQ = () => {
    return (
        <section id="faq-section">
            <div className="faq-wrapper">
                <h1 className="text-center side-border">Frequently Asked Questions</h1>
                <br/>
                <br/>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                I am a private person. Can I send my screen?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                No, only companies can send us broken LCDs.
                        </div>
                        </div>
                    </div>
                    <br />
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Can I send the screens for free?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                For the Netherlands:
                                You can ship for free from 15 LCD screens.
                                <br />
                                Abroad:
                                You can ship for free from 50 LCD screens.
                        </div>
                        </div>
                    </div>
                    <br />
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How long does it take to be paid out?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                We aim to pay out within three working days. This can sometimes take longer during public holidays or unforeseen circumstances.
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                How can I best package the broken LCDs?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                To properly package the broken LCDs, you can follow our packing instructions.

                                <a href="/packaging-tips">Packing Instruction</a>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Can I have a screen repaired by you?
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Not at Buybacklcd.com.
                                A broken LCD screen can be repaired at a repair shop. Buyback.com only purchases broken LCD screens.
                        </div>
                        </div>
                    </div>
                    <br />
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Do you buy other screens or other brands?
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div className="accordion-body">

                                Only the brands and models listed on the website are purchased. New models will be added and older models will expire.
                        </div>
                        </div>
                    </div>
                    <br />
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSeven">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                What does a control report look like?
                            </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                You can find an example check report <a href="/example-report">here</a> .
                        </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </section>
    );
};

export default FAQ;