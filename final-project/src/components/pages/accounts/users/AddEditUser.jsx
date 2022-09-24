import React, { Fragment, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addUserStart, updateUserStart } from '../../../../redux/actions/UserAction';

let initialValue = {}

const AddEditUser = () => {

    const { id } = useParams();

    const { roles } = useSelector(state => state.roles);

    const { user } = useSelector(state => state.user);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    if (id !== undefined) {
        initialValue = user.find((usr, index) => index === parseInt(id))
    } else {
        initialValue = {
            name: '',
            email: '',
            password: '',
            role: '',
            status: ''
        }
    }

    const [validated, setValidated] = useState(false);

    const [formValue, setFormValue] = useState(initialValue);

    const { name, email, password, role, status } = formValue;

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {

            event.stopPropagation();
        } else {

            setValidated(true);

            if (id !== undefined) {

                dispatch(updateUserStart(formValue, id));

                toast.success('User Updated successfully');

            } else {
                dispatch(addUserStart(formValue));

                toast.success('User added successfully');
            }

            setTimeout(() => {
                navigate('/accounts/users')
            }, 5000)
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
        <Fragment>
            <h2>{id ? 'Edit' : 'Add'} User <Link to="/accounts/users" className='btn btn-primary' style={{
                float: 'right',
            }}>Back</Link></h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="p-4">
                <Row>
                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="name"
                            value={name}
                            onChange={onInputChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationCustom02" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationCustom03" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            name="password"
                            value={password}
                            onChange={onInputChange}

                        />
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationCustom04" className="mb-3">
                        <Form.Label>Role</Form.Label>
                        <Form.Select
                            required aria-label="Default select example"
                            name="role"
                            defaultValue={role}
                            onChange={onInputChange}
                        >
                            <option>Open this select menu</option>
                            {
                                roles.length > 0 && roles.map((role, index) => (
                                    <option value={role.name} key={index}>{role.name}</option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationCustom05" className="mb-3">
                        <Form.Label>Status</Form.Label>
                        <Form.Select
                            required
                            aria-label="Default select example"
                            name="status"
                            defaultValue={status}
                            onChange={onInputChange}
                        >
                            <option>Open this select menu</option>
                            <option value="1">Active</option>
                            <option value="0">InActive</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
            </Form>
        </Fragment>
    )
}

export default AddEditUser