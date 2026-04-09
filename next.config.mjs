import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.js",
  swDest: "public/sw.js",
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === 'development', // Useful to disable in dev if desired, but let's enable it
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {}
};

export default withSerwist(nextConfig);
