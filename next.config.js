/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/onwards-and-upwards",
        destination: "https://vercel.com/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
