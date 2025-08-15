import React from 'react';
import { Brain } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative">
        {/* 外圈旋转动画 */}
        <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin"></div>
        
        {/* 内部AI图标 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-primary-600 font-medium">AI正在思考</p>
        <p className="text-gray-500 text-sm mt-1">请稍候...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
