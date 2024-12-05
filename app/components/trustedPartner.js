"use client"
import { Container, Image, Button } from "react-bootstrap";

const TrustefPartner = () => {
    return (
        <Container fluid className="trustedpartnerbg my-5">
            <Container className="py-5 text-center">
                <h1 className="py-5">Your Trusted Partner in Healthcare</h1>
                <div className="d-flex gap-4 justify-content-center flex-md-row flex-column">
                    <Image src="/img/koning.png" fluid alt="Koning" />
                    <Image src="/img/medtronic.png" fluid alt="Medtronic" />
                    <Image src="/img/lohmann.png" fluid alt="Lohmann" />
                    <Image src="/img/teleflex.png" fluid alt="Teleflex" />
                    <Image src="/img/chelsea.png" fluid alt="Chelsea" />
                    <Image src="/img/fisher.png" fluid alt="Fisher" />
                </div>
                <Button variant="success" size="lg" href="#" className="my-5">View Equipments</Button>
            </Container>
        </Container>
    );
}
export default TrustefPartner;