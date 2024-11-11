module.exports = {

  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "solvative-for-real-bucket.s3.us-east-1.amazonaws.com",
        pathname: "/**", // Allow all paths
      },
    ],
  },
};
