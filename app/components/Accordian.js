"use client"
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-bootstrap";
import Link from "next/link";
import Brands from '../data/brands.json';

const Accordian = () => {

    function generatePath (brand, cat) {
        var strbrand = brand.replace(/\s+/g, '-').toLowerCase();
        var strcat = cat.replace(/\s+/g, '-').toLowerCase();
        var path = '/products/' + strbrand + '/' + strcat;
        return path;
    }

    return (
        <Accordion defaultActiveKey="0" flush>
            {Brands.map((item, index) => (
                <AccordionItem key={`${index}`} eventKey={`${index}`}>
                    <AccordionHeader>{item.name}</AccordionHeader>
                    <AccordionBody>
                        {item.categories.map((cat, index) => (
                            <Link key={`${index}`} href={generatePath(item.name, cat)} className="d-block py-1 accordianmenu">{cat}</Link>
                        ))}
                    </AccordionBody>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
export default Accordian;