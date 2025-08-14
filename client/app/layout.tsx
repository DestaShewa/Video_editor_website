// This is the complete code for app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import our new components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Video Editor Portfolio",
  description: "Turning Raw Footage into Cinematic Masterpieces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-800 text-white`}>
        <Navbar />
        <main>{children}</main> {/* The content of our pages will go here */}
        <Footer />
      </body>
    </html>
  );
}
