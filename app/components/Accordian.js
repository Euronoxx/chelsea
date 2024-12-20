"use client"
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Brands from '../data/brands.json';
import { useState } from "react";

const Accordian = () => {

    const pathname = usePathname();

    const [evKey, setEvKey] = useState(0);

    const menucolor = (cat, pathname) => {
        var catpath = pathname.split("/");
        var category = cat.replace(/\s+/g, '-').toLowerCase();
        if (category === catpath[3]) {
            return 'acmenu';
        } else {
            return false;
        }
    }

    const generatePath = (brand, cat) => {
        var strbrand = brand.replace(/\s+/g, '-').toLowerCase();
        var strcat = cat.replace(/\s+/g, '-').toLowerCase();
        var path = '/products/' + strbrand + '/' + strcat;
        return path;
    }

    return (
        <Accordion defaultActiveKey={`${evKey}`} flush>
            {Brands.map((item, index) => (
                <AccordionItem key={`${index}`} eventKey={`${index}`}>
                    <AccordionHeader>{item.name}</AccordionHeader>
                    <AccordionBody>
                        {item.categories.map((cat, index) => (
                            <Link key={`${index}`} href={generatePath(item.name, cat)} className={`d-block py-1 accordianmenu ${menucolor(cat, pathname)}`}>{cat}</Link>
                        ))}
                    </AccordionBody>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
export default Accordian;