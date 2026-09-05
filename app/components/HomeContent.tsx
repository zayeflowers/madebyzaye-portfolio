"use client";

import Hero from "./Hero";
import BlackBar from "./BlackBar";
import SelectedWork from "./SelectedWork";
import FeaturedCaseStudy from "./FeaturedCaseStudy";
import ExperienceList from "./ExperienceList";
import PageLayout from "./PageLayout";

/**
 * The real homepage. Lives here so it can be rendered from the private
 * /preview route while `/` shows the work-in-progress holding page.
 */
export default function HomeContent() {
  return (
    <PageLayout navbarKey="navbar-home-page">
      <Hero key="hero-home-page" />
      <BlackBar />
      <SelectedWork key="selected-work-home-page" />
      <FeaturedCaseStudy key="featured-case-study-home-page" />
      <ExperienceList key="experience-home-page" showLink />
    </PageLayout>
  );
}
