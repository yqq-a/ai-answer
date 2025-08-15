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
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
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

  const handleVoiceToggle = () => {
    setIsRecording(!isRecording);
    // 这里可以添加语音识别功能
  };

  const handleFileUpload = () => {
    // 这里可以添加文件上传功能
    console.log('文件上传功能待实现');
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-end space-x-3 p-4 bg-white border border-gray-300 rounded-2xl shadow-sm focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-200 transition-all">
        {/* 附件按钮 */}
        <button
          type="button"
          onClick={handleFileUpload}
          className="flex-shrink-0 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          title="上传文件"
        >
          <Paperclip className="w-5 h-5" />
        </button>

        {/* 输入框 */}
        <div className="flex-1">
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={isLoading ? "AI正在回复中..." : "输入消息... (按Enter发送，Shift+Enter换行)"}
            disabled={isLoading}
            className="w-full resize-none border-0 outline-none placeholder-gray-400 text-gray-900 bg-transparent"
            style={{ minHeight: '24px', maxHeight: '120px' }}
            rows={1}
          />
        </div>

        {/* 语音按钮 */}
        <button
          type="button"
          onClick={handleVoiceToggle}
          className={`flex-shrink-0 p-2 rounded-lg transition-colors ${
            isRecording 
              ? 'text-red-600 bg-red-50 hover:bg-red-100' 
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
          }`}
          title={isRecording ? "停止录音" : "语音输入"}
        >
          {isRecording ? (
            <Square className="w-5 h-5 fill-current" />
          ) : (
            <Mic className="w-5 h-5" />
          )}
        </button>

        {/* 发送按钮 */}
        <button
          type="submit"
          disabled={!inputValue.trim() || isLoading}
          className={`flex-shrink-0 p-2 rounded-lg transition-all ${
            inputValue.trim() && !isLoading
              ? 'text-white bg-primary-500 hover:bg-primary-600 shadow-lg hover:shadow-xl transform hover:scale-105'
              : 'text-gray-400 bg-gray-100 cursor-not-allowed'
          }`}
          title="发送消息"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>

      {/* 输入提示 */}
      <div className="flex items-center justify-between mt-2 px-2">
        <div className="flex items-center space-x-4 text-xs text-gray-500">
          <span>支持 Markdown 格式</span>
          <span>•</span>
          <span>最大 2000 字符</span>
        </div>
        
        <div className="text-xs text-gray-500">
          {inputValue.length}/2000
        </div>
      </div>

      {/* 快捷键提示 */}
      {inputValue && (
        <div className="absolute -top-8 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-75">
          Enter 发送 • Shift+Enter 换行
        </div>
      )}
    </form>
  );
};

export default InputArea;
