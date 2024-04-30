/** @type {import('next').NextConfig} */
const nextConfig = {
  // Just to ensure that React is always on strict mode
  reactStrictMode: true,
  images: {
    // We disable image optimisation during static export builds
    // unoptimized: ENABLE_STATIC_EXPORT,
    // We allow SVGs to be used as images
    dangerouslyAllowSVG: true,
    // We add it to the remote pattern for the static images we use from Google Cloud Storage
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
