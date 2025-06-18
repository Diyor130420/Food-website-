import "./globals.css";
import { Inter } from "next/font/google";

import ChatBot from "@/components/chatbot"; // Adjust the import path as needed
import Head from 'next/head';




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Southeast Asian Delicacy",
  description:
    "Serving delicious street food with a modern twist. Experience the vibrant flavors of Southeast Asia with our food truck.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
  <link rel="manifest" href="/manifest.json" />
  <meta name="theme-color" content="#f97316" />
  <link rel="icon" href="/icon-192x192.png" />
  <link rel="apple-touch-icon" href="/icon-192x192.png" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
</Head>
      <body className={inter.className}>
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
