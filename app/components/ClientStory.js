"use client"
import { Card, Carousel, CarouselItem, Container, Image, Row, Col, CardBody } from "react-bootstrap";

const ClientStory = () => {
    return (
        <Container className="p-5 mb-5">
            <h1 className="text-center">Our Clients Say</h1>
            <p className="text-center body22 pb-5">Our approach focuses on building strong relationships with our medical professionals and delivering best quality equipments. From preventive screenings to chronic disease management</p>
            <Carousel controls={false}>
                <CarouselItem>
                    <Row>
                        <Col md={3}>
                            <Card style={{ height:'22rem' }} className="mb-4">
                                <CardBody>
                                    <Image src="/img/blue-quote.png" width={40} alt="Quote" />
                                    <p className="body22 py-4">&quot;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line.&quot;</p>
                                    <p>Artem Sazonov<br /><Image src="/img/five-star.png" alt="Five Star" /></p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card style={{ height:'22rem' }} className="mb-4">
                                <CardBody>
                                    <Image src="/img/blue-quote.png" width={40} alt="Quote" />
                                    <p className="body22 py-4">&quot;Has no control about the blind texts it is an almost unorthographic.&quot;</p>
                                    <p>Chioke Chinasa<br /><Image src="/img/five-star.png" alt="Five Star" /></p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card style={{ height:'22rem' }} className="mb-4">
                                <CardBody>
                                    <Image src="/img/blue-quote.png" width={40} alt="Quote" />
                                    <p className="body22 py-4">&quot;About the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.&quot;</p>
                                    <p>Hou Shu<br /><Image src="/img/five-star.png" alt="Five Star" /></p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card style={{ height:'22rem' }} className="mb-4">
                                <CardBody>
                                    <Image src="/img/blue-quote.png" width={40} alt="Quote" />
                                    <p className="body22 py-4">&quot;One day however a small line of blind text by the name of Lorem Ipsum.&quot;</p>
                                    <p>Jontray Arnold<br /><Image src="/img/five-star.png" alt="Five Star" /></p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </CarouselItem>
                <CarouselItem>
                    <Row>
                        <Col md={3}>
                            <Card style={{ height:'22rem' }} className="mb-4">
                                <CardBody>
                                    <Image src="/img/blue-quote.png" width={40} alt="Quote" />
                                    <p className="body22 py-4">&quot;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line.&quot;</p>
                                    <p>Artem Sazonov<br /><Image src="/img/five-star.png" alt="Five Star" /></p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card style={{ height:'22rem' }} className="mb-4">
                                <CardBody>
                                    <Image src="/img/blue-quote.png" width={40} alt="Quote" />
                                    <p className="body22 py-4">&quot;Has no control about the blind texts it is an almost unorthographic.&quot;</p>
                                    <p>Chioke Chinasa<br /><Image src="/img/five-star.png" alt="Five Star" /></p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card style={{ height:'22rem' }} className="mb-4">
                                <CardBody>
                                    <Image src="/img/blue-quote.png" width={40} alt="Quote" />
                                    <p className="body22 py-4">&quot;About the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.&quot;</p>
                                    <p>Hou Shu<br /><Image src="/img/five-star.png" alt="Five Star" /></p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card style={{ height:'22rem' }} className="mb-4">
                                <CardBody>
                                    <Image src="/img/blue-quote.png" width={40} alt="Quote" />
                                    <p className="body22 py-4">&quot;One day however a small line of blind text by the name of Lorem Ipsum.&quot;</p>
                                    <p>Jontray Arnold<br /><Image src="/img/five-star.png" alt="Five Star" /></p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </CarouselItem>
            </Carousel>
        </Container>
    );
}
export default ClientStory;