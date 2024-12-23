"use client"
import { Carousel, CarouselItem, Container, Image } from "react-bootstrap";

const HomeBanner = () => {
    return (
        <Container fluid className="p-0">
            <Carousel controls={false}>
                <CarouselItem>
                    <Image src="/img/banner1.png" className="d-block w-100" fluid alt="The Chelsea banner 1" />
                </CarouselItem>
                <CarouselItem>
                    <Image src="/img/banner2.png" className="d-block w-100" fluid alt="The Chelsea banner 1" />
                </CarouselItem>
                <CarouselItem>
                    <Image src="/img/banner3.png" className="d-block w-100" fluid alt="The Chelsea banner 1" />
                </CarouselItem>
            </Carousel>
        </Container>
        
    );
}
export default HomeBanner;