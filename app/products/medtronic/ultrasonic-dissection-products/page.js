"use client"
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CategoryPage from "@/app/components/CategoryPage";
import { usePathname } from 'next/navigation';

const UltrasonicDissection = () => {

    const url = usePathname();
    const purls = url.split("/");
    console.log(purls[3]);

    return (
        <>
        <Header />
        <CategoryPage paramUrl={purls[3]} />
        <Footer />
        </>
    );
}
export default UltrasonicDissection;