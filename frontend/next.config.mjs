/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: {
      allowedOrigins: ["127.0.0.1:49215"],
    },
  },
};

export default nextConfig;
