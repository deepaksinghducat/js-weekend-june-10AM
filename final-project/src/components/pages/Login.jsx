import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Login.css'

let initialValue = {
    email: '',
    password: ''
}

const Login = () => {
    const [validated, setValidated] = useState(false);

    const [formValue, setFormValue] = useState(initialValue);

    const { email, password } = formValue;

    const { user }  = useSelector(state => state.user);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            
            event.stopPropagation();
        }else{
            setValidated(true);

            let check = user.find((usr,index) => {
                if(usr.email === formValue.email && usr.password === formValue.password) {
                    return usr
                }
            }) 

            if(check) {

                toast.success('Login successful');

                localStorage.setItem('logined_user',JSON.stringify(check));

                navigate('/accounts/profile');
            }else {
                toast.error('Invalid credentials');
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
        <div className='login'>
            <h2 className='text-center pt-2'>Login</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="p-4">
                <Row>
                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom02" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            name="password"
                            value={password}
                            onChange={onInputChange}
                        />
                    </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
            </Form>
        </div>
    )
}

export default Login