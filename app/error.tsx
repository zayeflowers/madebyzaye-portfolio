'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Error({
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
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />

      <main className="flex-grow gutter pt-[88px] pb-[96px] max-sm:pt-[40px] max-sm:pb-[48px] animate-rise">
        <div className="eyebrow">
          <span className="rule" />
          Something broke
        </div>

        <h1 className="display t-hero mt-[22px] max-sm:mt-[16px]">
          Well, that didn&apos;t work<span className="red-period">.</span>
        </h1>

        <p className="lede mt-[36px] max-sm:mt-[20px]">
          An unexpected error occurred. Try again — and if it keeps happening, let me
          know.
        </p>

        <div className="flex gap-3 max-sm:gap-[10px] mt-[38px] max-sm:mt-[24px] max-sm:flex-col">
          <button className="pill pill--dark" onClick={() => reset()}>
            Try again
          </button>
          <Link className="pill pill--ghost" href="/">
            Go to homepage
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
