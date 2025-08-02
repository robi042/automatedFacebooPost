# 🤖 Automated Facebook Post Generator

This Node.js application automatically generates a Facebook post daily, combining AI-generated topics, articles, and images, then publishes them to a Facebook Page. It also supports manual API triggering.

---

## 📁 Project Features

- Generate content using OpenRouter (ChatGPT/GPT-based)
- Generate relevant images using HuggingFace models
- Upload images to ImgBB
- Post content to a Facebook Page
- Daily scheduled posting at **10 PM Dhaka Time**
- Manual trigger via API (`/generate-post`)

---

## 🚀 Getting Started

Follow these steps to clone, set up, and run the project.

### ✅ 1. Clone the Repository
git clone https://github.com/robi042/automatedFacebookPost.git
cd automatedFacebookPost

✅ 2. Install Dependencies
npm install

✅ 3. Set Up API Keys
You’ll need the following keys:

🔹 Facebook Access Token & Page ID
Visit: https://developers.facebook.com/tools/explorer/

Generate a Page Access Token with:

pages_manage_posts

pages_read_engagement

Get your Page ID from the same page or your Facebook Page settings

🔹 OpenRouter API Key
Sign up and get the API key from:
https://openrouter.ai/docs/api-reference/authentication

🔹 Hugging Face API Key
Get from:
https://huggingface.co/docs/inference-providers/en/index

🔹 ImgBB API Key (for image uploads)
Register and get API key at:
https://api.imgbb.com/

✅ 4. Configure Environment
Create a .env file in the root directory:

env
NODE_ENV = production

PORT = 3000

FB_PAGE_ACCESS_TOKEN =
FB_PAGE_ID = 
OPENROUTER_API_KEY =
HUGGINGFACE_API_KEY =
HUGGINGFACE_API_KEY =
IMGBB_API_KEY =
OPEN_ROUTER_API = https://openrouter.ai/api/v1/chat/completions
SITE_URL = https://yourwebsite.com
SITE_NAME = YourWebsiteName

✅ 5. Start the Server
npm start
You should see console output like:


############################ AUTOMATED FACEBOOK POST SERVER BOOT ############################
Eudika are listening on port 3000
Background worker started. Waiting for scheduled jobs...

✅ 6. Test It Manually
You can manually trigger post generation by visiting:
http://localhost:3000/generate-post
Or use tools like Postman or curl.

🕒 Automated Posting Schedule
The project uses node-cron to post daily at:

10:00 PM Asia/Dhaka Time

This schedule is defined in the backend and will run automatically once the server is live.

🧰 Technologies Used
Node.js & Express

OpenRouter (AI content generation)

HuggingFace (AI image generation)

ImgBB (image hosting)

Facebook Graph API (posting)

node-cron (scheduling)

🧪 Development Tips
If the cron job isn’t posting, manually hit the /generate-post endpoint to debug.

Always double-check if your Page Access Token hasn’t expired.

Use logging (console or Discord/webhook) for better error tracking in production.

📄 License
This project is licensed under the MIT License.

👨‍💻 Author
Developed by Md. Rabiul Hasan