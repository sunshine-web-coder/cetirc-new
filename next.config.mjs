/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/privacy-policy",
        destination: "/privacy-policy/terms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
