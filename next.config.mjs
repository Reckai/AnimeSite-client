/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'desu.shikimori.one',
            port: '',


          },
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',


        },

            {
                protocol: 'https',
                hostname: 'i.pinimg.com',
                port: '',


            },

            {
                protocol: 'https',
                hostname: 'cdn.discordapp.com',
                port: '',
            }
        ],
      },
};

export default nextConfig;
