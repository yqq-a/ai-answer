import React, { useState, useRef, useEffect } from 'react';
import ChatInterface from './components/ChatInterface';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import WelcomeScreen from './components/WelcomeScreen';
import LoadingSpinner from './components/LoadingSpinner';
import { MessageType } from './types';
import { simulateAIResponse } from './utils/aiService';

function App() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSessionId, setCurrentSessionId] = useState<string>('default');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: MessageType = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Simulate AI response
      const aiResponse = await simulateAIResponse(content);
      
      const aiMessage: MessageType = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      const errorMessage: MessageType = {
        id: (Date.now() + 1).toString(),
        content: '抱歉，我遇到了一些问题。请稍后再试。',
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setCurrentSessionId(Date.now().toString());
  };

  const handleClearHistory = () => {
    setMessages([]);
  };

  const showWelcome = messages.length === 0 && !isLoading;

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNewChat={handleNewChat}
        onClearHistory={handleClearHistory}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header 
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          messageCount={messages.length}
        />
        
        <main className="flex-1 overflow-hidden">
          {showWelcome ? (
            <WelcomeScreen onSendMessage={handleSendMessage} />
          ) : (
            <ChatInterface
              messages={messages}
              onSendMessage={handleSendMessage}
              isLoading={isLoading}
              messagesEndRef={messagesEndRef}
            />
          )}
        </main>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50 pointer-events-none">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
}

export default App;
