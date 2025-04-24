"use client";

import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import FeaturedProjects from "./components/FeaturedProjects";
import ToolsAndTechnologies from "./components/ToolsAndTechnologies";
import PageLayout from "./components/PageLayout";

export default function Home() {
  return (
    <PageLayout navbarKey="navbar-home-page">
      <Hero key="hero-home-page" />
      <WhatIDo key="what-i-do-home-page" />
      <FeaturedProjects key="featured-projects-home-page" />
      <ToolsAndTechnologies key="tools-technologies-home-page" />
    </PageLayout>
  );
}
