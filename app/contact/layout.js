export const metadata = {
    title: "The Chelsea | Empowering Healthcare with Innovation & Excellenceo",
    description: "Contact THe Chelsea sales team",
    metadataBase: new URL("https://the-chelsea.com"),
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "The Chelsea | Empowering Healthcare with Innovation & Excellenceo",
        description: "Contact THe Chelsea sales team",
        url: "/contact",
        images: "/img/chelsea-logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}