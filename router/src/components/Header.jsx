import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                User
                            </Link>
                            <ul className="dropdown-menu">
                                <Link className="dropdown-item" to="/contact-us/deepak/deepak@gmail.com">Details</Link>
                                <Link className="dropdown-item" to="/profile">Profile</Link>
                                <Link className="dropdown-item" to="/profile/address">Address</Link>
                                <Link className="dropdown-item" to="/profile/order">Order</Link>
                            </ul>
                        </li>
                       
                    </ul>
                   
                </div>
            </div>
        </nav>
    )
}

export default Header