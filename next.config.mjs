/** @type {import('next').NextConfig} */
const nextConfig = {
  //   experimental: {
  //     staleTimes: {
  //       dynamic: 30,
  //       static: 180,
  //     },
  //   },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
