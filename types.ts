export interface Product {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  description: string;
  sensory: string;
  image: string;
  specs: { label: string; value: string }[];
  minOrder: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum ImageSize {
  OneK = '1K',
  TwoK = '2K',
  FourK = '4K'
}

export enum GenerationStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
