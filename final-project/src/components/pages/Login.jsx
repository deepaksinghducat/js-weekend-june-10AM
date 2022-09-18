import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Login.css'

const Login = () => {
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
        <div className='login'>
            <h2 className='text-center pt-2'>Login</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="p-4">
                <Row>
                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="text"
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
                </Row>
                <Button type="submit">Submit form</Button>
            </Form>
        </div>
    )
}

export default Login