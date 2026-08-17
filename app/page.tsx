"use client";

import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import SelectedWork from "./components/SelectedWork";
import FeaturedCaseStudy from "./components/FeaturedCaseStudy";
import ExperienceList from "./components/ExperienceList";
import PageLayout from "./components/PageLayout";

export default function Home() {
  return (
    <PageLayout navbarKey="navbar-home-page">
      <Hero key="hero-home-page" />
      <Marquee key="marquee-home-page" />
      <SelectedWork key="selected-work-home-page" />
      <FeaturedCaseStudy key="featured-case-study-home-page" />
      <ExperienceList key="experience-home-page" showLink />
    </PageLayout>
  );
}
