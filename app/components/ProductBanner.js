"use client"
import { Container, Row, Col, Form, InputGroup, Button, Image } from "react-bootstrap";

const ProductBanner = () => {
    return (
        <Container fluid className="productbannerbg p-4">
            <Container className="mt-3">
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <InputGroup className="mb-4">
                            <Form.Control placeholder="Search Products" aria-label="Search Products" aria-describedby="basic-addon2" />
                            <Button variant="success" size="lg" id="button-addon2"><i className="bi bi-search"></i></Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="d-flex gap-4 justify-content-center d-none d-sm-none d-md-flex py-3">
                    <Image src="/img/koning.png" fluid alt="Koning" />
                    <Image src="/img/medtronic.png" fluid alt="Medtronic" />
                    <Image src="/img/lohmann.png" fluid alt="Lohmann" />
                    <Image src="/img/teleflex.png" fluid alt="Teleflex" />
                    <Image src="/img/fisher.png" fluid alt="Fisher" />
                    <Image src="/img/chelsea.png" fluid alt="Chelsea" />
                </div>
            </Container>
        </Container>
    );
}
export default ProductBanner;