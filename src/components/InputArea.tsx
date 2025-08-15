import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, Paperclip, Smile } from 'lucide-react';
import { InputAreaProps } from '../types';

const InputArea: React.FC<InputAreaProps> = ({ onSendMessage, isLoading }) => {
  const [inputValue, setInputValue] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 自动调整文本区域高度
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
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        // Shift + Enter 换行
        return;
      } else {
        // Enter 发送
        e.preventDefault();
        handleSubmit(e);
      }
    }
  };

  const handleVoiceRecord = () => {
    setIsRecording(!isRecording);
    // 这里可以实现语音识别功能
    console.log('语音录制:', !isRecording);
  };

  const handleFileUpload = () => {
    // 这里可以实现文件上传功能
    console.log('文件上传');
  };

  const handleEmojiPicker = () => {
    // 这里可以实现emoji选择器
    console.log('表情选择器');
  };

  const quickSuggestions = [
    '解释一下什么是机器学习',
    '写一个Python函数',
    '帮我分析这个问题',
    '创作一个短故事'
  ];

  const [showSuggestions, setShowSuggestions] = useState(false);

  return (
    <div className="space-y-3">
      {/* Quick Suggestions */}
      {!inputValue && !isLoading && (
        <div className="flex flex-wrap gap-2">
          {quickSuggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => setInputValue(suggestion)}
              className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-end space-x-3 bg-white border border-gray-300 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-primary-500 focus-within:border-primary-500">
          {/* Action Buttons Left */}
          <div className="flex items-center space-x-1 p-3 pb-3">
            <button
              type="button"
              onClick={handleFileUpload}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              title="上传文件"
            >
              <Paperclip className="w-5 h-5" />
            </button>
            
            <button
              type="button"
              onClick={handleEmojiPicker}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              title="选择表情"
            >
              <Smile className="w-5 h-5" />
            </button>
          </div>

          {/* Text Input */}
          <div className="flex-1 min-h-[44px] flex items-end">
            <textarea
              ref={textareaRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isLoading ? "AI正在回复中..." : "输入你的问题... (Enter发送，Shift+Enter换行)"}
              disabled={isLoading}
              className="w-full px-0 py-3 border-none outline-none resize-none placeholder-gray-400 bg-transparent"
              style={{ maxHeight: '120px' }}
              rows={1}
            />
          </div>

          {/* Action Buttons Right */}
          <div className="flex items-center space-x-1 p-3">
            <button
              type="button"
              onClick={handleVoiceRecord}
              className={`p-2 rounded-lg transition-colors ${
                isRecording 
                  ? 'text-red-500 bg-red-50 hover:bg-red-100' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
              title={isRecording ? "停止录音" : "语音输入"}
            >
              <Mic className={`w-5 h-5 ${isRecording ? 'animate-pulse' : ''}`} />
            </button>

            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className={`p-2 rounded-lg transition-all ${
                inputValue.trim() && !isLoading
                  ? 'text-white bg-primary-500 hover:bg-primary-600 shadow-md hover:shadow-lg transform hover:scale-105'
                  : 'text-gray-400 bg-gray-100 cursor-not-allowed'
              }`}
              title="发送消息"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Character Count & Tips */}
        <div className="flex items-center justify-between mt-2 px-1">
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <span>字符数: {inputValue.length}</span>
            {inputValue.length > 1000 && (
              <span className="text-amber-600">建议控制在1000字符以内</span>
            )}
          </div>
          
          <div className="text-xs text-gray-500">
            支持 Markdown 格式
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputArea;
