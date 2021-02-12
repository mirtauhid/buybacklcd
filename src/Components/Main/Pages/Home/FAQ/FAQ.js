import React from 'react';
import './FAQ.css';

const FAQ = () => {
    return (
        <section id="faq-section">
            <div className="faq-wrapper">

                <div className="header-banner-faq">
                    <h1 className="text-center side-border">HÄUFIG GESTELLTE FRAGEN

</h1>
                </div>
                <br />
                <br />
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Kann eine einzelne Person kaputte LCDs einsenden?

</button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            - Ja, jede Person die über ein defektes LCD verfügt und dieses unseren Geschäftsbedingung entspricht, kann das LCD zu uns einsendenein.
                        </div>
                        </div>
                    </div>
                    <br />
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Kann ich die Bildschirme kostenlos einschicken?

</button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            - Ab 25 Screens können sie diese schweizweit kostenlos bei uns 
                            <br/> einsenden. Wenden Sie sich hierzu an unseren Kundendienst


                        </div>
                        </div>
                    </div>
                    <br />
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Wann werde ich bezahlt?




</button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            - Wir bemühen uns um eine Auszahlung innerhalb von drei Werktagen. An Feiertagen oder unter unvorhersehbaren Umständen kann dies manchmal länger dauern.
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Wie kann ich die kaputten LCDs am besten verpacken?



</button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            - Um die kaputten LCDs richtig zu verpacken, können Sie unsere <span><a href="/packaging-tips">Verpackungstipps</a></span> befolgen.


                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Kann ich einen Bildschirm bei Ihnen reparieren lassen?



</button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            - Nein, wir kaufen nur kaputte oder beschädigte LCDs an.Wir reparieren keine LCDs.

                                

                                




                        </div>
                        </div>
                    </div>
                    <br />
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Kaufen Sie auch andere Bildschirme oder andere Marken an?



</button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div className="accordion-body">

                                - Es werden nur die auf der Website aufgeführten Marken und Modelle angekauft. Neue Modelle werden hinzugefügt und ältere Modelle laufen aus.

                                
                        </div>
                        </div>
                    </div>
                    <br />
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSeven">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                Wie sieht ein Prüfbericht aus?


                            </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                - Ein Beispiel für einen Prüfbericht finden Sie hier
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