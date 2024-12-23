"use client"
import { Container, Image, Row, Col } from "react-bootstrap";

const CertSection = () => {
    return (
        <Container fluid className="py-5 certbg mb-5">
            <Container>
                <h1 className="text-center txtwhite py-3">Certifications</h1>
                <Row className="justify-content-md-center">
                    <Col md={9}>
                        <div className="flex-row justify-content-center py-3 flex-sm-column">
                            <Image src="/img/cert1.png" className="mb-3 px-2" fluid alt="Cert of Compliance" />
                            <Image src="/img/cert2.png" className="mb-3 px-2" fluid alt="Cert of Compliance" />
                            <Image src="/img/cert3.png" className="mb-3 px-2" fluid alt="Cert of Compliance" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default CertSection;