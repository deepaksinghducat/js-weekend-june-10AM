import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Register.css'

const Register = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className='register'>
            <h2 className='text-center pt-2'>Register</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="p-4">
                <Row>
                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Name"
                            defaultValue=""
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Email"
                            defaultValue=""
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom02" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                            defaultValue=""
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom02" className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Confirm Password"
                            defaultValue=""
                        />
                    </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
            </Form>
        </div>
    )
}

export default Register