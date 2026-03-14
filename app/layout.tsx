import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ihzha Nauval Baihaqqi | Backend Developer",
  description:
    "Portfolio of Ihzha Nauval Baihaqqi, a scalability-focused Backend Developer specializing in Go (Golang) and Node.js. Experienced in building robust RESTful APIs and optimized databases.",
  icons: {
    icon: "/images/favicon.svg",
    shortcut: "/images/favicon.svg",
    apple: "/images/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${spaceGrotesk.className} antialiased`}
      >
        <Header />
        <main className="bg-white ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
