"use client"
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
    return (
        <>
        <Header />
        <Container className="p-5">
            <h1>About Us</h1>
        </Container>
        <Footer />
        </>
    );
}
export default AboutUs;