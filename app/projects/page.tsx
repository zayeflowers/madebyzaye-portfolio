import React from 'react';
import Container from '../components/Container';
import Link from 'next/link';
import Image from 'next/image';
import PageHeading from '../components/PageHeading';
import PageLayout from '../components/PageLayout';

export default function Projects() {
  return (
    <PageLayout navbarKey="navbar-projects">
      <main className="w-full bg-[#f6f0e9] text-black pt-[16px] pb-0 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
        <Container>
          <PageHeading title="Projects" />

          <p className="max-w-3xl text-lg mb-[48px] font-[family-name:var(--font-montserrat)] leading-[28px]">
            Here are some of my featured case studies from my work with major brands.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[16px] w-full">
            <Link href="/projects/geico">
              <div className="bg-white rounded-[16px] h-[223px] w-full shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden relative">
                <div className="relative h-full w-full">
                  <Image
                    src="/geico.webp"
                    alt="GEICO - Injury Intake"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white font-[family-name:var(--font-montserrat)] font-medium text-xl">GEICO - Injury Intake</h3>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/projects/us-bank">
              <div className="bg-white rounded-[16px] h-[223px] w-full shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden relative">
                <div className="relative h-full w-full">
                  <Image
                    src="/casestudy1.jpg"
                    alt="US Bank Case Study"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white font-[family-name:var(--font-montserrat)] font-medium text-xl">US Bank Case Study</h3>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/projects/cnn">
              <div className="bg-white rounded-[16px] h-[223px] w-full shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden relative">
                <div className="relative h-full w-full">
                  <Image
                    src="/casestudy2.jpg"
                    alt="CNN Case Study"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white font-[family-name:var(--font-montserrat)] font-medium text-xl">CNN Case Study</h3>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/projects/ihg">
              <div className="bg-white rounded-[16px] h-[223px] w-full shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden relative">
                <div className="relative h-full w-full">
                  <Image
                    src="/casestudy3.jpg"
                    alt="IHG Case Study"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white font-[family-name:var(--font-montserrat)] font-medium text-xl">IHG Case Study</h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </main>
    </PageLayout>
  );
}
