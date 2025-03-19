/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  images: {
    domains: ["cunex888bucket.s3.ap-southeast-1.amazonaws.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/wikipedia/commons/d/de/Nokota_Horses_cropped.jpg",
        search: "",
      },
    ],
  },
};

export default nextConfig;
