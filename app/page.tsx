import Link from "next/link";

/**
 * Work-in-progress holding page.
 *
 * The real homepage still exists and renders at /preview — see
 * app/components/HomeContent.tsx. Swap this file back to render
 * <HomeContent /> when the site goes live.
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <main className="flex-grow gutter flex flex-col justify-center pt-[88px] pb-[96px] max-sm:pt-[40px] max-sm:pb-[48px] animate-rise">
        <div className="eyebrow">
          <span className="rule" />
          Made By Zaye
        </div>

        <h1 className="display t-hero mt-[22px] max-sm:mt-[16px]">
          Work in progress<span className="red-period">.</span>
        </h1>

        <p className="lede mt-[36px] max-sm:mt-[20px]">
          I&apos;m rebuilding this site. Check back soon — or reach out in the
          meantime.
        </p>

        <div className="flex gap-3 max-sm:gap-[10px] mt-[38px] max-sm:mt-[24px] max-sm:flex-col">
          <Link className="pill pill--dark" href="/contact">
            Get in touch
          </Link>
        </div>
      </main>
    </div>
  );
}
