import React from 'react';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Link from 'next/link';
import PageHeading from '../components/PageHeading';

export default function Projects() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <main className="w-full bg-[#f6f0e9] text-black pt-[16px] pb-24 min-h-screen relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
        <Container>
          <PageHeading title="Projects" />

          <p className="max-w-3xl text-lg mb-[48px] font-[family-name:var(--font-montserrat)] leading-[28px]">
            Here are some of my featured case studies from my work with major brands.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[16px] w-full">
            <Link href="/projects/us-bank">
              <div className="bg-[#1a365d] rounded-[16px] h-[223px] w-full shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden relative flex items-end justify-start p-6">
                <h3 className="text-white font-[family-name:var(--font-montserrat)] font-medium text-xl">US Bank Case Study</h3>
              </div>
            </Link>

            <Link href="/projects/cnn">
              <div className="bg-[#cc0000] rounded-[16px] h-[223px] w-full shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden relative flex items-end justify-start p-6">
                <h3 className="text-white font-[family-name:var(--font-montserrat)] font-medium text-xl">CNN Case Study</h3>
              </div>
            </Link>

            <Link href="/projects/ihg">
              <div className="bg-[#003366] rounded-[16px] h-[223px] w-full shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden relative flex items-end justify-start p-6">
                <h3 className="text-white font-[family-name:var(--font-montserrat)] font-medium text-xl">IHG Case Study</h3>
              </div>
            </Link>
          </div>
        </Container>
      </main>
    </div>
  );
}
