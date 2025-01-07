/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Creates a static export
  basePath: process.env.NODE_ENV === 'production' ? '/antechnologies/' : '', // Replace with your repo name
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig 