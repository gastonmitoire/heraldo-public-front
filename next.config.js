/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cms-el-heraldo.s3.us-east-1.amazonaws.com",
      "cms-el-heraldo-prod.s3.us-east-1.amazonaws.com",
      "cms-fatun.s3.us-east-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
