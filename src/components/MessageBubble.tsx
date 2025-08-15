import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { User, Brain, Copy, ThumbsUp, ThumbsDown } from 'lucide-react';
import { MessageBubbleProps } from '../types';

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isLatest = false }) => {
  const isUser = message.sender === 'user';
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-CN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
      // 这里可以添加一个提示消息
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} fade-in`}>
      <div className={`flex space-x-3 max-w-3xl ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
        {/* Avatar */}
        <div className={`
          flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
          ${isUser 
            ? 'bg-primary-500 text-white' 
            : 'bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300'
          }
        `}>
          {isUser ? (
            <User className="w-5 h-5" />
          ) : (
            <Brain className="w-5 h-5 text-gray-700" />
          )}
        </div>

        {/* Message Content */}
        <div className="flex-1">
          <div className={`message-bubble ${isUser ? 'user-message' : 'ai-message'}`}>
            {isUser ? (
              <p className="whitespace-pre-wrap">{message.content}</p>
            ) : (
              <div className="markdown-content">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    // 自定义代码块样式
                    code: ({ node, inline, className, children, ...props }) => {
                      const match = /language-(\w+)/.exec(className || '');
                      return !inline && match ? (
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4">
                          <code className={className} {...props}>
                            {children}
                          </code>
                        </pre>
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                    // 自定义链接样式
                    a: ({ node, ...props }) => (
                      <a 
                        {...props} 
                        className="text-primary-600 hover:text-primary-700 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    ),
                  }}
                >
                  {message.content}
                </ReactMarkdown>
              </div>
            )}
          </div>

          {/* Message Footer */}
          <div className={`flex items-center mt-2 space-x-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
            <span className="text-xs text-gray-500">
              {formatTime(message.timestamp)}
            </span>
            
            {!isUser && (
              <div className="flex items-center space-x-1">
                <button
                  onClick={handleCopy}
                  className="p-1 rounded hover:bg-gray-100 transition-colors"
                  title="复制内容"
                >
                  <Copy className="w-3 h-3 text-gray-500" />
                </button>
                
                <button
                  className="p-1 rounded hover:bg-gray-100 transition-colors"
                  title="点赞"
                >
                  <ThumbsUp className="w-3 h-3 text-gray-500" />
                </button>
                
                <button
                  className="p-1 rounded hover:bg-gray-100 transition-colors"
                  title="点踩"
                >
                  <ThumbsDown className="w-3 h-3 text-gray-500" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
