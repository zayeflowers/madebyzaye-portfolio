'use client';

import { useEffect } from 'react';
import { Geist, Geist_Mono, Montserrat, Lexend_Exa } from "next/font/google";
import "./globals.css";

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

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${lexendExa.variable} antialiased`}>
        <div className="min-h-screen flex items-center justify-center bg-[#f6f0e9] p-4">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-montserrat)]">Something went wrong!</h2>
            <p className="mb-6 font-[family-name:var(--font-montserrat)]">
              An unexpected error has occurred. Please try again later.
            </p>
            <button
              onClick={() => reset()}
              className="bg-[#CC0101] text-white px-4 py-2 rounded font-[family-name:var(--font-montserrat)] hover:bg-[#a50000] transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
