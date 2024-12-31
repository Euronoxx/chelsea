"use client"
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const ChelseaSurgical = () => {
    return (
        <>
        <Header />
        <Container className="py-5">
            <Row>
                <Col md={6} sm={12} xs={12}>
                    <Image src="/img/chelsea-surgical.jpg" fluid alt="Koning breast imager" />
                </Col>
                <Col md={6} sm={12} xs={12}>
                    <h1 className="txtblack">Chelsea Surgical Instruments</h1>
                    <p className="body22">For the First time in Breast Imaging History, KBCT has Introduced Co-Registration in Multiple Planes using TRUE 3D Volumetric Imaging</p>
                    <Button variant="primary" size="lg" className="mt-4">Download Brochure</Button>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    );
}
export default ChelseaSurgical;