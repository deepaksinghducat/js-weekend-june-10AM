import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import { useDispatch } from 'react-redux';
import { addressCartStart } from '../../redux/actions/CartAction';

const initialValue = {
    name: '',
    email: '',
    state: '',
    country: '',
    mobile: ''
}

const BillingAddress = () => {

    const [validated, setValidated] = useState(false);

    const dispatch = useDispatch();

    const [formValue, setFormValue] = useState(initialValue);

    const { name, email, state, country, mobile } = formValue;

    const handleSubmit = (event) => {
      const form = event.currentTarget;

      event.preventDefault();

      if (form.checkValidity() === false) {
        
        event.stopPropagation();
      }else{
        setValidated(true);

        dispatch(addressCartStart(formValue));
      }
    };

    const onInputChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value,
        });
    };

    return (
        <Accordion defaultActiveKey="0" className='mt-4'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Billing Address</Accordion.Header>
                <Accordion.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row>
                            <Form.Group as={Col} md="12" className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={onInputChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={onInputChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="mb-3">
                                <Form.Label>State</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="text"
                                        name="state"
                                        value={state}
                                        onChange={onInputChange}
                                        required
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="mb-3">
                                <Form.Label>Country</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="text"
                                        name="country"
                                        value={country}
                                        onChange={onInputChange}
                                        required
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="mb-3">
                                <Form.Label>Mobile</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="text"
                                        name="mobile"
                                        value={mobile}
                                        onChange={onInputChange}
                                        required
                                    />
                                </InputGroup>
                            </Form.Group>

                            <Button type="submit">Add Address</Button>
                        </Row>
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default BillingAddress