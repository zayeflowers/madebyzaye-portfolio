'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// Define the gtag function type
declare global {
  interface Window {
    gtag: (command: string, id: string, config?: Record<string, unknown>) => void;
    dataLayer: unknown[];
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    // Track page views
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-4CDCRPZ80D', {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-4CDCRPZ80D"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4CDCRPZ80D');
          `,
        }}
      />
    </>
  );
}
