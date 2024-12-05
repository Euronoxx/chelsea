"use client"
import { Container, Col, Row, Image, Button } from "react-bootstrap";

const AboutUs = () => {
    return (
        <Container className="py-5">
            <Row>
                <Col md={6} sm={12} xs={12}>
                    <div className="position-relative">
                        <Image src="/img/doctors-group.png" fluid alt="A group of doctors" />
                        <div className="position-absolute top-0 end-0 translate-middle-y">
                            <Image src="/img/badge.png" fluid alt="Badge" />
                        </div>
                    </div>
                    
                </Col>
                <Col md={6} sm={12} xs={12}>
                    <h1 className="px-5 py-4">About Us</h1>
                    <p className="px-5 body22">Delivering cutting-edge medical equipment and solutions to hospitals across North India, backed by a commitment to quality, reliability, and patient care.</p>
                    <Button variant="outline-primary" size="lg" className="m-5">Learn More</Button>
                </Col>
            </Row>
        </Container>
    );
}
export default AboutUs;