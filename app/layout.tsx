import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rishabh Mishra | Portfolio",
  description: "Full Stack Developer",
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
        <footer>Footer Component</footer>
      </body>
    </html>
  );
}
