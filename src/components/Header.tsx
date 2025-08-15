import React from 'react';
import { Menu, Brain, MessageCircle } from 'lucide-react';
import { HeaderProps } from '../types';

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, messageCount }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-4">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
          aria-label="Toggle sidebar"
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
        
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-blue-600 rounded-xl shadow-lg">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold gradient-text">AI Answer</h1>
            <p className="text-sm text-gray-500 hidden sm:block">智能问答系统</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {messageCount > 0 && (
          <div className="flex items-center space-x-2 px-3 py-1 bg-gray-100 rounded-full">
            <MessageCircle className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-600">{messageCount} 条对话</span>
          </div>
        )}
        
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600 hidden sm:inline">在线</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
