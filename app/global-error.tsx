'use client';

import { useEffect } from 'react';
import { Archivo, Archivo_Black, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: ["400"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500"],
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
      <body
        className={`${archivo.variable} ${archivoBlack.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col justify-center gutter py-[76px]">
          <div className="eyebrow">
            <span className="rule" />
            Something broke
          </div>

          <h1 className="display t-lg mt-[22px]">
            Well, that didn&apos;t work<span className="red-period">.</span>
          </h1>

          <p className="lede mt-[22px]">
            An unexpected error has occurred. Please try again.
          </p>

          <div className="mt-[30px]">
            <button className="pill pill--dark" onClick={() => reset()}>
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
