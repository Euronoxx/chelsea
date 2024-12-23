"use client"
import { Button, Card, CardBody, Col, Container, Row } from "react-bootstrap";

const ContactCard = () => {
    return (
        <Container style={{marginBottom: '-200px'}}>
            <Row className="justify-content-md-center">
                <Col md={5} sm={12} xs={12}>
                    <Card className="bluecard mb-4">
                        <CardBody>
                            <h3>Contact</h3>
                            <p>Call us<br />if you have any questions</p>
                            <h4>+91-86288-00023</h4>
                            <Button variant="outline-light" className="mt-5" href="https://wa.me/918628800023" target="_blank">CONTACT US ON WHATSAPP <i className="bi bi-whatsapp"></i></Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={5} sm={12} xs={12}>
                    <Card className="greencard mb-4">
                        <CardBody>
                            <h3>Visit</h3>
                            <p>Goma Niwas,<br />Chakkar, Shimla,<br />Himachal Pradesh 171005</p>
                            <Button variant="outline-light" className="mt-5" href="https://maps.app.goo.gl/Ga6RJbTTqpdeMBBp6" target="_blank">VIEW ON MAP</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default ContactCard;