/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    disableStaticImages: false,
    domains: ['localhost'],
  },
  env: {
    STRAPI_API_URL: 'http://localhost:1337',
  },
}
