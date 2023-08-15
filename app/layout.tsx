import "./globals.css";
import type { Metadata } from "next";
import Header from "../pages/header";
import { inter, rubik } from "./styles/font";
import Footer from "@/pages/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://rishmi5h.vercel.com"),
  title: "rishmi5h | home",
  openGraph: {
    title: "Rishabh Mishra | Home",
    description: "Portfolio website of Rishabh Mishra",
  },
  description: "Portfolio website of Rishabh Mishra",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
