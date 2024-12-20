"use client"
import { Col, Container, Row, Image } from "react-bootstrap";

const ProfileSec = () => {
    return (
        <Container className="py-5">
            <Row>
                <Col md={7}>
                    <h1 className="txtblack">Our Profile</h1>
                    <p className="body22">We Founded in 2016, Chelsea Enterprises  has grown by more than 100% each year. We are wellknown to every private and publichospitals all across North India. We are a young and aggressive company dedicated to becoming a market leader in the implementation of the latest technologies and treatments in the field of surgery.</p>
                </Col>
                <Col md={5}>
                    <Image src="/img/profile-photo.png" fluid alt="Profile Photo" />
                </Col>
            </Row>
        </Container>
    );
}
export default ProfileSec;