import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface Message {
  text: string;
  isUser: boolean;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Welcome to ImmiBot. I am your specialized immigration assistant. How may I assist you with your F1, OPT, H1B, or Visa Transfer inquiries today?", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { text: data.response, isUser: false }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "System Error: Unable to establish a secure connection to the legal database. Please try again later.", isUser: false }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>ImmiBot <span>Legal Assistant</span></h1>
        <p style={{ color: 'var(--text-light)' }}>Secure, AI-powered immigration guidance.</p>
      </div>

      <div className="chat-window">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.isUser ? 'user-message' : 'bot-message'}`}>
              {msg.isUser ? (
                msg.text
              ) : (
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              )}
            </div>
          ))}
          {isLoading && <div className="message bot-message">Consulting database...</div>}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat-input-area">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your immigration inquiry here..."
          />
          <button className="btn" onClick={handleSend} disabled={isLoading}>Send Inquiry</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
