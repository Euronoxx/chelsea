"use client"
import { Col, Container, Image, Row } from "react-bootstrap";

const AboutBanner = () => {
    return (
        <Container fluid className="bgblue">
            <Container className="py-5">
                <Row>
                    <Col md={4}>
                        <div className="text-center">
                            <Image src="/img/mandeep-goma.png" fluid alt="Dr Mandeep Goma" />
                            <h5 className="txtwhite mt-3">
                                Dr Mandeep Goma<br />Founder
                            </h5>
                        </div>
                        
                    </Col>
                    <Col md={8}>
                        <h2 className="txtwhite">About Our ORGANISATION</h2>
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