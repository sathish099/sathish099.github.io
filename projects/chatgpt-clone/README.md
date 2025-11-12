```markdown
# ChatGPT Clone — AI Chat Interface

A feature-rich ChatGPT-style chat application built with HTML/CSS/JavaScript and the OpenAI API.

Built by: Sathish (@sathish099)

## Features

- ✅ Real-time chat with OpenAI GPT-3.5-turbo
- ✅ Persistent chat history (localStorage)
- ✅ Multiple chat sessions
- ✅ Copy & delete message actions
- ✅ Markdown rendering (code blocks)
- ✅ Responsive mobile-friendly design
- ✅ Dark theme (ChatGPT-style)
- ✅ Quick prompt suggestions
- ✅ Typing indicators

## Setup

### 1. Get an OpenAI API Key
- Go to [OpenAI API](https://platform.openai.com/api-keys)
- Create a new API key
- Copy your key

### 2. Add Your API Key
1. Copy `config.example.js` to `config.js`
2. Replace `sk-your-api-key-here` with your actual API key
3. **Important:** Add `config.js` to `.gitignore` to avoid committing your API key!

### 3. Run Locally
```bash
# Python 3
python -m http.server 8000

# Or use Node http-server
npx http-server -p 8000
```

Then open: http://localhost:8000/projects/chatgpt-clone/

## Project Structure
```
projects/chatgpt-clone/
├── index.html           # Main chat UI
├── styles.css           # Dark theme styles
├── script.js            # Chat logic and API integration
├── config.example.js    # Configuration template
├── config.js            # Your actual config (gitignored)
└── README.md
```

## How It Works

1. **Send Message** → User types a prompt and hits Enter
2. **API Call** → JavaScript sends message history to OpenAI API
3. **Stream Response** → API returns AI response
4. **Display & Save** → Response shown in chat and saved locally
5. **Session History** → All chats stored in browser localStorage

## Cost Considerations

- OpenAI API charges per token (roughly $0.001–0.003 per 1K tokens)
- Each chat uses ~50–200 tokens (varies by response length)
- Monitor your usage at [OpenAI Usage Dashboard](https://platform.openai.com/usage/overview)

## Customization

### Change Model
In `script.js`, line 8:
```javascript
const MODEL = 'gpt-4'; // or 'gpt-3.5-turbo' for faster/cheaper responses
```

### Adjust Temperature
In `script.js`, around line 120:
```javascript
temperature: 0.7, // 0 = deterministic, 1 = creative
```

### Add System Prompt (for role-based chat)
In `script.js`, modify the API call to include:
```javascript
messages: [
  { role: 'system', content: 'You are a helpful coding assistant.' },
  ...conversationHistory.map(msg => ({ role: msg.role, content: msg.content })),
]
```

## Troubleshooting

**"API key not configured"**
- Make sure you created `config.js` with your real API key
- Check for typos in the key

**"API error: 401"**
- Invalid API key; double-check it in config.js

**"API error: 429"**
- Rate limit hit; wait a minute before trying again

## Security Notes

- ⚠️ **Never commit your API key to Git**
- Use `config.js` (in .gitignore) for local development
- For production, use environment variables or a backend proxy

## Next Steps / Enhancements

- Add user authentication (Firebase, Auth0)
- Add backend to proxy API calls (for security)
- Support multiple AI models (Claude, Hugging Face)
- Add voice input/output
- Export chat as PDF or Markdown
- Share chat links (requires backend)
- Implement rate limiting per user

## License

MIT — Feel free to modify and use for your portfolio.

---

**Live Demo:** [View Project](https://sathish099.github.io/projects/chatgpt-clone/)
**Source:** [GitHub](https://github.com/sathish099/sathish099.github.io/tree/main/projects/chatgpt-clone)
```