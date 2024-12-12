"use client"
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Products from "@/app/data/products.json";
const { Container, Row, Col, Image, Button } = require("react-bootstrap");

const ProductDetail = ({params}) => {

    const paramUrl = params.slug;

    return (
        <>
        <Header />
        <Container className="py-5">
            {Products.filter(product => product.slug === paramUrl).map(product => (
                <div key={product.id}>
                <Row>
                    <Col md={6} sm={12} xs={12}>
                        <Image src={`${product.imgurl}`} fluid alt={`${product.title}`} />
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                        <h1 className="txtblue">{product.title}</h1>
                        <p className="body22">{product.shortdesc}</p>
                        <Button variant="primary" size="lg" className="mt-3">Contact Sales</Button>
                    </Col>
                </Row>
                <h4>Description</h4>
                <h2>{product.deschead}</h2>
                <p className="body22">{product.description}</p>
                {Object.values(product.features).map((value, index) => {
                    return (
                        <div key={index}>
                            {Object.values(value).map((value, index) => {
                                return (
                                    <div key={index} className="body22">
                                        {value}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
                </div>
            ))}
        </Container>
        <Footer />
        </>
    );
}
export default ProductDetail;