"usem client"
import { Col, Container, Image, Row } from "react-bootstrap";

const WorkingStyle = () => {
    return (
        <Container className="py-5 mb-5">
            <h1 className="text-center">Our Working Style</h1>
            <p className="text-center body22 pb-5">We assist many companies for their innovation and scientific excellence. In order to achieve our goals, we are committed to:</p>
            <Row className="gx-5 mb-5">
                <Col md={4} sm={12} xs={4}>
                    <div>
                        <Image src="/img/sticon1.png" className="mb-3" fluid alt="Strong Relationships" />
                        <h4 className="txtblack">Strong Relationships</h4>
                        <p className="body22">Creating an environment where suppliers and clients develop strong working relationships by encouraging the mutual transfer of knowledge.</p>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={4}>
                    <div>
                        <Image src="/img/sticon2.png" className="mb-3" fluid alt="Training Programs" />
                        <h4 className="txtblack">Training Programs</h4>
                        <p className="body22">Facilitating seminars, workshops and personal end user training in Himachal Pradesh.</p>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={4}>
                    <div>
                        <Image src="/img/sticon3.png" className="mb-3" fluid alt="Inclusive Environment" />
                        <h4 className="txtblack">Inclusive Environment</h4>
                        <p className="body22">Creating a warm and family like atmosphere in our company, encouraging initiatives and &quot;out of the box&quot; thinking.</p>
                    </div>
                </Col>
            </Row>
            <Row className="gx-5">
                <Col md={4} sm={12} xs={4}>
                    <div>
                        <Image src="/img/sticon4.png" className="mb-3" fluid alt="Personal Interaction" />
                        <h4 className="txtblack">Personal Interaction</h4>
                        <p className="body22">Continuous personal interaction with our suppliers and our clients.</p>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={4}>
                    <div>
                        <Image src="/img/sticon5.png" className="mb-3" fluid alt="Transparent Relations" />
                        <h4 className="txtblack">Transparent Relations</h4>
                        <p className="body22">Full transparency in our relationship with our suppliers and customers.</p>
                    </div>
                </Col>
                <Col md={4} sm={12} xs={4}>
                    <div>
                        <Image src="/img/sticon6.png" className="mb-3" fluid alt="Clinical Support" />
                        <h4 className="txtblack">Clinical Support</h4>
                        <p className="body22">Supporting clinical research and trials by our clients (Surgeons), in cooperation with suppliers.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default WorkingStyle;