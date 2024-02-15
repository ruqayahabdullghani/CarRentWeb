import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, NavBar } from "@/Component";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className='relative'>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
