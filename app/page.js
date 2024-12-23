import Header from "./components/Header";
import Banner from './components/HomeBanner';
import Features from "./components/Features";
import TrustefPartner from "./components/trustedPartner";
import AboutUs from "./components/AboutUs";
import BlueCounter from "./components/BlueCounter";
import Footer from "./components/Footer";
import ClientStory from "./components/ClientStory";
import ContactCard from "./components/ContactCard";
import ProudToServe from "./components/ProudToServe";

export default function Home() {
  return (
    <>
    <Header />
    <Banner />
    <Features />
    <TrustefPartner />
    <AboutUs />
    <BlueCounter />
    <ClientStory />
    <ProudToServe />
    <ContactCard />
    <Footer />
    </>
  );
}
