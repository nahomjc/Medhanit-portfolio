import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothCursor from "./components/SmoothCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medhanit Birhane - Course Manager & Visual Content Creator",
  description:
    "Professional portfolio of Medhanit Birhane, Course Manager and Senior Visual Content Creator at Muyalogy Digital Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased cursor-none`}
      >
        <SmoothCursor
          size={20}
          color="#f87171"
          trailLength={8}
          speed={0.15}
          showTrail={true}
          magnetic={false}
        />
        {children}
      </body>
    </html>
  );
}
