"use client"
import Link from "next/link";
import { Container, Col, Row, Image } from "react-bootstrap";

const Footer = () => {

    const curyear = new Date().getFullYear();

    return (
        <Container fluid className="footerbg mt-5">
            <Container className="mt-5">
                <Row>
                    <Col md={3} sm={12} xs={12}>
                        <Image src="/img/chelsealogo-white.png" alt="Chelsea Logo" />
                    </Col>
                    <Col md={3} sm={12} xs={12}>
                        <div className="footermenu">
                            <h4>MENU</h4>
                            <ul>
                                <li><Link href={"#"}>About</Link></li>
                                <li><Link href={"#"}>Services</Link></li>
                                <li><Link href={"#"}>Blog</Link></li>
                                <li><Link href={"#"}>Contact</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3} sm={12} xs={12}>
                        <div className="footermenu">
                            <h4>BRANDS</h4>
                            <ul>
                                <li><Link href={"#"}>Teleflex</Link></li>
                                <li><Link href={"#"}>Medtronics</Link></li>
                                <li><Link href={"#"}>Lohmann &amp; Rauscher</Link></li>
                                <li><Link href={"#"}>See More</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3} sm={12} xs={12}>
                        <div className="footermenu">
                            <h4>SOCIAL</h4>
                            <span style={{color:'#00AFEF',fontSize:'28px',marginRight:'16px'}}><i class="bi bi-facebook"></i></span>
                            <span style={{color:'#00AFEF',fontSize:'28px',marginRight:'16px'}}><i class="bi bi-twitter"></i></span>
                            <span style={{color:'#00AFEF',fontSize:'28px'}}><i class="bi bi-instagram"></i></span>
                        </div>
                    </Col>
                </Row>
                <hr style={{color:'#898989'}} />
            </Container>
            <Container className="py-5 d-flex">
                <p>&copy; {curyear} Chelsea Enterprises. All Rights Reserved.</p><p className="ms-auto" style={{marginRight:'15px'}}><Link href={"#"}>Terms of use</Link></p><p><Link href={"#"}>Privacy Policy</Link></p>
            </Container>
        </Container>
    );
}
export default Footer;