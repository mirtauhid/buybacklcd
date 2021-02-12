import React from 'react';
import './Acquainted.css';

const Acquainted = () => {
    return (
        <div className="acquainted-section">
            <div className="row">
                <div className="col-md-6">
                    <h1 style={{ color: '#766D76', fontSize: '3vw', fontWeight: '500' }} >Gewusst wie</h1>
                    <br />
                    <p style={{ fontSize: '1.2rem' }} >Wir sind example.com und haben viele Jahre Erfahrung in der Refurbishing-Branche. Wir zeichnen uns beim Ankauf von kaputten LCDs dadurch aus, dass wir einen einfachen, aber transparenten Prozess und ein Bewertungssystem haben.</p>
                    <br />
                    <p style={{ fontSize: '1.2rem' }} >Wie wir das machen? Das erklären wir Ihnen gerne in einem persönlichen Gespräch. Kontaktieren Sie uns über das untenstehende Formular oder rufen Sie unseren Spezialisten an, um sofort einen Termin zu vereinbaren.</p>
                </div>
                <div className="col-md-6">
                    <div className="text-wrapper" style={{ margin: '0 auto', background: '#F0F1F1', padding: '50px 50px 27px 50px', borderRadius: '8px' }}>
                        <h3 style={{ color: 'black',fontWeight: "500" }}>Sie haben Fragen?</h3>
                        <p style={{ color: 'black' }}>Sie haben Fragen zu unserem Bewertungssystem? Gerne erläutern unsere Experten Ihnen unsere Vorgehensweise in einem persönlichen Gespräch. Benutzen Sie unser Kontakt-Formular oder rufen Sie uns an. Unsere Experten sind stets bemüht Ihnen weiterzuhelfen.<br/><span style={{ color: 'black', fontWeight: '600',fontSize:"20px" }} >0779560487</span></p>
                        <br />
                        <button className="btn btn-primary ken-btn" style={{ background: '#5FAC1C', border: '#5FAC1C', width: '150px', height: '50px' , color:"white !important"}} ><a style={{color: 'white', textDecoration: 'none'}} href="/contact">Anrufen</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Acquainted;