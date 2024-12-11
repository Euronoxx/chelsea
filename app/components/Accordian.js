"use client"
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-bootstrap";
import Link from "next/link";
import Brands from '../data/brands.json';

const Accordian = () => {
    return (
        <Accordion defaultActiveKey="0" flush>
            {Brands.map((item, index) => (
                <AccordionItem key={`${index}`} eventKey={`${index}`}>
                    <AccordionHeader>{item.name}</AccordionHeader>
                    <AccordionBody>
                        {item.categories.map((cat, index) => (
                            <Link key={`${index}`} href="#" className="d-block py-1 accordianmenu">{cat}</Link>
                        ))}
                    </AccordionBody>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
export default Accordian;