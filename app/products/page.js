"use client"
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Products = () => {
    return (
        <>
        <Header />
        <Container className="p-5">
            <h1>Products</h1>
        </Container>
        <Footer />
        </>
    );
}
export default Products;