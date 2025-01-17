"use client"
import Products from "@/app/data/products.json";
const { Container, Row, Col, Image, Button } = require("react-bootstrap");

const SingleProduct = ({paramUrl}) => {
    return (
        <Container className="py-5">
            {Products.filter(product => product.slug === paramUrl).map(product => (
                <div key={product.id}>
                <Row className="align-items-center">
                    <Col md={6} sm={12} xs={12} className="text-center">
                        <Image src={`${product.imgurl}`} fluid alt={`${product.title}`} style={{maxHeight:'500px'}} />
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
                <Button variant="outline-success" size="lg" className="my-5" href={product.path}><i className="bi bi-arrow-left"></i> {product.category}</Button>
                </div>
            ))}
        </Container>
    );
}
export default SingleProduct;