/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    domains: ['asa-site-theta.vercel.app'],
    formats: ['image/webp'],
  },
  
  // Enable compression
  compress: true,
  
  // Remove problematic headers that conflict with Vercel
  poweredByHeader: false,
}

module.exports = nextConfig 