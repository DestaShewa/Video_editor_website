// This is the complete, updated code for next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        // We make the pathname more generic to allow both /vi/ and /vi_webp/
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
