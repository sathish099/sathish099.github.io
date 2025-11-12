# Sathish's Portfolio Website

Welcome to my personal portfolio! This site showcases my projects and skills.

**Live at:** https://sathish099.github.io

## Projects Included

### 1. 💬 ChatGPT Clone
A full-featured AI chat interface with OpenAI API integration.
- Real-time responses
- Persistent chat history
- Multiple chat sessions
- Markdown rendering for code blocks

**Location:** `/projects/chatgpt-clone/`
**Tech:** JavaScript • OpenAI API • LocalStorage

### 2. 🍕 Zomoto (Food Delivery UI)
A responsive food delivery platform landing page.
- Restaurant cards with filtering
- Search functionality
- Category browsing
- Mobile-responsive design

**Location:** `/projects/zomoto/`
**Tech:** HTML • CSS • JavaScript

### 3. 📺 YTube (Video Platform UI)
A YouTube-inspired video streaming platform clone.
- Video cards with thumbnails
- Search and category filtering
- Modal video playback
- Responsive design

**Location:** `/projects/youtube/`
**Tech:** HTML • CSS • JavaScript

## Getting Started

### Run Locally

```bash
# Using Python 3
python -m http.server 8000

# Or using Node http-server
npx http-server -p 8000
```

Then open: **http://localhost:8000**

### Project Structure

```
sathish099.github.io/
├── index.html              # Main portfolio page
├── styles.css              # Portfolio styles
├── README.md
├── .gitignore
└── projects/
    ├── chatgpt-clone/      # AI chat interface
    ├── zomoto/             # Food delivery UI
    └── youtube/            # Video platform UI
```

## Technologies Used

- **Frontend:** HTML5 • CSS3 • Vanilla JavaScript
- **APIs:** OpenAI API
- **Hosting:** GitHub Pages
- **Design:** Responsive • Dark theme • Modern UI

## Setup for ChatGPT Clone

The ChatGPT clone requires an OpenAI API key:

1. Create `projects/chatgpt-clone/config.js`
2. Add your API key:
   ```javascript
   const CONFIG = {
     OPENAI_API_KEY: 'sk-your-key-here',
   };
   ```
3. **Important:** Keep `config.js` in `.gitignore`

Get an API key: https://platform.openai.com/api-keys

## Features

✅ Responsive design (mobile, tablet, desktop)
✅ Dark theme with modern aesthetics
✅ Live project demos
✅ Clean, maintainable code
✅ Fast loading times (static files)
✅ Accessibility-friendly
✅ GitHub Pages hosted (free)

## Next Steps

- [ ] Add more original projects
- [ ] Write blog posts/technical articles
- [ ] Add testimonials or recommendations
- [ ] Improve SEO metadata
- [ ] Add analytics tracking
- [ ] Create an API backend for chat persistence

## Connect With Me

- **GitHub:** https://github.com/sathish099
- **LinkedIn:** https://linkedin.com/in/sathish099
- **Email:** contact@sathish099.com

## License

MIT © 2025 Sathish (@sathish099)

---

**Last Updated:** 2025-11-12