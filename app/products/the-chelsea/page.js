"use client"

const { default: Footer } = require("@/app/components/Footer");
const { default: Header } = require("@/app/components/Header");
const { Container } = require("react-bootstrap");

const TheChelsea = () => {
    return (
        <>
        <Header />
        <Container>
            <h1>The Chelsea</h1>
        </Container>
        <Footer />
        </>
    );
}
export default TheChelsea;