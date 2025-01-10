"use client"
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import data from '../data/countries.json';

const ContactForm = () => {

    const [errors, setErrors] = useState({});
    const [selectedValue, setSelectedValue] = useState('');
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        country: ""
    });
    const handleChange = (e) => {
        setSelectedValue(e.target.value);
        const { name, value, type, checked } = e.target
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        })
    }
    const validate = () => {
        let formErrors = {}
    
        if (!formData.name) formErrors.name = "Name is required"
        if (!formData.phone) formErrors.phone = "Phone is required"
        if (!formData.country) formErrors.country = "Country is required"
        if (!formData.email) {
          formErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          formErrors.email = "Email address is invalid"
        }
    
        setErrors(formErrors)
        return Object.keys(formErrors).length === 0
    }

    const onSubmit  = async (e) => {
        e.preventDefault()
        if (!validate()) return
        console.log(formData);
    }

    return (
        <Container className="p-5 contactform">
            <Form onSubmit={onSubmit}>
                <Row>
                    <Col md={6} sm={12} xs={12}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="form-control" onChange={handleChange} value={formData.name} />
                        {errors.name && <p className="txtred">{errors.name}</p>}
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className="form-control" onChange={handleChange} value={formData.email} />
                        {errors.email && <p className="txtred">{errors.email}</p>}
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={6} sm={12} xs={12}>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" name="phone" className="form-control" onChange={handleChange} value={formData.phone} />
                        {errors.phone && <p className="txtred">{errors.phone}</p>}
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                        <label htmlFor="country">Country</label>
                        <select className="form-select" name="country" onChange={handleChange} value={formData.country}>
                            <option>Select country</option>
                            {data.map((item) => (
                                <option key={item.id} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                        {errors.country && <p className="txtred">{errors.country}</p>}
                    </Col>
                </Row>
                <br />
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={12} />
                <p className="body22">By submitting this form you agree to our terms and conditions and our Privacy Policy which explains how we may collect, use and disclose your personal information including to third parties.</p>
                <Button type="submit" variant="outline-primary" size="lg">Contact Sales</Button>
            </Form>
        </Container>
    );
}
export default ContactForm;