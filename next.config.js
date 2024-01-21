/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"www.pxpng.com"
            }
        ]
    }
}

module.exports = nextConfig
