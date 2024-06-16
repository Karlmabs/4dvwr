/** @type {import('next').NextConfig} */

const nextConfig = {
  redirects: () => {
    return [
      {
        source: "/",
        destination: "/en/home",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
