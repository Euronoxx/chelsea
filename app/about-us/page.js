"use client"
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutBanner from "../components/AboutBanner";
import AboutWorkingStyle from "../components/AboutWokingStyle";
import ContactCard from "../components/ContactCard";
import CertSection from "../components/Certsec";
import ProfileSec from "../components/ProfileSec";

const AboutUs = () => {
    return (
        <>
        <Header />
        <AboutBanner />
        <AboutWorkingStyle />
        <CertSection />
        <ProfileSec />
        <ContactCard />
        <Footer />
        </>
    );
}
export default AboutUs;