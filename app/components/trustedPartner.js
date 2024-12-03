"use client"
import { Container, Image, Button } from "react-bootstrap";

const TrustefPartner = () => {
    return (
        <Container fluid className="trustedpartnerbg my-5">
            <Container className="py-5 text-center">
                <h1 className="py-5">Your Trusted Partner in Healthcare</h1>
                <Image src="/img/brand-group.png" fluid alt="Brands" />
                <Button variant="success" size="lg" className="my-5">View Equipments</Button>
            </Container>
        </Container>
    );
}
export default TrustefPartner;