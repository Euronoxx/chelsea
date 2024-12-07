"use client"
import { Container, Nav, Navbar, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../globals.css';
import Image from 'next/image';

const Header = () => {
    return (
        <>
        <Container fluid className="py-3 topbar d-none d-md-block">
            <Container className='position-relative'>
                <i className="bi bi-telephone"></i> +91-86288-00023 <i className="bi bi-envelope" style={{marginLeft:'12px'}}></i> contact@the-chelsea.com
                <div className="position-absolute top-0 end-0 d-flex flex-row" style={{gap:'22px'}}>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-facebook"></i>
                </div>
            </Container>
        </Container>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">
                    <Image src={"/img/chelsea-logo.png"} width={177} height={50} alt='Chelsea Logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about-us">About Us</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                    {/* <Form className="d-flex">
                        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button variant="outline-primary">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </>
    );
};

export default Header;