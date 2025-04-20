import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import CareerTimeline from '../components/CareerTimeline';

export default function Work() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <main className="w-full bg-[#f6f0e9] text-black pt-[16px] pb-24 min-h-screen relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
        <Container>
          <h1 className="font-[family-name:var(--font-montserrat)] font-extrabold text-5xl md:text-6xl lg:text-[72px] leading-tight tracking-[-0.04em] text-[#000000] mb-[16px] [text-edge:cap] [leading-trim:both]">
            Work
          </h1>

          <p className="max-w-3xl text-lg mb-[32px] font-[family-name:var(--font-montserrat)] leading-[28px]">
            Lorem ipsum dolor sit amet consectetur. Eu nec turpis condimentum mi facilisis
            et cras ullamcorper. Euismod felis non at integer. Eu nec turpis condimentum mi
            facilisis et cras ullamcorper. Euismod felis non at integer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[46px] gap-x-6 md:gap-x-[93px] max-w-6xl">
            {/* GEICO */}
            <div className="flex flex-col">
              <div className="h-24 flex items-center mb-6">
                <Image
                  src="/geico.svg"
                  alt="GEICO"
                  width={300}
                  height={80}
                  className="object-contain h-full"
                />
              </div>
              <p className="text-base md:text-lg font-[family-name:var(--font-montserrat)] leading-[28px]">
                Lorem ipsum dolor sit amet consectetur. Eu nec turpis condimentum mi facilisis et cras
                ullamcorper. Euismod felis non at integer.
              </p>
            </div>

            {/* US Bank */}
            <div className="flex flex-col">
              <div className="h-24 flex items-center mb-6">
                <Image
                  src="/usbank.svg"
                  alt="US Bank"
                  width={300}
                  height={80}
                  className="object-contain h-full"
                />
              </div>
              <p className="text-base md:text-lg font-[family-name:var(--font-montserrat)] leading-[28px]">
                Lorem ipsum dolor sit amet consectetur. Eu nec turpis condimentum mi facilisis et cras
                ullamcorper. Euismod felis non at integer.
              </p>
            </div>

            {/* Publicis Sapient */}
            <div className="flex flex-col">
              <div className="h-24 flex items-center mb-6">
                <Image
                  src="/publicissapient.svg"
                  alt="Publicis Sapient"
                  width={300}
                  height={80}
                  className="object-contain h-full"
                />
              </div>
              <p className="text-base md:text-lg font-[family-name:var(--font-montserrat)] leading-[28px]">
                Lorem ipsum dolor sit amet consectetur. Eu nec turpis condimentum mi facilisis et cras
                ullamcorper. Euismod felis non at integer.
              </p>
            </div>

            {/* CNN */}
            <div className="flex flex-col">
              <div className="h-24 flex items-center mb-6">
                <Image
                  src="/cnn.svg"
                  alt="CNN"
                  width={300}
                  height={80}
                  className="object-contain h-full"
                />
              </div>
              <p className="text-base md:text-lg font-[family-name:var(--font-montserrat)] leading-[28px]">
                Lorem ipsum dolor sit amet consectetur. Eu nec turpis condimentum mi facilisis et cras
                ullamcorper. Euismod felis non at integer.
              </p>
            </div>
          </div>
        </Container>
      </main>

      <CareerTimeline />
    </div>
  );
}
