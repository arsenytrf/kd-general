import type { Metadata } from "next";
import { getBusinessData, getAllSlugs } from "@/data/businesses/registry";
import { BusinessProvider } from "@/contexts/BusinessContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/layout/LenisProvider";
import StickyPhone from "@/components/layout/StickyPhone";
import BackToTop from "@/components/layout/BackToTop";
import DynamicTheme from "@/components/layout/DynamicTheme";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getBusinessData(slug);
  if (!data) return { title: "Not Found" };

  const { company } = data;
  const title = `${company.name} | ${company.tagline}`;
  const description = company.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: company.name,
      locale: "en_US",
      type: "website",
      images: data.heroImage
        ? [{ url: data.heroImage, width: 1200, height: 630, alt: `${company.name} — ${company.tagline}` }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: data.heroImage ? [data.heroImage] : [],
    },
    robots: { index: true, follow: true },
  };
}

export default async function BusinessLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getBusinessData(slug);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-slate-500">Business not found.</p>
      </div>
    );
  }

  return (
    <BusinessProvider value={data}>
      {/* Dynamic Google Fonts for this business */}
      <link
        href={data.theme.fonts.displayImport}
        rel="stylesheet"
      />
      {data.theme.fonts.bodyImport !== data.theme.fonts.displayImport && (
        <link
          href={data.theme.fonts.bodyImport}
          rel="stylesheet"
        />
      )}

      {/* Inject business-specific CSS variables */}
      <DynamicTheme />

      <LenisProvider>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </LenisProvider>

      <StickyPhone />
      <BackToTop />
    </BusinessProvider>
  );
}
