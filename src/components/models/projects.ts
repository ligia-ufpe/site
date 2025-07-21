import {  Code2, Brain, Database, BookOpen } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'machine-learning' | 'nlp' | 'computer-vision' | 'tools' | 'datasets' | 'education';
  githubUrl: string;
  demoUrl?: string;
  stars: number;
  forks: number;
  language: string;
  icon: any;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'LIGIA-NLP',
    description: 'Biblioteca Python para processamento de linguagem natural em português, com foco em análise de sentimentos e classificação de texto.',
    category: 'nlp',
    githubUrl: 'https://github.com/ligia-ufpe/ligia-nlp',
    stars: 45,
    forks: 12,
    language: 'Python',
    icon: Brain
  },
  {
    id: 2,
    title: 'LIGIA-Vision',
    description: 'Framework para detecção de objetos e segmentação de imagens usando modelos de deep learning.',
    category: 'computer-vision',
    githubUrl: 'https://github.com/ligia-ufpe/ligia-vision',
    stars: 38,
    forks: 8,
    language: 'Python',
    icon: Code2
  },
  {
    id: 3,
    title: 'LIGIA-Datasets',
    description: 'Coleção de datasets em português para treinamento de modelos de IA, incluindo textos, imagens e áudio.',
    category: 'datasets',
    githubUrl: 'https://github.com/ligia-ufpe/ligia-datasets',
    stars: 62,
    forks: 15,
    language: 'Python',
    icon: Database
  },
  {
    id: 4,
    title: 'LIGIA-Edu',
    description: 'Plataforma educacional com notebooks Jupyter e exercícios práticos para aprendizado de IA.',
    category: 'education',
    githubUrl: 'https://github.com/ligia-ufpe/ligia-edu',
    stars: 89,
    forks: 24,
    language: 'Python',
    icon: BookOpen
  }
];

export const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'machine-learning', label: 'Machine Learning' },
  { id: 'nlp', label: 'NLP' },
  { id: 'computer-vision', label: 'Visão Computacional' },
  { id: 'tools', label: 'Ferramentas' },
  { id: 'datasets', label: 'Datasets' },
  { id: 'education', label: 'Educação' }
];