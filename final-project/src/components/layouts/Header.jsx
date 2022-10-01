import React, { Fragment } from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = () => {

  const loginUser = localStorage.getItem('logined_user') ? JSON.parse(localStorage.getItem('logined_user')) : [];

  const navigate = useNavigate();

  const { cartItems } = useSelector(state => state.cart);

  const logoutHandler = () => {
    toast.success('Logout Successfully')
    localStorage.removeItem('logined_user');

    navigate('/login')
  }

  return (
    <Fragment>
      <Navbar sticky="top" bg="primary" variant="dark" expand="lg" className="mb-3">
        <Container>
          <Navbar.Brand as={Link} to="/">Ecommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Ecommerce
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/cart">Cart 
                  { cartItems && cartItems.length > 0  && <Badge pill bg="danger">{cartItems.length}</Badge> }
                </Nav.Link>

                {
                  loginUser.length === 0 &&
                  <Fragment>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                  </Fragment>
                }

                {
                  loginUser.name &&
                  <NavDropdown
                    title="Account"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item as={Link} to="/accounts/profile">Profile</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/accounts/orders">Orders</NavDropdown.Item>

                    {
                      loginUser.role === 'admin' && <Fragment>
                        <NavDropdown.Item as={Link} to="/accounts/products">Products</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/accounts/users">Users</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/accounts/roles">Roles</NavDropdown.Item>
                      </Fragment>
                    }

                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                  </NavDropdown>
                }

              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Fragment>
  )
}

export default Header