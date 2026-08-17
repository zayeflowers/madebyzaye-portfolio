import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />

      <main className="flex-grow gutter pt-[88px] pb-[96px] max-sm:pt-[40px] max-sm:pb-[48px] animate-rise">
        <div className="eyebrow">
          <span className="rule" />
          Error 404
        </div>

        <h1 className="display t-hero mt-[22px] max-sm:mt-[16px]">
          This page doesn&apos;t exist<span className="red-period">.</span>
        </h1>

        <p className="lede mt-[36px] max-sm:mt-[20px]">
          The link may be broken, or the page may have moved. Here&apos;s the way back.
        </p>

        <div className="flex gap-3 max-sm:gap-[10px] mt-[38px] max-sm:mt-[24px] max-sm:flex-col">
          <Link className="pill pill--dark" href="/">
            Go to homepage
          </Link>
          <Link className="pill pill--ghost" href="/work">
            See the work
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
