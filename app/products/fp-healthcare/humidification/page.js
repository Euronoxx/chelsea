"use client"
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CategoryPage from "@/app/components/CategoryPage";
import { usePathname } from 'next/navigation';

const FphHumidification = () => {

    const url = usePathname();
    const purls = url.split("/");

    return (
        <>
        <Header />
        <CategoryPage paramUrl={purls[3]} />
        <Footer />
        </>
    );
}
export default FphHumidification;