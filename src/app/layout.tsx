import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/navbar";


export const metadata: Metadata = {
  title: "Maël Garnier",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
