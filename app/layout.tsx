import type { Metadata } from "next";
import { ContextProvider } from '@/context';
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LenisComponent from "@/components/LenisComponent";

export const metadata: Metadata = {
  title: "SAKEbito",
  description: "Unvail the finest hidden Sake",
};

type LayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <LenisComponent />
          <Header />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;