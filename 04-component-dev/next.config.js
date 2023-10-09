/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // styled-component를 Next.js에 도입
    styledComponents: true,
  },
}

module.exports = nextConfig
