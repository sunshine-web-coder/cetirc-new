/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/terms-of-service",
        destination: "/terms-of-service/terms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
