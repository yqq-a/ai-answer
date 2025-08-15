export interface MessageType {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type?: 'text' | 'error' | 'system';
}

export interface ChatSession {
  id: string;
  title: string;
  messages: MessageType[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AIModel {
  id: string;
  name: string;
  description: string;
  maxTokens: number;
  isAvailable: boolean;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: 'zh-CN' | 'en-US';
  aiModel: string;
  autoSave: boolean;
  maxHistoryItems: number;
}

export interface APIResponse {
  success: boolean;
  data?: any;
  error?: string;
  message?: string;
}

export interface QuickPrompt {
  id: string;
  title: string;
  content: string;
  icon: string;
  category: 'general' | 'creative' | 'technical' | 'educational';
}

export interface ChatInterfaceProps {
  messages: MessageType[];
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

export interface HeaderProps {
  onToggleSidebar: () => void;
  messageCount: number;
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNewChat: () => void;
  onClearHistory: () => void;
}

export interface WelcomeScreenProps {
  onSendMessage: (message: string) => void;
}

export interface MessageBubbleProps {
  message: MessageType;
  isLatest?: boolean;
}

export interface InputAreaProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}
