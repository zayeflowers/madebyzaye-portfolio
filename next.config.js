/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        // Daily Uplift was renamed to Before Us, then moved from AI projects
        // to work. Points straight at the final URL rather than chaining.
        source: '/ai-projects/daily-uplift',
        destination: '/work/before-us',
        permanent: true,
      },
      {
        // Before Us moved from AI projects to work.
        source: '/ai-projects/before-us',
        destination: '/work/before-us',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
