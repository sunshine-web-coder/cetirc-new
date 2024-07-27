/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/legal",
        destination: "/legal/terms-of-use",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
