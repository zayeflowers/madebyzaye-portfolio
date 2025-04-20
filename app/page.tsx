"use client";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FeaturedProjects from "./components/FeaturedProjects";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar key="navbar-home-page" />
      <Hero key="hero-home-page" />
      <FeaturedProjects key="featured-projects-home-page" />
    </div>
  );
}
