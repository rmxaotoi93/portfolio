import React, { Component } from 'react'
import { Container, Row, Col,Button } from 'react-bootstrap'
import { FaFacebook, FaGithub, FaGoogle, FaPhone, FaEnvelope, FaAddressBook } from 'react-icons/fa'


export class Contact extends Component {
    render() {
        return (
            <div id="section5" className="contact">
                <h1>Get in Touch</h1>
                <div className="bar"></div>
                <Row>
                    <Col style={{ paddingRight: 0, paddingLeft: 0 }}>
                        <div className="contact-left container">
                            <h1>Contact</h1>
                            <div className="left-item">
                                <h3><FaPhone/> Phone</h3>
                                <p>0968579875</p>
                            </div>
                            <div className="left-item">
                                <h3> <FaEnvelope/>Email</h3>
                                <p>cauchu2287@gmail.com</p>
                            </div>
                            <div className="left-item">
                                <h3 > <FaAddressBook/>Address</h3>
                                <p>103, 13B Street, Binh Tri Dong B, Binh Tan District</p>
                            </div>
                            <div className="icon">
                            <a href="https://github.com/rmxaotoi93">  <FaGithub /></a>
                            <a href="https://github.com/rmxaotoi93">  <FaFacebook /></a>
                            <a href="https://github.com/rmxaotoi93">  <FaGoogle /></a>
                            </div>
                        </div>

                    </Col>
                    <Col style={{ paddingRight: 0, paddingLeft: 0 }}>
                        <div className="contact-right container">
                            <h1>Form</h1>
                        <div className="input">
                        <input type='text' placeholder="Name"></input>
                        <input type='text' placeholder="Email"></input>
                        </div>
                        <textarea style={{marginTop:30, marginLeft: 85, justifyContentc:'center', borderRadius: 30, paddingLeft: 20, paddingTop:10}} placeholder="Message" rows="4" cols="65"></textarea>
                        <div className="button-submit">
                        <Button>Submit</Button>

                        </div>
                        </div>
                       
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Contact
