"use client"
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Products from "@/app/data/products.json";

const { Container, Row, Col, Image, Button } = require("react-bootstrap");

const AblationProductDetail = ({params}) => {

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
                <h4 className="txtblack mt-5">Description</h4>
                <h2>{product.deschead}</h2>
                <p className="body22">{product.description}</p>
                {Object.values(product.features).map((value, index) => {
                    return (
                        <div key={index}>
                            <h4 className="txtblack pt-3">{value.name}</h4>
                            {Object.values(value.ftrvals).map((value, index) => {
                                return (
                                    <div key={index} className="body22">
                                        <ul>
                                            <li>{value}</li>
                                        </ul>
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
export default AblationProductDetail;