import { BookOpen, Bot, FileText, View } from 'lucide-react';

export interface Material {
  title: string;
  description: string;
  type: 'tutorial' | 'video' | 'guide' | 'code';
  link: string;
  icon: React.ElementType;
}

export const materials: Material[] = [
  {
    title: "Introduction to Neural Networks",
    description: "A comprehensive guide to understanding neural networks.",
    type: "tutorial",
    link: "/materials/neural-networks",
    icon: BookOpen,
  },
  {
    title: "Computer Vision with PyTorch",
    description: "Step-by-step video series on implementing computer vision models using PyTorch.",
    type: "video",
    link: "/materials/computer-vision",
    icon: View,
  },
  {
    title: "NLP Best Practices Guide",
    description: "Detailed documentation on best practices for natural language processing projects.",
    type: "guide",
    link: "/materials/nlp-guide",
    icon: FileText,
  },
  {
    title: "Reinforcement Learning Examples",
    description: "Collection of practical examples and implementations of reinforcement learning algorithms.",
    type: "code",
    link: "/materials/reinforcement-learning",
    icon: Bot,
  },
];