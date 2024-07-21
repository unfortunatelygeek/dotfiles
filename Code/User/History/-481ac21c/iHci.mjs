import createJITI from 'jiti';
const jiti = createJITI(new URL(import.meta.url).pathname);

jiti('./src/env');

/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'khsvweruovpppinstuvf.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/se-hack-screenshots/**',
      },
    ],
  },
};

export default config;