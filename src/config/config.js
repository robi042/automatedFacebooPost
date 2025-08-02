import dotenv from 'dotenv'

dotenv.config()

export const configEnv = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  fbAccessToken: process.env.FB_PAGE_ACCESS_TOKEN,
  pageid: process.env.FB_PAGE_ID,
  apiKey: process.env.OPENROUTER_API_KEY,
  huggingfaceApiKey: process.env.HUGGINGFACE_API_KEY,
  imgbbApiKey: process.env.IMGBB_API_KEY,
  model: 'cognitivecomputations/dolphin-mistral-24b-venice-edition:free',
  openRouterApi: process.env.OPEN_ROUTER_API,
  siteUrl: process.env.SITE_URL,
  siteName: process.env.SITE_NAME
}
