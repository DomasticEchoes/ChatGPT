import { v4 as uuidv4 } from 'uuid';
import { ChatInterface, ConfigInterface, ModelOptions } from '@type/chat';
import useStore from '@store/store';

const date = new Date();
const dateString =
  date.getFullYear() +
  '-' +
  ('0' + (date.getMonth() + 1)).slice(-2) +
  '-' +
  ('0' + date.getDate()).slice(-2);

// default system message obtained using the following method: https://twitter.com/DeminDimin/status/1619935545144279040
export const _defaultSystemMessage =
  import.meta.env.VITE_DEFAULT_SYSTEM_MESSAGE ??
  `You are ChatGPT, a large language model trained by OpenAI.
Carefully heed the user's instructions. 
Respond using Markdown.`;

export const modelOptions: ModelOptions[] = [
  'llama-70b',
  'llama-405b',
  'llama-maverick',
  'llama-8b',
  'llama-scout',
  'gpt-41',
  'gpt-5-mini',
  'gpt-5-nano',
  'gpt-5',
  'gpt-4.1-mini',
  'gpt-4.1-nano',
  'claude-4-opus',
  'claude-3.5-sonnet',
  'claude-4-sonnet',
  'claude-3.7-sonnet',
  'claude-4.1-opus',
  'claude-3.5-haiku',
  'claude-4.5-sonnet',
  'gemini-2.5-flash',
  'gemini-2.5-pro',
  'gemini-1.5-flash'
];

export const defaultModel = 'gpt-5';

export const modelMaxToken = {
    'llama-70b': 128000,
    'llama-405b': 128000,
    'llama-maverick': 1000000,
    'llama-8b': 128000,
    'llama-scout': 10000000,
    'gpt-41': 1000000,
    'gpt-5-mini': 400000,
    'gpt-5-nano': 400000,
    'gpt-5': 400000,
    'gpt-4.1-nano': 1000000,
    'gpt-4.1-mini': 1000000,
    'claude-4-opus': 1000000,
    'claude-3.5-sonnet': 200000,
    'claude-4-sonnet': 1000000,
    'claude-3.7-sonnet': 200000,
    'claude-4.1-opus': 1000000,
    'claude-3.5-haiku': 200000,
    'claude-4.5-sonnet': 1000000,
    'gemini-2.5-flash': 1000000,
    'gemini-2.5-pro': 2000000,
    'gemini-1.5-flash': 1000000,
};
export const modelCost = {
    'llama-70b': {
        prompt: {
            price: 0.0002,
            unit: 1000
        },
        completion: {
            price: 0.0006,
            unit: 1000
        },
    },
    'llama-405b': {
        prompt: {
            price: 0.00533,
            unit: 1000
        },
        completion: {
            price: 0.016,
            unit: 1000
        },
    },
    'llama-maverick': {
        prompt: {
            price: 0.0002,
            unit: 1000
        },
        completion: {
            price: 0.0006,
            unit: 1000
        },
    },
    'llama-8b': {
        prompt: {
            price: 0.00005,
            unit: 1000
        },
        completion: {
            price: 0.00015,
            unit: 1000
        },
    },
    'llama-scout': {
        prompt: {
            price: 0.00011,
            unit: 1000
        },
        completion: {
            price: 0.00034,
            unit: 1000
        },
    },
    'gpt-41': {
        prompt: {
            price: 0.005,
            unit: 1000
        },
        completion: {
            price: 0.015,
            unit: 1000
        },
    },
    'gpt-5-mini': {
        prompt: {
            price: 0.00025,
            unit: 1000
        },
        completion: {
            price: 0.00075,
            unit: 1000
        },
    },
    'gpt-5-nano': {
        prompt: {
            price: 0.00005,
            unit: 1000
        },
        completion: {
            price: 0.00015,
            unit: 1000
        },
    },
    'gpt-5': {
        prompt: {
            price: 0.00125,
            unit: 1000
        },
        completion: {
            price: 0.00375,
            unit: 1000
        },
    },
    'gpt-4.1-nano': {
        prompt: {
            price: 0.0001,
            unit: 1000
        },
        completion: {
            price: 0.0004,
            unit: 1000
        },
    },
    'gpt-4.1-mini': {
        prompt: {
            price: 0.0004,
            unit: 1000
        },
        completion: {
            price: 0.0016,
            unit: 1000
        },
    },
    'claude-4-opus': {
        prompt: {
            price: 0.015,
            unit: 1000
        },
        completion: {
            price: 0.075,
            unit: 1000
        },
    },
    'claude-3.5-sonnet': {
        prompt: {
            price: 0.003,
            unit: 1000
        },
        completion: {
            price: 0.015,
            unit: 1000
        },
    },
    'claude-4-sonnet': {
        prompt: {
            price: 0.003,
            unit: 1000
        },
        completion: {
            price: 0.015,
            unit: 1000
        },
    },
    'claude-3.7-sonnet': {
        prompt: {
            price: 0.003,
            unit: 1000
        },
        completion: {
            price: 0.015,
            unit: 1000
        },
    },
    'claude-4.1-opus': {
        prompt: {
            price: 0.015,
            unit: 1000
        },
        completion: {
            price: 0.075,
            unit: 1000
        },
    },
    'claude-3.5-haiku': {
        prompt: {
            price: 0.0008,
            unit: 1000
        },
        completion: {
            price: 0.004,
            unit: 1000
        },
    },
    'claude-4.5-sonnet': {
          prompt: {
            price: 0.0008,
            unit: 1000
        },
        completion: {
            price: 0.004,
            unit: 1000
        },
    },
    'gemini-2.5-flash': {
        prompt: {
            price: 0.0003,
            unit: 1000
        },
        completion: {
            price: 0.0012,
            unit: 1000
        },
    },
    'gemini-2.5-pro': {
        prompt: {
            price: 0.0025,
            unit: 1000
        },
        completion: {
            price: 0.015,
            unit: 1000
        },
    },
    'gemini-1.5-flash': {
        prompt: {
            price: 0.0001,
            unit: 1000
        },
        completion: {
            price: 0.0004,
            unit: 1000
        },
    }
};

export const defaultUserMaxToken = 4000;

export const _defaultChatConfig: ConfigInterface = {
  model: defaultModel,
  max_tokens: defaultUserMaxToken,
  temperature: 1,
  presence_penalty: 0,
  top_p: 1,
  frequency_penalty: 0,
};

export const generateDefaultChat = (
  title?: string,
  folder?: string
): ChatInterface => ({
  id: uuidv4(),
  title: title ? title : 'New Chat',
  messages:
    useStore.getState().defaultSystemMessage.length > 0
      ? [{ role: 'system', content: useStore.getState().defaultSystemMessage }]
      : [],
  config: { ...useStore.getState().defaultChatConfig },
  titleSet: false,
  folder,
});

export const codeLanguageSubset = [
  'python',
  'javascript',
  'java',
  'go',
  'bash',
  'c',
  'cpp',
  'csharp',
  'css',
  'diff',
  'graphql',
  'json',
  'kotlin',
  'less',
  'lua',
  'makefile',
  'markdown',
  'objectivec',
  'perl',
  'php',
  'php-template',
  'plaintext',
  'python-repl',
  'r',
  'ruby',
  'rust',
  'scss',
  'shell',
  'sql',
  'swift',
  'typescript',
  'vbnet',
  'wasm',
  'xml',
  'yaml',
];
