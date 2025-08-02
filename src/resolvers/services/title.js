import axios from 'axios'
import { configEnv } from '../../config/config.js'

export const generateTopic = async () => {
  try {
    const response = await axios.post(
      configEnv.openRouterApi,
      {
        model: configEnv.model,
        messages: [
          {
            role: 'user',
            content:
              'Share a trending and engaging topic in tech, coding, or digital life. (Only the topic title, no description.)'
          }
        ],
        max_tokens: 50,
        temperature: 0.8
      },
      {
        headers: {
          Authorization: `Bearer ${configEnv.apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': configEnv.siteUrl,
          'X-Title': configEnv.siteName
        }
      }
    )

    const topic = response.data.choices[0].message.content
      .replace(/["।]/g, '')
      .trim()

    return topic
  } catch (error) {
    console.error('Title generation failed:', error.message)
    throw new Error('Failed to generate topic')
  }
}
