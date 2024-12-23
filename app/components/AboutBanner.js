"use client"
import { Col, Container, Image, Row } from "react-bootstrap";

const AboutBanner = () => {
    return (
        <Container fluid className="bgblue">
            <Container className="py-5">
                <h1 className="txtwhite text-center">Meet the Founders</h1>
                <Row className="justify-content-md-center">
                    <Col md={4} className="d-flex gap-5">
                        <div className="text-center">
                            <Image src="/img/mandeep-goma.png" fluid alt="Dr Mandeep Goma" />
                            <h5 className="txtwhite mt-3">
                                Dr Mandeep Goma
                            </h5>
                        </div>
                        <div className="text-center">
                            <Image src="/img/sanjeev-bhaskar.png" fluid alt="Sanjeev Bhaskar" />
                            <h5 className="txtwhite mt-3">
                                Sanjeev Bhaskar
                            </h5>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-4">
                    <Col md={10}>
                        <h2 className="txtwhite text-center">About Our ORGANISATION</h2>
                        <p className="txtwhite bannertxt">We have been an established and popular firm with an excellent track record for the best customer satisfaction. We have never compromised on the quality and the services provided to the customer. We believe in keeping the customers happy and providing them with products at a very competent price. We have an excellent staff who will guide you with their best ideas by keeping in constant touch with your organization and informing about the market trends.</p>
                        <p className="txtwhite bannertxt">We build our reputation on reliability, sound business ethics, and the highest level ofperformance. We believe that our first responsibility is to the patients, doctors and technicians.</p>
                        <p className="txtwhite bannertxt">Everything we do is focused on achieving the highest quality in meeting the needs of our customers. We market healthcare & medical equipment and consumables for hospitals.</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
    
}
export default AboutBanner;