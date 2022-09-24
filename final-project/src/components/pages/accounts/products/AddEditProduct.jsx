import React, { Fragment, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addProductStart, updateProductStart } from '../../../../redux/actions/ProductAction';

let initialValue = {}

const AddEditProduct = () => {

    const { products } = useSelector(state => state.product);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { id } = useParams();

    if (id !== undefined) {
        initialValue = products.find((product, index) => index === parseInt(id));
    } else {
        initialValue = {
            name: "",
            description: "",
            price: "",
            image_url: "",
            status: ""
        }
    }

    const [validated, setValidated] = useState(false);

    const [formValue, setFormValue] = useState(initialValue);

    const { name, description, price, image_url, status } = formValue;

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {

            event.stopPropagation();
        } else {
            setValidated(true);

            if( id !== undefined ) {
                dispatch(updateProductStart(formValue,id));

                toast.success('Product has been Updated successfully');
            }else{
                dispatch(addProductStart(formValue));

                toast.success('Product has been added successfully');
            }

            setTimeout(() => {
                navigate('/accounts/products')
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
            <h2>Add Product <Link to="/accounts/products" className='btn btn-primary' style={{
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
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="description"
                            value={description}
                            onChange={onInputChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationCustom03" className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            name="price"
                            value={price}
                            onChange={onInputChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationCustom04" className="mb-3">
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="image_url"
                            value={image_url}
                            onChange={onInputChange}
                        />
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
                            <option value="2">Inactive</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
            </Form>
        </Fragment>
    )
}

export default AddEditProduct