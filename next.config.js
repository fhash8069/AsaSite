/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/asa-site',
  assetPrefix: '/asa-site',
  // Image optimization
  images: {
    domains: ['asa-site-theta.vercel.app'],
    formats: ['image/webp'],
  },
  
  // Enable compression
  compress: true,
  
  // Remove problematic headers that conflict with Vercel
  poweredByHeader: false,
  
  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 