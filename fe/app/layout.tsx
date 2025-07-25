import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClientLayout from "./ClientLayout";
import { Toaster } from "sonner";
import PageTransition from "@/components/PageTransition";

import "./global.css";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jejak Nusantara",
  description: "A Journey Through the Archipelago",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <ClientLayout>
          <Toaster position="top-center" />
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
