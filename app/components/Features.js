"use client"
import { Container, Col, Row, Image } from "react-bootstrap";

const Features = () => {
    return (
        <Container className="py-5 featuresec">
            <Row>
                <Col md={6} sm={12} xs={12}>
                    <h1>Explore Features</h1>
                    <p className="body22 pb-5">Discover a new standard of Chelsea Enterprises. Explore our range of medical equipment for primary care and specialty treatments to wellness programs and health.</p>
                    <Row className="pb-4">
                        <Col md={2} sm={2} xs={2}>
                            <div className="pt-2">
                                <Image src="/img/robotic-surgery.png" fluid alt="Robotic Surgery" />
                            </div>
                        </Col>
                        <Col md={10} sm={10} xs={10}>
                            <h4>Cutting-Edge Technology</h4>
                            <p className="body22">Access the latest advancements in medical equipment and consumables.</p>
                        </Col>
                    </Row>
                    <Row className="pb-4">
                        <Col md={2} sm={2} xs={2}>
                            <div className="pt-2">
                                <Image src="/img/teamwork.png" fluid alt="Teamwork" />
                            </div>
                        </Col>
                        <Col md={10} sm={10} xs={10}>
                            <h4>Reliable Partnerships</h4>
                            <p className="body22">Build strong, transparent relationships with a trusted team that values excellence.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2} sm={2} xs={2}>
                            <div className="pt-2">
                                <Image src="/img/dna.png" fluid alt="Teamwork" />
                            </div>
                        </Col>
                        <Col md={10} sm={10} xs={10}>
                            <h4>Innovation-Driven</h4>
                            <p className="body22">Bringing you breakthrough technologies that revolutionize traditional practices.</p>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} sm={12} xs={12}>
                    <Image src="/img/instruments.png" fluid alt="Surgical Instruments" />
                </Col>
            </Row>
        </Container>
    );
}
export default Features;