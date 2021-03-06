const config = {
  origin: process.env.NEXT_PUBLIC_BASE_API_ORIGIN || 'https://sooros.com',
  path: process.env.NEXT_PUBLIC_BASE_API_PATH || '/api/v1',
  notion: {
    baseDatabase:
      process.env.NEXT_PUBLIC_NOTION_BASE_DATABASE || '6d57a24bf5cf4709a27aa52d7217856c',
    baseBlock: process.env.NEXT_PUBLIC_NOTION_BASE_BLOCK || 'cd9c83dd9ea14181854cced99bac68c6',
    secretKey: process.env.NOTION_API_SECRET_KEY || ''
  }
} as const;

export default config;

export const NEXT_IMAGE_DOMAINS = ['www.notion.so', 'notion.so', 's3.us-west-2.amazonaws.com'];
