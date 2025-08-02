import axios from 'axios'
import { configEnv } from '../../config/config.js'

export const generateArticle = async (topic) => {
  try {
    const response = await axios.post(
      configEnv.openRouterApi,
      {
        model: configEnv.model,
        messages: [
          {
            role: 'user',
            content: `"${topic}" সম্পর্কে একটি বিস্তারিত বাংলা আর্টিকেল লিখুন (৩০০-৫০০ শব্দ)। গঠন:
          ১. আকর্ষণীয় শিরোনাম
          ২. ভূমিকা (সমস্যা বা প্রাসঙ্গিকতা)
          ৩. মূল বিষয়বস্তু (উপ-শিরোনাম সহ)
          ৪. ব্যবহারিক প্রয়োগ/উদাহরণ
          ৫. উপসংহার
          ৬. পাঠকদের জন্য প্রশ্ন`
          }
        ],
        max_tokens: 1500,
        temperature: 0.7
      },
      {
        headers: {
          Authorization: `Bearer ${configEnv.apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': configEnv.siteUrl,
          'X-Title': configEnv.siteName
        },
        timeout: 60000
      }
    )

    const article = response.data.choices[0]?.message?.content
    return article
  } catch (error) {
    throw new Error(error.message || 'Failed to generate article')
  }
}
