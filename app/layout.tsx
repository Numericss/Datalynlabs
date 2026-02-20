import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Datalynlabs | AI Voice Agent Systems",
  description:
    "Datalynlabs builds AI voice agent systems that capture more leads, automate repetitive conversations, and protect revenue at scale.",
  icons: {
    icon: "/brand/datalynlabs-mark.png",
    shortcut: "/brand/datalynlabs-mark.png",
    apple: "/brand/datalynlabs-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
