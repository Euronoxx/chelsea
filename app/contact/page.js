"use client"
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <>
        <Header />
        <Container fluid className="contactbg">
            <Container className="text-center pt-5">
                <h1 className="mt-5">Contact our sales team</h1>
                <p>If you need our help, have questions about how to use the platform<br />or are experiencing technical difficulties, please do not hesitate to contact us.</p>
            </Container>
        </Container>
        <ContactForm />
        <Footer />
        </>
    );
}
export default Contact;