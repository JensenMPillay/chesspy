/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:5000/api/:path*"
            : "/api/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.chesscomfiles.com",
        port: "",
        pathname: "/uploads/v1/user/**",
      },
      {
        protocol: "https",
        hostname: "flagsapi.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
