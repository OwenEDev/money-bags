/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DYNAMO_ACCESS_KEY: process.env.DYNAMO_ACCESS_KEY,
        DYNAMO_SECRET_ACCESS_KEY: process.env.DYNAMO_SECRET_ACCESS_KEY,
        DYNAMO_REGION: process.env.DYNAMO_REGION,
        DYNAMO_TABLE_NAME: process.env.DYNAMO_TABLE_NAME
    }
};

export default nextConfig;
