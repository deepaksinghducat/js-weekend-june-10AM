import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';

const PaymentMethod = () => {

  const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };


  return (
    <Accordion defaultActiveKey="0" className='mt-4'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Payment Method</Accordion.Header>
        <Accordion.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Col} md="12" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Name"
                  defaultValue="Mark"
                />
              </Form.Group>
              <Form.Group as={Col} md="12" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  defaultValue="Otto"
                />
              </Form.Group>
              <Form.Group as={Col} md="12" className="mb-3">
                <Form.Label>State</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="State"
                    aria-describedby="inputGroupPrepend"
                    defaultValue="Otto"
                    required
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="12" className="mb-3">
                <Form.Label>Country</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Country"
                    aria-describedby="inputGroupPrepend"
                    defaultValue="Otto"
                    required
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="12" className="mb-3">
                <Form.Label>Mobile</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Mobile"
                    aria-describedby="inputGroupPrepend"
                    defaultValue="Otto"
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Row>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default PaymentMethod