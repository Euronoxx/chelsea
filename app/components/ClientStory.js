"use client"
import { Card, Carousel, CarouselItem, Container, Image, Row, Col, CardBody, CardFooter } from "react-bootstrap";

const ClientStory = () => {
    return (
        <Container className="py-5 mb-5">
            <h1 className="text-center">Our Clients Say</h1>
            <p className="text-center body22 pb-5">Our approach focuses on building strong relationships with our medical professionals and delivering best quality equipments. From preventive screenings to chronic disease management</p>
            <Carousel controls={false}>
                <CarouselItem>
                    <Row>
                        <Col md={3}>
                            <Card style={{ height:'22rem' }} className="mb-4">
                                <CardBody>
                                    <Image src="/img/blue-quote.png" width={40} alt="Quote" />
                                    <p className="body22 py-4">Chelsea Enterprises has consistently provided us with top-quality medical equipment and unmatched customer support.</p>
                                </CardBody>
                                <CardFooter className="d-flex gap-2" style={{border:'0px'}}>
                                    <div>
                                        <Image src="/img/harman-sandhu.png" fluid alt="Dr Harman Sandhu" />
                                    </div>
                                    <div>
                                        <p className="body22">Dr Harman Sandhu<br /><Image src="/img/five-star.png" alt="Five Star" /></p>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card style={{ height:'22rem' }} className="mb-4">
                                <CardBody>
                                    <Image src="/img/blue-quote.png" width={40} alt="Quote" />
                                    <p className="body22 py-4">We rely on Chelsea Enterprises for our surgical supplies. Their expertise and prompt deliveries make them stand out.</p>
                                </CardBody>
                                <CardFooter className="d-flex gap-2" style={{border:'0px'}}>
                                    <div>
                                        <Image src="/img/naman-sharma.png" fluid alt="Dr Naman Sharma" />
                                    </div>
                                    <div>
                                        <p className="body22">Naman Sharma<br /><Image src="/img/five-star.png" alt="Five Star" /></p>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card style={{ height:'22rem' }} className="mb-4">
                                <CardBody>
                                    <Image src="/img/blue-quote.png" width={40} alt="Quote" />
                                    <p className="body22 py-4">Their range of cutting-edge medical products has significantly improved our clinical outcomes. Highly recommended!</p>
                                </CardBody>
                                <CardFooter className="d-flex gap-2" style={{border:'0px'}}>
                                    <div>
                                        <Image src="/img/aditi-manta.png" fluid alt="Dr Aditi Manta" />
                                    </div>
                                    <div>
                                        <p className="body22">Dr Aditi Manta<br /><Image src="/img/five-star.png" alt="Five Star" /></p>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card style={{ height:'22rem' }} className="mb-4">
                                <CardBody>
                                    <Image src="/img/blue-quote.png" width={40} alt="Quote" />
                                    <p className="body22 py-4">The team at Chelsea Enterprises goes above and beyond to meet our needs, ensuring a seamless experience every time.</p>
                                </CardBody>
                                <CardFooter className="d-flex gap-2" style={{border:'0px'}}>
                                    <div>
                                        <Image src="/img/ramesh-thakur.png" fluid alt="Dr Ramesh Thakur" />
                                    </div>
                                    <div>
                                        <p className="body22">Dr Ramesh Thakur<br /><Image src="/img/five-star.png" alt="Five Star" /></p>
                                    </div>
                                </CardFooter>
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
                                    <p className="body22 py-4">We&apos;ve worked with Chelsea Enterprises for years and appreciate their dedication to quality and innovation.</p>
                                </CardBody>
                                <CardFooter className="d-flex gap-2" style={{border:'0px'}}>
                                    <div>
                                        <Image src="/img/divya-chauhan.png" fluid alt="Dr Divya Chauhan" />
                                    </div>
                                    <div>
                                        <p className="body22">Dr Divya Chauhan<br /><Image src="/img/five-star.png" alt="Five Star" /></p>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card style={{ height:'22rem' }} className="mb-4">
                                <CardBody>
                                    <Image src="/img/blue-quote.png" width={40} alt="Quote" />
                                    <p className="body22 py-4">Thanks to their state-of-the-art equipment, our hospital has elevated its standards of patient care.</p>
                                </CardBody>
                                <CardFooter className="d-flex gap-2" style={{border:'0px'}}>
                                    <div>
                                        <Image src="/img/prakash-rao.png" fluid alt="Dr Prakash Rao" />
                                    </div>
                                    <div>
                                        <p className="body22">Dr Prakash Rao<br /><Image src="/img/five-star.png" alt="Five Star" /></p>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card style={{ height:'22rem' }} className="mb-4">
                                <CardBody>
                                    <Image src="/img/blue-quote.png" width={40} alt="Quote" />
                                    <p className="body22 py-4">Their transparency and reliability make Chelsea Enterprises an invaluable partner in the healthcare industry.</p>
                                </CardBody>
                                <CardFooter className="d-flex gap-2" style={{border:'0px'}}>
                                    <div>
                                        <Image src="/img/muskan-shyam.png" fluid alt="Dr Muskan Shyam" />
                                    </div>
                                    <div>
                                        <p className="body22">Dr Muskan Shyam<br /><Image src="/img/five-star.png" alt="Five Star" /></p>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card style={{ height:'22rem' }} className="mb-4">
                                <CardBody>
                                    <Image src="/img/blue-quote.png" width={40} alt="Quote" />
                                    <p className="body22 py-4">We trust Chelsea Enterprises for all our pharmaceuticals. Their products always exceed expectations.</p>
                                </CardBody>
                                <CardFooter className="d-flex gap-2" style={{border:'0px'}}>
                                    <div>
                                        <Image src="/img/surbhi-shandil.png" fluid alt="Dr Surbhi Shandil" />
                                    </div>
                                    <div>
                                        <p className="body22">Dr Surbhi Shandil<br /><Image src="/img/five-star.png" alt="Five Star" /></p>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </CarouselItem>
            </Carousel>
        </Container>
    );
}
export default ClientStory;