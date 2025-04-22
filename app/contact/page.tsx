"use client";

import React from 'react';
import Container from '../components/Container';
import PageHeading from '../components/PageHeading';
import PageLayout from '../components/PageLayout';

export default function Contact() {
  return (
    <PageLayout navbarKey="navbar-contact">
      <main className="w-full bg-[#f6f0e9] text-black pt-[16px] pb-0 min-h-screen relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
        <Container key="container-contact">
          <PageHeading title="Contact" />

          <p className="max-w-3xl text-lg mb-[48px] font-[family-name:var(--font-montserrat)] leading-[28px]">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mb-40 md:mb-0">
            <div className="bg-white rounded-[14px] p-8 shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50">
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-6">Get in Touch</h2>

              <div className="space-y-6 font-[family-name:var(--font-montserrat)] leading-[28px]">
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-[#CC0101]">hello@madebyzaye.com</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Based in</h3>
                  <p>Washington D.C.</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Social</h3>
                  <div className="flex space-x-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#CC0101] transition-colors">
                      LinkedIn
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#CC0101] transition-colors">
                      Twitter
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#CC0101] transition-colors">
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[14px] p-8 shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50">
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-6">Work Inquiries</h2>

              <p className="font-[family-name:var(--font-montserrat)] leading-[28px] mb-6">
                Interested in working together? Let&apos;s discuss your project. Please provide some details about what you&apos;re looking for.
              </p>

              <a
                href="mailto:hello@madebyzaye.com?subject=Work%20Inquiry"
                className="inline-flex items-center justify-center box-border w-full md:w-[300px] h-[68px] bg-[#CC0101] border border-[#FFFFFF] border-opacity-50 rounded-[60px] hover:bg-[#a50000] transition-colors"
              >
                <span className="font-[family-name:var(--font-montserrat)] font-bold text-[24px] leading-[29px] tracking-[-0.02em] text-white">
                  Send an Email
                </span>
              </a>
            </div>
          </div>
        </Container>
      </main>
    </PageLayout>
  );
}
