// app/layout.tsx
import "./globals.css";
import "./article.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "UniHelp",
  description: "South African education help portal",

  // ✅ AdSense verification meta tag:
  // <meta name="google-adsense-account" content="ca-pub-5779161570598228">
  other: {
    "google-adsense-account": "ca-pub-5779161570598228",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}