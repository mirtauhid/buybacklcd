import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { Col, Form, Tab, Tabs } from 'react-bootstrap';
import './SignUpLCD.css';

const SignUpLCD = () => {
    const [data, setData] = useState({})

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
        <main id="sign-up">
            <div className="sign-up-wrapper">
                <div className="sign-up-banner">
                    <h1>LCD REGISTRIEREN</h1>
                    <br />

                </div>
                <div className="sign-up-body">
                    <br />
                    <p style={{ color: '#616160' }}> <strong>Registrieren Sie hier Ihre LCDs zur Aufnahme

</strong> <br />
                        <small>Geben Sie pro Marke (iPhone / Samsung) an, wie viele LCDs Sie einsenden möchten. <br/>

Wenn möglich, geben Sie bitte die Anzahl der LCDs pro Modell an. <br/> Mit dem Einsenden der LCDs erklären Sie sich mit unseren Bedingungen einverstanden.</small></p>
                    <br />
                    <Tabs defaultActiveKey="first" id="uncontrolled-tab-example">
                        <Tab eventKey="first" title="Schritt  1: iPhone">
                            <div className="row">

                                <div className="col-md-6">
                                    <Form action={sendEmail}>
                                        <Form.Group style={{ textAlign: 'left' }}>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    iPhone 5
                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    iPhone 5S
                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    iPhone 6                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    iPhone 6 Plus                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    iPhone 6S                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    iPhone 6S Plus                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    iPhone 7                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    iPhone 7 Plus                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    iPhone 8                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    iPhone 8 Plus                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                        </Form.Group>
                                    </Form>
                                </div>
                                <div className="col-md-6">
                                    <Form action={sendEmail}>
                                        <Form.Group style={{ textAlign: 'left' }}>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    iPhone X                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    iPhone Xs                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    iPhone Xs Max                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    iPhone Xr                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    iPhone 11                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    iPhone 11 Pro                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    iPhone 11 Pro Max                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    iPad Air 2                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    iPad pro 9.7                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                Gesamtbetrag                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="second" title="Schritt  2: Samsung & Andere">
                            <div className="row">
                                <div className="col-md-6">
                                    <Form action={sendEmail}>
                                        <Form.Group style={{ textAlign: 'left' }}>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy S1 / S2                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy S3 / S4                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy S3 Mini / S4 Mini / S5 Mini                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy S5 / S5 Neo                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy S6                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy S6 Edge                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy S6 Edge Plus                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy S7                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy S7 Edge                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy S8                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy S8 Plus                                   </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy S9                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy S9 Plus                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy S10                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy S10e                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy S10 Plus                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy S20                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy S20 Plus                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy S20 ultra                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                Gesamtbetrag                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                        </Form.Group>
                                    </Form>
                                </div>
                                <div className="col-md-6">
                                    <Form action={sendEmail}>
                                        <Form.Group style={{ textAlign: 'left' }}>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy A10 / A20e / A41 / A51 / A71 / A80 / A90                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy A30 / A40 / A50 / 70                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy A Others                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy J Series                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy Note 1                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy Note 2                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy Note 3                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy Note 3 Neo                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy Note 4                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy Note 8                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy Note 9                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy Note 10                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Galaxy Note 10 Plus                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Total number of screens Samsung                                    </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Huawei Pro
                                            </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Huawei Mix + frame
                                            </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Total number of screens Huawei
                                            </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>

                                                </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label column lg={10}>
                                                    Other brands + frame
                                            </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" />
                                                </Col>
                                            </Form.Row>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="third" title="Schritt  3: Persönliche Informationen">
                            <div className="third-tab">
                                <br />
                                <br />
                                <p style={{ color: '#FF9211' }}><strong>Fill in the information below to send

</strong></p>

                                <form action={sendEmail}>
                                    <input type="text" name="" id="" placeholder="Your debtor number (if known)" />
                                    <input type="text" name="" id="" placeholder="Company Name" />
                                    <input type="text" name="" id="" placeholder="VAT Number*" />
                                    <input type="text" name="" id="" placeholder="First and Last Name*" />
                                    <input type="text" name="" id="" placeholder="Address*" />
                                    <input type="text" name="" id="" placeholder="Postal Code*" />
                                    <input type="text" name="" id="" placeholder="Place*" />
                                    <input type="text" name="" id="" placeholder="Country*" />
                                    <input type="text" name="" id="" placeholder="Phone Number*" />
                                    <input type="text" name="" id="" placeholder="E-Mail* " />
                                    <input type="text" name="" id="" placeholder="Package Weight*" />
                                    <br />
                                    <br />
                                    <div className="radio">
                                        <strong>Shipping costs *
                                    </strong>
                                        <br />
                                        <input type="radio" name="" id="" /> <small> I have less than 15 LCDs (NL) or 50 LCDs (BE) and pay the shipping costs myself.</small>
                                        <br />
                                        <input type="radio" name="" id="" /> <small>I have more than 15 LCDs and can ship for free within the Netherlands or have more than 50 LCDs for free shipping outside the Netherlands.</small>
                                    </div>
                                    <br />

                                    <input variant="primary" className="btn btn-primary" type="submit" value="Submit" />

                                </form>
                                <br />
                                <strong style={{ color: 'orange' }}>By submitting this form you agree to our terms and conditions .</strong>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </main >
    );
};

export default SignUpLCD;