/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'upload.wikimedia.org',
          port: '',
          pathname: '/wikipedia/commons/d/de/Nokota_Horses_cropped.jpg',
          search: '',
        },
      ],
    },
  };
  
  export default nextConfig;