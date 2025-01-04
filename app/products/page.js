"use client"
import { Button, Card, CardBody, CardFooter, Col, Container, Image, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import products from '../data/products.json';
import Accordian from "../components/Accordian";
import ProductBanner from "../components/ProductBanner";
import { useState } from "react";

const ITEMS_PER_PAGE = 9;

const Products = () => {

    const [category, setCategory] = useState('Ablation Products');
    const [brand, setBrand] = useState('Medtronic');

    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentData = products.slice(startIndex, endIndex);

    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
        <Header />
        <ProductBanner />
        <Container className="py-5">
            <h2 className="mb-4">Products</h2>
            <Row>
                <Col md={3}>
                    <Accordian />
                </Col>
                <Col md={9} className="grid">
                    <Row>
                        {currentData.map(item => (
                            <Col md={4} key={item.id}>
                                <Card style={{ minHeight: '21rem' }} className="mb-4">
                                    <CardBody>
                                        <Image src={item.imgurl} fluid alt={item.name} className="mx-auto mb-2" style={{height:'180px', display:'block'}} />
                                        <CardFooter>
                                            <p key={item.id} className="body22 txtblack">{item.title}</p>
                                            <Button variant="primary" href={`${item.path}/${item.slug}`} className="w-100">View Detail</Button>
                                        </CardFooter>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
            <div className="text-center">
                <Button variant="primary" size="sm" onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</Button>
                <span> Page {currentPage} of {totalPages} </span>
                <Button variant="primary" size="sm" onClick={handleNextPage} disabled={currentPage === totalPages}>Next</Button>
            </div>
        </Container>
        <Footer />
        </>
    );
}
export default Products;