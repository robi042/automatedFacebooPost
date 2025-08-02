import { generateTopic } from './title.js'
import { generateArticle } from './article.js'
import { generateImage } from './image.js'
import { createPublicPost } from './facebook.js'

export const generatePost = async () => {
  try {
    const topic = await generateTopic()
    const article = await generateArticle(topic)
    const image = await generateImage({ inputs: topic })

    await createPublicPost(article, image)
    return { message: 'Post generated successfully', topic, article, image }
  } catch (error) {
    throw new Error(error.message || 'Failed to generate post')
  }
}
