import React from 'react';
import { Col, Form } from 'react-bootstrap';

const StepOne = () => {
    return (
        <div>
            <Form>
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
    );
};

export default StepOne;