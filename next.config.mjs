/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/oralia-portfolio/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/oralia-portfolio' : '',
    images: {
      unoptimized: true
    },
  };
  
  export default nextConfig;
