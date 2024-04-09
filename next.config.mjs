/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/**',
          },
        ],
      }
};

export default nextConfig;
// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'assets.example.com',
//           port: '',
//           pathname: '/account123/**',
//         },
//       ],
//     },
//   }