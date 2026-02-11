import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';
import { sendChatMessage } from '../services/gemini';
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const isOffline = !import.meta.env.VITE_API_KEY && !process.env.API_KEY;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: isOffline
        ? 'The Concierge is currently offline. Please contact us directly at hello@aura-supply.com'
        : 'Greetings. I am the AURA Concierge. How may I assist with your procurement requirements today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await sendChatMessage(history, userMsg.text);
      
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText || "I apologize, I am calibrating my response. Could you kindly rephrase?",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I am currently unable to reach the central server. Please try again shortly.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open concierge chat"
        className={`fixed bottom-8 right-8 z-[60] group flex items-center gap-3 pr-2 transition-all duration-500 ${isOpen ? 'translate-y-2 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}
      >
        <span className="bg-brand-900 text-white px-4 py-2 rounded-full text-xs uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Concierge
        </span>
        <div className="w-16 h-16 bg-[#1a1a15] text-white rounded-full shadow-2xl flex items-center justify-center transition-transform duration-300 hover:scale-105 border border-white/10">
           <MessageSquare size={20} strokeWidth={1} />
           <span className="absolute top-0 right-0 w-4 h-4 bg-brand-400 rounded-full animate-pulse border-2 border-white"></span>
        </div>
      </button>

      {/* Main Interface */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-label="AURA Concierge chat"
        className={`fixed bottom-8 right-8 w-[380px] h-[600px] z-[60] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom-right shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] rounded-3xl overflow-hidden border border-white/20 backdrop-blur-3xl bg-white/80 ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="h-20 bg-brand-900/5 backdrop-blur-md flex items-center justify-between px-6 border-b border-brand-900/5">
          <div className="flex items-center gap-3">
             <div className={`w-2 h-2 rounded-full animate-pulse ${isOffline ? 'bg-brand-400' : 'bg-green-500'}`}></div>
             <div>
                <h3 className="font-serif text-brand-900 text-lg leading-none">Concierge</h3>
                <span className="text-[10px] uppercase tracking-widest text-brand-500">{isOffline ? 'Offline' : 'Online'}</span>
             </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-brand-900/10 transition-colors"
          >
            <X size={18} className="text-brand-900" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
           {messages.map((msg, idx) => (
             <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} animate-slide-up`}>
                <div className={`flex items-end gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                   {/* Avatar */}
                   <div className="w-6 h-6 rounded-full border border-brand-900/10 flex items-center justify-center shrink-0 text-brand-900">
                      {msg.role === 'user' ? <User size={12}/> : <Bot size={12}/>}
                   </div>
                   
                   {/* Bubble */}
                   <div 
                     className={`p-4 text-sm leading-relaxed ${
                       msg.role === 'user' 
                         ? 'bg-brand-900 text-white rounded-2xl rounded-tr-sm' 
                         : 'bg-white border border-brand-100 text-brand-800 rounded-2xl rounded-tl-sm shadow-sm'
                     }`}
                   >
                     {msg.text}
                   </div>
                </div>
                <span className="text-[9px] text-brand-300 mt-2 px-10 uppercase tracking-wider">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
             </div>
           ))}
           
           {isLoading && (
             <div className="flex items-center gap-2 text-brand-400 pl-10">
                <span className="w-1 h-1 bg-brand-400 rounded-full animate-bounce"></span>
                <span className="w-1 h-1 bg-brand-400 rounded-full animate-bounce delay-100"></span>
                <span className="w-1 h-1 bg-brand-400 rounded-full animate-bounce delay-200"></span>
             </div>
           )}
           <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-brand-100">
           <div className="relative flex items-center bg-brand-50 rounded-full px-2 border border-brand-200 focus-within:border-brand-900 focus-within:ring-1 focus-within:ring-brand-900/5 transition-all">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={isOffline ? "Chat is currently unavailable" : "Type your inquiry..."}
                disabled={isOffline}
                className="flex-1 bg-transparent border-none focus:ring-0 py-4 pl-4 text-sm text-brand-900 placeholder:text-brand-300 disabled:opacity-50"
              />
              <button 
                onClick={handleSend}
                disabled={isOffline || !inputValue.trim() || isLoading}
                aria-label="Send message"
                className="w-10 h-10 bg-brand-900 rounded-full flex items-center justify-center text-white hover:bg-black disabled:opacity-50 disabled:hover:bg-brand-900 transition-all"
              >
                 <Send size={14} />
              </button>
           </div>
           <div className="text-center mt-2">
              <span className="text-[9px] text-brand-300 uppercase tracking-widest">Powered by AURA Intelligence</span>
           </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;