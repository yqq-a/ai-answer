import React, { useState } from 'react';
import { Brain, Sparkles, MessageSquare, Zap } from 'lucide-react';
import { WelcomeScreenProps } from '../types';
import { getQuickPrompts } from '../utils/aiService';

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');
  const quickPrompts = getQuickPrompts();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  const handleQuickPrompt = (content: string) => {
    onSendMessage(content);
  };

  return (
    <div className="flex-1 flex items-center justify-center p-6 overflow-y-auto">
      <div className="max-w-4xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-blue-600 rounded-3xl shadow-2xl flex items-center justify-center floating-animation">
                <Brain className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            欢迎使用 AI Answer
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            一个强大的AI智能问答系统，为你提供专业、准确、实时的问题解答
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">智能对话</h3>
              <p className="text-gray-600 text-sm">支持自然语言交互，理解上下文语境</p>
            </div>
            
            <div className="card text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">快速响应</h3>
              <p className="text-gray-600 text-sm">毫秒级响应，提供流畅的对话体验</p>
            </div>
            
            <div className="card text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">多领域专家</h3>
              <p className="text-gray-600 text-sm">涵盖技术、创意、教育等多个领域</p>
            </div>
          </div>
        </div>

        {/* Quick Prompts */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            快速开始
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt.id}
                onClick={() => handleQuickPrompt(prompt.content)}
                className="p-4 bg-white border border-gray-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all text-left group"
              >
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">{prompt.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      {prompt.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {prompt.content}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Input Section */}
        <div className="glass-effect rounded-2xl p-6 shadow-xl">
          <form onSubmit={handleSubmit} className="flex space-x-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="输入你的问题，开始与AI对话..."
              className="input-field flex-1"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="button-primary whitespace-nowrap"
            >
              开始对话
            </button>
          </form>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              提示：你可以问我任何问题，比如技术问题、创意想法、学习建议等
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
