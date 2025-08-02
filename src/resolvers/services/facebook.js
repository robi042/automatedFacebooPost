import axios from 'axios'
import { configEnv } from '../../config/config.js'

export const createPublicPost = async (article, image) => {
  const endpoint = `https://graph.facebook.com/v23.0/${configEnv.pageid}/photos?access_token=${configEnv.fbAccessToken}`

  const postData = {
    message: article,
    url: image
  }

  await axios.post(endpoint, postData, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return true
}
