import React, { Fragment, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const View = () => {

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
        <Fragment>
            <h2>Add User <Link to="/accounts/users" className='btn btn-primary' style={{
                float: 'right',
            }}>Back</Link></h2>
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

                    <Form.Group as={Col} md="12" controlId="validationCustom02" className="mb-3">
                        <Form.Label>Status</Form.Label>
                        <Form.Select required aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
            </Form>
        </Fragment>
    )
}

export default View