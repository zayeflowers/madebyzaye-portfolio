import dynamic from 'next/dynamic';

// Dynamically import the Footer component with no SSR
const Footer = dynamic(() => import('./Footer'), { ssr: true });

export default function FooterWrapper() {
  return <Footer />;
}
