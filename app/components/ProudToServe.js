"use client"
import { Container, Image } from "react-bootstrap";

const ProudToServe = () => {
    return (
        <Container fluid className="py-5 proudtoserve mb-5">
            <Container className="mb-5">
                <h2 className="txtblack text-center">Proud to Serve Renowned Institutions</h2>
                <div className="d-flex gap-4 justify-content-center my-5">
                    <Image src="/img/insticon1.png" fluid alt="Icon" />
                    <Image src="/img/insticon2.png" fluid alt="Icon" />
                    <Image src="/img/insticon3.png" fluid alt="Icon" />
                    <Image src="/img/insticon4.png" fluid alt="Icon" />
                    <Image src="/img/insticon5.png" fluid alt="Icon" />
                    <Image src="/img/insticon6.png" fluid alt="Icon" />
                </div>
            </Container>
        </Container>
    );
}
export default ProudToServe;