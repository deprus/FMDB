import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TourneyDB",
  description: "Database for leagues, tournaments etc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen bg-yellow-50">
            <Header />
            <Toaster />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
