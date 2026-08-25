import type { Metadata } from "next";
import HomeContent from "../components/HomeContent";

export const metadata: Metadata = {
  title: "Made By Zaye — Preview",
  robots: { index: false, follow: false, nocache: true },
};

export default function HomePreview() {
  return <HomeContent />;
}
