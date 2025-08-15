import React from 'react';
import { Brain } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8">
      <div className="relative">
        {/* 主要的旋转圆环 */}
        <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin"></div>
        
        {/* 中心的大脑图标 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Brain className="w-6 h-6 text-primary-500 animate-pulse" />
        </div>
      </div>
      
      {/* 加载文本 */}
      <div className="text-center">
        <p className="text-gray-600 font-medium">AI 正在思考中</p>
        <p className="text-sm text-gray-500 mt-1">请稍候...</p>
      </div>
      
      {/* 动态点点点 */}
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
