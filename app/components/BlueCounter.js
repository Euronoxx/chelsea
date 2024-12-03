"use client"
import { Container, Col, Row } from "react-bootstrap";

const BlueCounter = () => {
    return (
        <Container className="py-5 bluebg text-center">
            <Row>
                <Col>
                    <h1>100+</h1>
                    <p>Hospitals Served </p>
                </Col>
                <Col>
                    <h1>8+</h1>
                    <p>Years of Innovation </p>
                </Col>
                <Col>
                    <h1>500+</h1>
                    <p>Successful Deliveries</p>
                </Col>
            </Row>
        </Container>
    );
}
export default BlueCounter;