import React, { useState, useRef, useEffect } from 'react';

interface Message {
  text: string;
  isUser: boolean;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm ImmiBot. How can I assist you with your immigration queries today?", isUser: false }
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
      setMessages(prev => [...prev, { text: "Sorry, I'm having trouble connecting to the server. Please try again later.", isUser: false }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-page">
      <div className="card">
        <h1>Chat with ImmiBot</h1>
        <p>Our AI assistant is ready to help with F1, OPT, H1B, EAD, and Visa Transfers.</p>
      </div>

      <div className="chat-window">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.isUser ? 'user-message' : 'bot-message'}`}>
              <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', margin: 0 }}>
                {msg.text}
              </pre>
            </div>
          ))}
          {isLoading && <div className="message bot-message">Typing...</div>}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat-input">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about your visa status..."
          />
          <button className="btn" onClick={handleSend} disabled={isLoading}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
