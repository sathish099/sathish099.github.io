let conversationHistory = [];
let chatSessions = [];
let currentSessionId = null;
const API_KEY = typeof CONFIG !== 'undefined' ? CONFIG.OPENAI_API_KEY : null;
const MODEL = 'gpt-3.5-turbo';
const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

const messagesContainer = document.getElementById('messagesContainer');
const userInput = document.getElementById('userInput');
const chatForm = document.getElementById('chatForm');
const sendBtn = document.getElementById('sendBtn');
const newChatBtn = document.getElementById('newChatBtn');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const chatHistoryNav = document.getElementById('chatHistory');
const apiStatus = document.getElementById('apiStatus');

function loadSessions() {
  const saved = localStorage.getItem('chatSessions');
  chatSessions = saved ? JSON.parse(saved) : [];
  renderChatHistory();
}

function saveSessions() {
  localStorage.setItem('chatSessions', JSON.stringify(chatSessions));
}

function saveSession(id, history) {
  localStorage.setItem(`chat_${id}`, JSON.stringify(history));
}

function loadSession(id) {
  const saved = localStorage.getItem(`chat_${id}`);
  return saved ? JSON.parse(saved) : [];
}

function createNewChat() {
  const sessionId = Date.now().toString();
  currentSessionId = sessionId;
  conversationHistory = [];
  chatSessions.unshift({ id: sessionId, title: 'New Chat', timestamp: new Date().toISOString() });
  saveSessions();
  messagesContainer.innerHTML = `
    <div class="welcome-screen">
      <h2>Start a conversation</h2>
      <p>Ask me anything. I'll help you think through it.</p>
      <div class="quick-prompts">
        <button class="prompt-btn" data-prompt="Explain quantum computing in simple terms">Quantum Computing 101</button>
        <button class="prompt-btn" data-prompt="Write a Python function to check if a number is prime">Prime Number Checker</button>
        <button class="prompt-btn" data-prompt="How do I build a REST API?">Building REST APIs</button>
        <button class="prompt-btn" data-prompt="Tips for better time management">Time Management Tips</button>
      </div>
    </div>
  `;
  renderChatHistory();
  attachPromptHandlers();
}

function loadChat(sessionId) {
  currentSessionId = sessionId;
  conversationHistory = loadSession(sessionId);
  messagesContainer.innerHTML = '';
  conversationHistory.forEach(msg => {
    const div = createMessageElement(msg.role, msg.content);
    messagesContainer.appendChild(div);
  });
  renderChatHistory();
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function renderChatHistory() {
  chatHistoryNav.innerHTML = '';
  if (chatSessions.length === 0) {
    chatHistoryNav.innerHTML = '<p class="empty-state">No chat history yet</p>';
    return;
  }
  chatSessions.forEach(session => {
    const btn = document.createElement('button');
    btn.className = `chat-item ${session.id === currentSessionId ? 'active' : ''}`;
    btn.textContent = session.title;
    btn.addEventListener('click', () => loadChat(session.id));
    chatHistoryNav.appendChild(btn);
  });
}

function createMessageElement(role, content) {
  const div = document.createElement('div');
  div.className = `message ${role}`;
  const isUser = role === 'user';
  const avatar = isUser ? '👤' : '🤖';
  div.innerHTML = `
    <div class="message-avatar">${avatar}</div>
    <div class="message-content">${escapeHtml(content)}</div>
  `;
  return div;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

async function sendMessage(message) {
  if (!API_KEY) {
    showNotification('⚠️ API key