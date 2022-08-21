import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-4 col-xs-12">
                        <div className="single_footer">
                            <h4>Services</h4>
                            <ul>
                                <li><Link to="/">Lorem Ipsum</Link></li>
                                <li><Link to="/">Simply dummy text</Link></li>
                                <li><Link to="/">The printing and typesetting </Link></li>
                                <li><Link to="/">Standard dummy text</Link></li>
                                <li><Link to="/">Type specimen book</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="single_footer single_footer_address">
                            <h4>Page Link</h4>
                            <ul>
                                <li><Link to="/">Lorem Ipsum</Link></li>
                                <li><Link to="/">Simply dummy text</Link></li>
                                <li><Link to="/">The printing and typesetting </Link></li>
                                <li><Link to="/">Standard dummy text</Link></li>
                                <li><Link to="/">Type specimen book</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="single_footer single_footer_address">
                            <h4>Subscribe today</h4>
                            <div className="signup_form">
                                <form action="#" className="subscribe">
                                    <input type="text" className="subscribe__input" placeholder="Enter Email Address" />
                                    <button type="button" className="subscribe__btn"><i className="fas fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-xs-12">
                        <p className="copyright">Copyright © 2019 <Link to="/">Akdesign</Link>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer