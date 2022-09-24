import React, { Fragment, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addRoleStart, updateRoleStart } from '../../../../redux/actions/RoleAction';
import { toast } from 'react-toastify';

let initialValue = {}

const AddEditRole = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { roles } = useSelector(state => state.roles);

    if (id !== undefined) {
        initialValue = roles.find((role, index) => index === parseInt(id))
    } else {
        initialValue = {
            name: "",
            status: "",
        };
    }

    const [formValue, setFormValue] = useState(initialValue);

    const [validated, setValidated] = useState(false);

    const { name, status } = formValue;


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {

            event.stopPropagation();
        } else {
            setValidated(true);

            if (id !== undefined) {
                dispatch(updateRoleStart(formValue, id))

                toast.success('Role updated successfully')
            } else {
                dispatch(addRoleStart(formValue));

                toast.success('Role Added successfully')
            }

            setTimeout(() => {
                navigate('/accounts/roles');
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
            <h2>{id ? 'EDIT' : 'ADD'} Role <Link to="/accounts/roles" className='btn btn-primary' style={{
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
                        <Form.Label>Status</Form.Label>
                        <Form.Select
                            required aria-label="Default select example"
                            name="status"
                            onChange={onInputChange}
                            defaultValue={status}
                        >
                            <option>Open this select menu</option>
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
            </Form>
        </Fragment>
    )
}

export default AddEditRole