import { APIResponse } from '../types';

// 模拟 AI 响应的延迟时间
const RESPONSE_DELAY = 1000 + Math.random() * 2000; // 1-3秒随机延迟

// 预设的 AI 响应模板
const responseTemplates = {
  greeting: [
    '你好！我是 AI Answer，一个智能问答助手。有什么我可以帮助你的吗？',
    '欢迎使用 AI Answer！我很乐意为你解答问题。',
    '你好！我在这里帮助你解决问题和提供信息。请随时向我提问。'
  ],
  
  technical: [
    '这是一个很好的技术问题。让我为你详细解释一下：\n\n',
    '从技术角度来看，这个问题涉及几个关键概念：\n\n',
    '这是一个复杂的技术话题，我来逐步为你分析：\n\n'
  ],
  
  general: [
    '关于你的问题，我来为你详细解答：\n\n',
    '这是一个有趣的问题！让我为你分析一下：\n\n',
    '我理解你的疑问，让我来帮你解释：\n\n'
  ],
  
  creative: [
    '这是一个很有创意的想法！让我来帮你拓展一下思路：\n\n',
    '我很喜欢这种创造性的问题。让我为你提供一些灵感：\n\n',
    '创意思维很重要！让我来和你一起探索这个主题：\n\n'
  ]
};

// 关键词映射到响应类型
const keywordMapping = {
  greeting: ['你好', 'hello', 'hi', '嗨', '您好', '问候'],
  technical: ['代码', '编程', '技术', '算法', '数据库', '前端', '后端', 'react', 'javascript', 'python'],
  creative: ['创意', '设计', '艺术', '想法', '灵感', '创作', '故事'],
  general: [] // 默认类型
};

// 智能内容生成
const generateContent = (question: string, type: string): string => {
  const templates = responseTemplates[type as keyof typeof responseTemplates] || responseTemplates.general;
  const template = templates[Math.floor(Math.random() * templates.length)];
  
  // 根据问题类型生成不同的回答内容
  if (type === 'technical') {
    return template + generateTechnicalContent(question);
  } else if (type === 'creative') {
    return template + generateCreativeContent(question);
  } else if (type === 'greeting') {
    return template;
  } else {
    return template + generateGeneralContent(question);
  }
};

const generateTechnicalContent = (question: string): string => {
  return `针对"${question}"这个问题，我建议从以下几个方面来考虑：

1. **核心概念理解**
   - 首先需要明确相关的基础概念
   - 理解问题的技术背景和上下文

2. **解决方案分析**
   - 分析可能的解决方案
   - 比较不同方案的优缺点

3. **最佳实践**
   - 遵循行业标准和最佳实践
   - 考虑性能、安全性和可维护性

4. **实际应用**
   - 结合具体的使用场景
   - 提供可操作的建议和代码示例

如果你需要更具体的帮助，请告诉我你遇到的具体问题或使用场景。`;
};

const generateCreativeContent = (question: string): string => {
  return `对于"${question}"这个创意主题，我有以下一些想法：

✨ **创意角度**
- 从不同的视角来审视这个主题
- 寻找独特的切入点和表达方式

🎨 **设计思路**
- 考虑视觉呈现和用户体验
- 注重细节和整体协调性

💡 **实现建议**
- 将创意转化为可执行的方案
- 考虑技术可行性和资源限制

如果你想深入探讨某个特定方向，我很乐意与你进一步讨论！`;
};

const generateGeneralContent = (question: string): string => {
  return `关于"${question}"，我从多个角度为你分析：

**主要观点：**
- 这个问题涉及到多个层面的考虑
- 需要综合分析各种因素和可能的影响

**详细分析：**
- 从理论基础出发，结合实际情况
- 考虑不同的应用场景和解决方案

**建议和总结：**
- 基于分析结果，提供具体的建议
- 希望这些信息对你有所帮助

如果你还有其他相关问题，或需要我详细解释某个特定方面，请随时告诉我！`;
};

// 检测问题类型
const detectQuestionType = (question: string): string => {
  const lowerQuestion = question.toLowerCase();
  
  for (const [type, keywords] of Object.entries(keywordMapping)) {
    if (keywords.some(keyword => lowerQuestion.includes(keyword))) {
      return type;
    }
  }
  
  return 'general';
};

// 模拟 AI 响应
export const simulateAIResponse = async (question: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const questionType = detectQuestionType(question);
      const response = generateContent(question, questionType);
      resolve(response);
    }, RESPONSE_DELAY);
  });
};

// 模拟 API 调用
export const callAIAPI = async (message: string): Promise<APIResponse> => {
  try {
    const response = await simulateAIResponse(message);
    return {
      success: true,
      data: { response },
      message: 'Success'
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to get AI response',
      message: 'Error occurred while processing your request'
    };
  }
};

// 获取快速提示
export const getQuickPrompts = () => [
  {
    id: '1',
    title: '解释概念',
    content: '请解释一下什么是人工智能？',
    icon: '🤖',
    category: 'general' as const
  },
  {
    id: '2',
    title: '编程帮助',
    content: '如何在React中使用useState钩子？',
    icon: '💻',
    category: 'technical' as const
  },
  {
    id: '3',
    title: '创意写作',
    content: '帮我写一个关于未来城市的短故事开头',
    icon: '✍️',
    category: 'creative' as const
  },
  {
    id: '4',
    title: '学习建议',
    content: '作为初学者，应该如何学习前端开发？',
    icon: '📚',
    category: 'educational' as const
  }
];
