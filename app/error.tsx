'use client';

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';
import PageHeading from './components/PageHeading';

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
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="w-full bg-[#f6f0e9] text-black pt-[16px] pb-24 min-h-screen relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
        <Container>
          <div className="flex flex-col items-center justify-center py-16">
            <PageHeading title="Something went wrong!" className="text-center" />
            <p className="text-lg font-[family-name:var(--font-montserrat)] leading-[28px] mb-8 text-center max-w-2xl">
              An unexpected error has occurred. Please try again.
            </p>
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center box-border w-[200px] h-[60px] bg-[#CC0101] border border-[#FFFFFF] border-opacity-50 rounded-[60px] hover:bg-[#a50000] transition-colors"
            >
              <span className="font-[family-name:var(--font-montserrat)] font-bold text-[20px] leading-[24px] tracking-[-0.02em] text-white">
                Try again
              </span>
            </button>
          </div>
        </Container>
      </main>
    </div>
  );
}
