"use client"
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <>
        <Header />
        <Container fluid className="contactbg">
            <Container className="text-center pt-5">
                <h1 className="mt-5">Contact our sales team</h1>
                <p>If you need our help, have questions about how to use the platform<br />or are experiencing technical difficulties, please do not hesitate to contact us.</p>
            </Container>
        </Container>
        <ContactForm />
        <Container className="p-5">
            <Row>
                <Col md={4} sm={12} xs={12}>
                    <div className="text-center">
                        <Image src="/img/envelope.png" width={70} alt="Email" />
                        <h4 className="txtblue mt-4">Email Us</h4>
                        <p className="body22">Email us for general queries, including marketing and partnership opportunities.</p>
                        <h5 className="txtblue mt-4">contact@the-chelsea.com</h5>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={12}>
                    <div className="text-center">
                        <Image src="/img/phicon.png" width={70} alt="Email" />
                        <h4 className="txtblue mt-4">Call Us</h4>
                        <p className="body22">Call us to speak to a member of our team. We are always happy to help.</p>
                        <h5 className="txtblue mt-4">+91-86288-00023</h5>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={12}>
                    <div className="text-center">
                        <Image src="/img/location.png" width={70} alt="Email" />
                        <h4 className="txtblue mt-4">Visit Us</h4>
                        <p className="body22">Check out helpful resources, FAQs and developer tools.</p>
                        <Button variant="outline-primary" size="lg">View Location <i class="bi bi-arrow-right"></i></Button>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    );
}
export default Contact;