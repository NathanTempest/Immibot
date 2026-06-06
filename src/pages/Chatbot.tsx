import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello. I am ImmiBot, your specialized immigration consultant. How can I assist you today?", isUser: false }
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
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { text: data.response, isUser: false }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "Connection error. Please ensure the backend server is operational.", isUser: false }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-wrapper">
      <img 
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
        className="page-bg-image" 
        alt="Tech Background"
      />

      {/* AI Pulse Background Animation */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 1
        }}
      ></motion.div>

      <header style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', position: 'relative', zIndex: 10 }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.25rem', textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>ImmiBot <span>Consultant</span></h1>
          <p style={{ color: 'var(--text-dim)' }}>Specialized AI for US Immigration Law.</p>
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ marginLeft: 'auto', opacity: 0.5 }}
        >
          <Sparkles size={32} color="var(--primary)" />
        </motion.div>
      </header>

      <div className="chat-box" style={{ position: 'relative', zIndex: 10 }}>
        <div className="chat-messages">
          <AnimatePresence>
            {messages.map((msg, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: msg.isUser ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`msg ${msg.isUser ? 'user' : 'bot'}`}
              >
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </motion.div>
            ))}
          </AnimatePresence>
          {isLoading && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="msg bot"
            >
              Processing...
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat-footer">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about F1, OPT, H1B..."
          />
          <button className="btn" onClick={handleSend} disabled={isLoading}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
