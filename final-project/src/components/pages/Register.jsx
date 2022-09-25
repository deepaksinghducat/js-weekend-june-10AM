import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addUserStart } from '../../redux/actions/UserAction';
import './Register.css'

let initialValue = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Customer',
}

const Register = () => {
    const [validated, setValidated] = useState(false);

    const [formValue, setFormValue] = useState(initialValue);

    const { name, email, password, confirmPassword } = formValue;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {

            event.stopPropagation();
        } else {
            setValidated(true);

            if(formValue.password === formValue.confirmPassword) { 

                const user = {
                    name: formValue.name,
                    email: formValue.email,
                    password: formValue.password,
                    role: formValue.role
                }

                dispatch(addUserStart(user));

                toast.success('Customer  registered successfully')

                navigate('/login');

            }else{
                toast.error('Password not match')
            }           
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
        <div className='register'>
            <h2 className='text-center pt-2'>Register</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="p-4">
                <Row>
                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name='name'
                            value={name}
                            onChange={onInputChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom04" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            name='email'
                            value={email}
                            onChange={onInputChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom02" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            name='password'
                            value={password}
                            onChange={onInputChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom03" className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={onInputChange}
                        />
                    </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
            </Form>
        </div>
    )
}

export default Register