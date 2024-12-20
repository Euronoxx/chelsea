"use client"
import { Container, Image, Row, Col } from "react-bootstrap";

const CertSection = () => {
    return (
        <Container fluid className="py-5 certbg mb-5">
            <Container>
                <h1 className="text-center txtwhite py-3">Certifications</h1>
                <Row className="justify-content-md-center">
                    <Col md={9}>
                        <div className="d-flex gap-5 justify-content-center d-none d-sm-none d-md-flex py-3">
                            <Image src="/img/cert1.png" fluid alt="Cert of Compliance" />
                            <Image src="/img/cert2.png" fluid alt="Cert of Compliance" />
                            <Image src="/img/cert3.png" fluid alt="Cert of Compliance" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default CertSection;