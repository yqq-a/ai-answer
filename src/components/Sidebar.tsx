import React from 'react';
import { X, Plus, Trash2, Settings, Info, Github } from 'lucide-react';
import { SidebarProps } from '../types';

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onNewChat, onClearHistory }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-80 bg-white border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="font-semibold text-gray-900">对话管理</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-gray-100 lg:hidden"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Actions */}
        <div className="p-4 space-y-3">
          <button
            onClick={() => {
              onNewChat();
              onClose();
            }}
            className="w-full flex items-center space-x-3 px-4 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>新建对话</span>
          </button>
          
          <button
            onClick={() => {
              onClearHistory();
              onClose();
            }}
            className="w-full flex items-center space-x-3 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            <Trash2 className="w-5 h-5" />
            <span>清空历史</span>
          </button>
        </div>

        {/* Features */}
        <div className="flex-1 p-4">
          <h3 className="text-sm font-medium text-gray-500 mb-3">功能特性</h3>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-1">智能对话</h4>
              <p className="text-sm text-gray-600">基于先进AI模型的自然语言处理</p>
            </div>
            
            <div className="p-3 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-1">多领域支持</h4>
              <p className="text-sm text-gray-600">支持技术、创意、教育等多个领域</p>
            </div>
            
            <div className="p-3 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-1">实时响应</h4>
              <p className="text-sm text-gray-600">快速准确的问答体验</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 space-y-2">
          <button className="w-full flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Settings className="w-4 h-4" />
            <span className="text-sm">设置</span>
          </button>
          
          <button className="w-full flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Info className="w-4 h-4" />
            <span className="text-sm">关于</span>
          </button>
          
          <a 
            href="https://github.com/yqq-a/ai-answer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm">GitHub</span>
          </a>
          
          <div className="pt-2 text-center">
            <p className="text-xs text-gray-500">AI Answer v1.0.0</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
