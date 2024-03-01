import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Container } from "react-bootstrap";

const FormPage = () => {

    const [sekolah, setSekolah] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [about, setAbout] = useState('')
    const navigate = useNavigate()

    const HandleSubmit = (e) => {
        e.preventDefault()
        const sekolah = { sekolah, email, phone, address, about }

        fetch('http://localhost:3030/sekolah', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sekolah)
        }).then(() => {
            console.log("New Sekolah added")
        }).then(() => {
            navigate("/sekolah_impian")
        })
    }

    const handleCancel = () => {
        navigate("/")
    }

    return (

        <Container style={{ marginTop: "20vh" }}>
            <Form onSubmit={HandleSubmit}>
                <Form.Group className="mb-3" controlId="formSekolah">
                    <Form.Label>Nama Sekolah</Form.Label>
                    <Form.Control value={sekolah} onChange={(e) => setSekolah(e.target.value)} type="text" placeholder="Enter School's name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter School's Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control value={phone} onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Enter School's Phone Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Enter School's address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAbout">
                    <Form.Label>About</Form.Label>
                    <Form.Control value={about} onChange={(e) => setAbout(e.target.value)} type="text" placeholder="Enter About the School" />
                </Form.Group>

                <Button variant="primary" type="submit" style={{marginRight: "20px"}}>
                    Submit
                </Button>
                <Button variant="danger" type="submit" on>
                    Cancel
                </Button>
            </Form>
        </Container>

    )
}

export default FormPage