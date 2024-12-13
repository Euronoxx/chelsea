"use client"
import { Button, Card, CardBody, Col, Container, Image, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import products from '../data/products.json';
import Accordian from "../components/Accordian";
import ProductBanner from "../components/ProductBanner";
import { useState } from "react";

const Products = () => {

    const [category, setCategory] = useState('Ablation Products');
    const [brand, setBrand] = useState('Medtronic');

    return (
        <>
        <Header />
        <ProductBanner />
        <Container className="p-5">
            <h2 className="mb-4">Products</h2>
            <Row>
                <Col md={3}>
                    <Accordian />
                </Col>
                <Col md={9} className="d-flex">
                    <Row>
                        {products.filter(item => item.brand === brand).map(item => (
                            <Col md={4} key={item.id}>
                                <Card style={{ minHeight: '21rem' }} className="mb-4">
                                    <CardBody>
                                        <Image src={item.imgurl} fluid alt={item.name} className="mx-auto mb-2" style={{height:'180px', display:'block'}} />
                                        <p key={item.id} className="body22 txtblack">{item.title}</p>
                                        <Button variant="primary" href={`${item.path}/${item.slug}`} className="w-100">View Detail</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    );
}
export default Products;