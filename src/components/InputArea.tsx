import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Mic, Square } from 'lucide-react';
import { InputAreaProps } from '../types';

const InputArea: React.FC<InputAreaProps> = ({ onSendMessage, isLoading }) => {
  const [inputValue, setInputValue] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 自动调整文本框高度
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleVoiceRecord = () => {
    // 这里可以实现语音录制功能
    setIsRecording(!isRecording);
    // 模拟录制状态
    if (!isRecording) {
      setTimeout(() => setIsRecording(false), 3000);
    }
  };

  return (
    <div className="relative">
      {/* Quick Actions */}
      <div className="flex items-center space-x-2 mb-3">
        <button className="flex items-center space-x-2 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-600 transition-colors">
          <span>💡</span>
          <span>提示</span>
        </button>
        <button className="flex items-center space-x-2 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-600 transition-colors">
          <span>📝</span>
          <span>写作</span>
        </button>
        <button className="flex items-center space-x-2 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-600 transition-colors">
          <span>💻</span>
          <span>编程</span>
        </button>
        <button className="flex items-center space-x-2 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-600 transition-colors">
          <span>🎨</span>
          <span>创意</span>
        </button>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-end space-x-3 p-4 bg-white border border-gray-300 rounded-2xl focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500/20 transition-all">
          {/* Attachment Button */}
          <button
            type="button"
            className="flex-shrink-0 p-2 text-gray-500 hover:text-primary-500 transition-colors"
            title="附件"
          >
            <Paperclip className="w-5 h-5" />
          </button>

          {/* Text Input */}
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="输入你的问题... (Shift + Enter 换行)"
            className="flex-1 resize-none outline-none bg-transparent text-gray-900 placeholder-gray-500 min-h-[24px] max-h-32"
            rows={1}
            disabled={isLoading}
          />

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Voice Record Button */}
            <button
              type="button"
              onClick={handleVoiceRecord}
              className={`p-2 rounded-lg transition-colors ${
                isRecording 
                  ? 'bg-red-500 text-white' 
                  : 'text-gray-500 hover:text-primary-500'
              }`}
              title={isRecording ? '停止录音' : '语音输入'}
            >
              {isRecording ? (
                <Square className="w-5 h-5" />
              ) : (
                <Mic className="w-5 h-5" />
              )}
            </button>

            {/* Send Button */}
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className={`p-2 rounded-lg transition-all ${
                inputValue.trim() && !isLoading
                  ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl transform hover:scale-105' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
              title="发送消息"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Recording Indicator */}
        {isRecording && (
          <div className="absolute -top-12 left-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-sm">正在录音...</span>
          </div>
        )}
      </form>

      {/* Tips */}
      <div className="mt-3 text-center">
        <p className="text-xs text-gray-500">
          AI会尽力提供准确信息，但请验证重要内容的准确性
        </p>
      </div>
    </div>
  );
};

export default InputArea;
