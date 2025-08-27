// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eduma.thimpress.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "hakimisolutions.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
