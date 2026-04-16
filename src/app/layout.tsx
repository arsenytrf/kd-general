import type { Metadata } from "next";
import "./globals.css";
import { getAllBusinesses } from "@/data/businesses/registry";
import { BusinessProvider } from "@/contexts/BusinessContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/layout/LenisProvider";
import StickyPhone from "@/components/layout/StickyPhone";
import DynamicTheme from "@/components/layout/DynamicTheme";
import LeadChat from "@/components/ui/LeadChat";

const data = getAllBusinesses()[0];
const { company } = data;

export const metadata: Metadata = {
  title: `${company.name} | ${company.tagline}`,
  description: company.description,
  openGraph: {
    title: `${company.name} | ${company.tagline}`,
    description: company.description,
    siteName: company.name,
    locale: "en_US",
    type: "website",
    images: data.heroImage
      ? [{ url: data.heroImage, width: 1200, height: 630, alt: `${company.name} — ${company.tagline}` }]
      : [],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | ${company.tagline}`,
    description: company.description,
    images: data.heroImage ? [data.heroImage] : [],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={data.theme.fonts.displayImport} rel="stylesheet" />
        {data.theme.fonts.bodyImport !== data.theme.fonts.displayImport && (
          <link href={data.theme.fonts.bodyImport} rel="stylesheet" />
        )}
      </head>
      <body className="font-body antialiased bg-white text-slate-900 min-h-full flex flex-col noise-overlay">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-sky-500 focus:text-white focus:px-4 focus:py-2 focus:font-body focus:font-semibold focus:rounded-md"
        >
          Skip to main content
        </a>
        <BusinessProvider value={data}>
          <DynamicTheme />
          <LenisProvider>
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </LenisProvider>
          <StickyPhone />
          <LeadChat />
        </BusinessProvider>
      </body>
    </html>
  );
}
