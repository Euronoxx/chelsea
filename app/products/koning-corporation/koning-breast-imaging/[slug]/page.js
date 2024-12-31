"use client"
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SingleProduct from "@/app/components/SingleProduct";

const Koning = ({params}) => {

    return (
        <>
        <Header />
        <SingleProduct paramUrl={params.slug} />
        <Footer />
        </>
    );
}
export default Koning;