import React, { Component } from 'react';

import logo from '../assets/img/logo.png';
import sigart from '../json/sigart.json';

class Footer extends Component {

    constructor() {
        super();
        this.state = {
            sigart
        }
    }

    render() {
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-sm-6 col-md-4 col-xl-3">
                            <div className="single-footer-widget footer_1">
                                <a href="index.html"> <img src={logo} alt="" /></a>
                                <p>But when shot real her. Chamber her one visite removal six
                                    sending himself boys scot exquisite existend an </p>
                                <p>But when shot real her hamber her </p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xl-4">
                            <div className="single-footer-widget footer_2">
                                <h4>Newsletter</h4>
                                <p>Stay updated with our latest trends Seed heaven so said place winged over given forth
                                    fruit.
                                </p>
                                <form action="#">
                                    <div className="form-group">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder='Enter email address' />
                                            <div className="input-group-append" >
                                                <button className="btn btn_1" type="button"><i className="ti-angle-right"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="social_icon">
                                    <a href="#"> <i className="ti-facebook"></i> </a>
                                    <a href="#"> <i className="ti-twitter-alt"></i> </a>
                                    <a href="#"> <i className="ti-instagram"></i> </a>
                                    <a href="#"> <i className="ti-skype"></i> </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-md-4">
                            <div className="single-footer-widget footer_2">
                                <h4>Contact us</h4>
                                <div className="contact_info">
                                    <p><span> Address :</span> {this.state.sigart.Contact.address}</p>
                                    <p><span> Phone :</span> +2 36 265 (8060)</p>
                                    <p><span> Email : </span>info@colorlib.com </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright_part_text text-center">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <p className="footer-text m-0">
                                            Copyright &copy; { new Date().getFullYear() }  All rights reserved | This template is made with
                                            <i className="ti-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;