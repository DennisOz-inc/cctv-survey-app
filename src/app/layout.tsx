import type { Metadata } from "next";
import { Rajdhani, IBM_Plex_Mono, Work_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"]
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"]
});

const SITE_URL = "https://www.pantauannusantara.com";
const SITE_NAME = "PT. Pantauan Nusantara Teknologi";
const SITE_TITLE = "PT. Pantauan Nusantara - Instalasi CCTV, Jaringan & Web Design Profesional Surabaya";
const SITE_DESCRIPTION = "Solusi lengkap keamanan & teknologi: Instalasi CCTV profesional, infrastruktur jaringan, dan jasa pembuatan website untuk bisnis Anda. Survey lokasi gratis. Hubungi 0851-0047-6464.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": SITE_NAME,
  "description": "Professional CCTV installation, network infrastructure, and website development services in Surabaya, Indonesia.",
  "url": SITE_URL,
  "telephone": "+62-851-0047-6464",
  "email": "sales@pantauannusantara.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Surabaya",
    "addressRegion": "Jawa Timur",
    "addressCountry": "ID",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Layanan",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Instalasi CCTV Profesional" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Infrastruktur Jaringan" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${rajdhani.variable} ${ibmPlexMono.variable} ${workSans.variable} antialiased min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
