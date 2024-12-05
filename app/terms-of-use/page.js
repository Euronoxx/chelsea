"use client"
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TermsOfUse = () => {
    return (
        <>
        <Header />
        <Container className="p-5">
            <h1>Terms of use</h1>
        </Container>
        <Footer />
        </>
    );
}
export default TermsOfUse;