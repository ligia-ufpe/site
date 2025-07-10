import { Code2, Book, Lightbulb, GraduationCap } from 'lucide-react';

export interface Initiative {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
  features: string[];
  stats: {
    label: string;
    value: string;
  }[];
}

export const initiatives: Initiative[] = [
  {
    title: 'Clube do artigo',
    description: 'Nossos membros se reúnem para dissecar e discutir artigos científicos sobre Inteligência Artificial, promovendo o aprendizado e a troca de conhecimento entre membros e a comunidade no geral.',
    icon: Book,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
    features: [
      'Infraestrutura de Computação Avançada',
      'Equipes de Pesquisa Especializadas',
      'Parcerias com a Indústria',
      'Suporte à Publicação'
    ],
    stats: []
  },
  {
    title: 'Pesquisa',
    description: 'Na Liga desenvolvemos projetos de pesquisa em áreas como: Visão Computacional, Aprendizado de Máquina e Processamento de Linguagem Natural.',
    icon: Lightbulb,
    image: 'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?fm=jpg&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Espaço Colaborativo',
      'Programas de Mentoria',
      'Workshops de Inovação',
      'Incubação de Startups'
    ],
    stats: []
  },
  {
    title: 'Competições',
    description: 'Pariticipamos de competições de Inteligência Artificial. Nosso objetivo é promover o aprendizado prático e a troca de experiências entre os membros.',
    icon: Code2,
    image: 'https://images.unsplash.com/photo-1637073849667-91120a924221?fm=jpg&q=60&w=800',
    features: [
      'Mentoria Individual',
      'Workshops Técnicos',
      'Orientação de Carreira',
      'Oportunidades de Pesquisa'
    ],
    stats: []
  },
  {
    title: 'Cursos',
    description: 'Oferecemos cursos e workshops sobre temas relevantes para a comunidade interessada no campo da Inteligência Artificial.',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1561089489-f13d5e730d72?q=80&w=800',
    features: [
      'Projetos Open Source',
      'Eventos da Comunidade',
      'Compartilhamento de Conhecimento',
      'Oportunidades de Networking'
    ],
    stats: []
  }
];