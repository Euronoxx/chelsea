"use client"
import Accordian from "@/app/components/Accordian";
import products from "@/app/data/products.json";
import { Button, Card, CardBody, CardFooter, Col, Container, Image, Row } from "react-bootstrap";

const CategoryPage = ({paramUrl}) => {

    function genstr (str) {
        str = str.toLowerCase().split('-');
        for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');
    }
    
    return (
        <Container className="py-5">
            <Row>
                <Col md={3}>
                    <Accordian />
                </Col>
                <Col md={9} className="d-flex">
                    <Row>
                        {products.filter(item => item.category === genstr(paramUrl)).map(item => (
                            <Col md={4} key={item.id}>
                                <Card style={{ minHeight: '21rem' }} className="mb-4">
                                    <CardBody>
                                        <Image src={item.imgurl} fluid alt={item.name} className="mx-auto mb-2" style={{height:'180px', display:'block'}} />
                                        <CardFooter>
                                            <p className="body22 txtblack">{item.title}</p>
                                            <Button variant="primary" href={`${item.path}/${item.slug}`} className="w-100">View Detail</Button>
                                        </CardFooter>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
export default CategoryPage;