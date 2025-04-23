import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Lexend_Exa } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const lexendExa = Lexend_Exa({
  variable: "--font-lexend-exa",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Made By Zaye",
  description: "Lead Product Designer using AI to build tools that feel",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://madebyzaye.com',
    title: 'Made By Zaye',
    description: 'Lead Product Designer using AI to build tools that feel',
    siteName: 'Made By Zaye',
    images: [
      {
        url: 'https://madebyzaye.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Made By Zaye',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Made By Zaye',
    description: 'Lead Product Designer using AI to build tools that feel',
    images: ['https://madebyzaye.com/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${lexendExa.variable} antialiased`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
