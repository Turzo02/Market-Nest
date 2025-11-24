/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: ["i.ibb.co.com"], // allow this host for next/image
  },
};

export default nextConfig;
