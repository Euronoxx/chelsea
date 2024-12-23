"use client"
import { Container, Nav, Navbar, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../globals.css';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import Link from 'next/link';

const Header = () => {

    const path = usePathname();

    return (
        <>
        <Container fluid className="topbar d-none d-md-block">
            <Container className='d-flex py-3'>
                <div>
                    <i className="bi bi-telephone"></i> +91-86288-00023 <i className="bi bi-envelope" style={{marginLeft:'12px'}}></i> contact@the-chelsea.com
                </div>
                <div className="d-flex ms-auto" style={{gap:'22px'}}>
                    <Link href={"https://www.instagram.com/chelseaenterprises/"} target='_blank'><i className="bi bi-instagram"></i></Link>
                    {/* <i className="bi bi-twitter"></i> */}
                    <Link href={'https://www.facebook.com/ChelseaEnterprises'} target='_blank'><i className="bi bi-facebook"></i></Link>
                </div>
            </Container>
        </Container>
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <Image src={"/img/chelsea-logo.png"} width={177} height={50} alt='Chelsea Logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/" className={`${path === '/' ? 'acmenu' : ''}`}>Home</Nav.Link>
                        <Nav.Link href="/about-us" className={`${path === '/about-us' ? 'acmenu' : ''}`}>About Us</Nav.Link>
                        <Nav.Link href="/products" className={`${path === '/products' ? 'acmenu' : ''}`}>Products</Nav.Link>
                        <Nav.Link href="/contact" className={`${path === '/contact' ? 'acmenu' : ''}`}>Contact</Nav.Link>
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