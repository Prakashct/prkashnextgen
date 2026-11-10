import type { Metadata, Viewport } from "next";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FFF8F1",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://prakashnextgen.com"),
  title: {
    default: "Prakash C. | Clinic Digitalisation Strategist & Founder",
    template: "%s | Prakash C.",
  },
  description:
    "Meet Prakash C., Founder of NextGen Tech Hub. Helping healthcare clinics improve online visibility, patient engagement and digital growth through practical solutions.",
  keywords: [
    "Prakash C",
    "Clinic Digitalisation Strategist",
    "NextGen Tech Hub",
    "Healthcare Digital Strategy",
    "Patient Growth",
    "Clinic Growth Consultant",
    "Healthcare Technology Implementation",
    "AI & Automation for Clinics",
  ],
  authors: [{ name: "Prakash C." }],
  creator: "Prakash C.",
  publisher: "NextGen Tech Hub",
  alternates: {
    canonical: "https://prakashnextgen.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prakashnextgen.com/",
    title: "Prakash C. | Clinic Digitalisation Strategist & Founder",
    description:
      "Meet Prakash C., Founder of NextGen Tech Hub. Helping healthcare clinics improve online visibility, patient engagement and digital growth through practical solutions.",
    siteName: "Prakash C. | NextGen Tech Hub",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prakash C. - Clinic Digitalisation Strategist & Founder, NextGen Tech Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakash C. | Clinic Digitalisation Strategist & Founder",
    description:
      "Meet Prakash C., Founder of NextGen Tech Hub. Helping healthcare clinics improve online visibility, patient engagement and digital growth through practical solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <StructuredData />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#FFF8F1] text-[#22201F] font-sans antialiased selection:bg-[#B87320]/20 selection:text-[#22201F]"
      >
        {children}
      </body>
    </html>
  );
}
