"use client";

import React from 'react';
import Container from './Container';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  label?: string;
  dateColor?: string;
  dateBgColor?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  label,
  dateColor = "text-emerald-600",
  dateBgColor = "bg-emerald-100"
}) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      {label && (
        <div className="font-medium text-2xl text-red-500 mb-1 sm:mb-0">{label}</div>
      )}
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-white/30 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-red-500 after:border-4 after:box-content after:border-black after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time className={`sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-[family-name:var(--font-montserrat)] font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 ${dateColor} ${dateBgColor} rounded-full`}>
          {date}
        </time>
        <div className="text-xl font-[family-name:var(--font-montserrat)] font-bold text-white">{title}</div>
      </div>
      <div className="text-white/80 font-[family-name:var(--font-montserrat)]">{description}</div>
    </div>
  );
};

const CareerTimeline: React.FC = () => {
  return (
    <section className="w-full bg-black text-white pt-[56px] pb-[56px]">
      <Container>
        <h2 className="font-[family-name:var(--font-montserrat)] font-extrabold text-4xl md:text-5xl lg:text-[48px] leading-tight tracking-[-0.04em] mb-[32px] [text-edge:cap] [leading-trim:both]">
          Career Timeline
        </h2>

        <p className="max-w-3xl mb-[32px] font-[family-name:var(--font-montserrat)]">
          My professional journey spans design leadership roles across various industries, with a focus on creating impactful digital experiences that solve real problems for users.
        </p>

        <div className="w-full max-w-3xl -my-6">
          <TimelineItem
            date="2025"
            title="Founder & CEO at Daily Uplift"
            description="Leading the development of an AI-powered emotional wellness app rooted in empathy, mood, and motivation."
            dateColor="text-red-600"
            dateBgColor="bg-red-100"
          />

          <TimelineItem
            date="2024"
            title="UX/Product Lead at GEICO"
            description="Created intuitive interfaces for insurance products and services, improving customer satisfaction and conversion rates."
            dateColor="text-green-600"
            dateBgColor="bg-green-100"
          />

          <TimelineItem
            date="2019-2021"
            title="Senior Product Designer at CNN"
            description="Led design initiatives for CNN&apos;s digital platforms, focusing on user experience and engagement metrics."
            dateColor="text-blue-600"
            dateBgColor="bg-blue-100"
          />

          <TimelineItem
            date="2019-2023"
            title="Product Design Mentor at Thinkful"
            description="Mentored 10+ aspiring designers through portfolio reviews, mock interviews, and job search prep."
            dateColor="text-purple-600"
            dateBgColor="bg-purple-100"
          />

          <TimelineItem
            date="2018-2019"
            title="Senior UX Designer at IHG"
            description="Collaborated on digital transformation projects for major brands, focusing on responsive design and accessibility."
            dateColor="text-yellow-600"
            dateBgColor="bg-yellow-100"
          />
        </div>
      </Container>
    </section>
  );
};

export default CareerTimeline;
