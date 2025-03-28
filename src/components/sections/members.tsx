import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { Github, Linkedin, Twitter, Mail, Instagram, Globe, Search } from 'lucide-react';

interface Member {
  id: number;
  name: string;
  role: string;
  focus: 'Natural Language Processing' | 'Machine Learning' | 'Computer Vision' | 'Communication' | 'Design' | 'Visão Computacional' | 'Processamento de Linguagem Natural' | 'Aprendizado de Máquina' | 'Comunicação';
  image: string;
  bio: string;
  social?: {
    linkedin?: string;
    instagram?: string;
    email?: string;
    portfolio?: string;
    github?: string;
  };
}

const members: Member[] = [
  {
    id: 1,
    name: 'Prof. Adiel Filho',
    role: 'Coordenador',
    focus: 'Aprendizado de Máquina',
    image: 'https://portal.cin.ufpe.br/wp-content/uploads/2024/04/Adiel-Filho.jpg',
    bio: 'Prof. Associado (CIn-UFPE), Doutor em Eng. de Gestão/Produção (UFPE). Pesquisador (INCT-IAIA, IARA) e visitante (Coimbra, Southampton, Poznan). Prêmio EURO EJOR 2019. Foco: Análise de Decisão, IA, Preferências, Analytics e Pesquisa Operacional.',
    social: {
      linkedin: 'https://www.linkedin.com/in/adiel-t-de-almeida-filho-7aa3b75/',
      email: 'adielfilho@cin.ufpe.br'
    }
  },
  {
    id: 2,
    name: 'Prof. George Cavalcanti',
    role: 'Coordenador',
    focus: 'Processamento de Linguagem Natural',
    image: 'https://portal.cin.ufpe.br/wp-content/uploads/2024/05/Professores-CIn-3.png',
    bio: 'Professor Titular e Coordenador de Pesquisa (CIn-UFPE). Membro: Academia Pernambucana de Ciências, IEEE (sênior) e LIVIA (ETS, Canadá). Pesquisa: Aprendizado de Máquina, Visão Computacional (sistemas classificadores, meta-aprendizado, etc.) e Processamento de Linguagem Natural.',
    social: {
      linkedin: 'https://www.linkedin.com/in/george-dc-cavalcanti-b9485018/',
      email: 'gdcc@cin.ufpe.br'
    }
  },
  {
    id: 3,
    name: 'Prof. Tsang Ing Ren',
    role: 'Coordenador',
    focus: 'Visão Computacional',
    image: 'https://portal.cin.ufpe.br/wp-content/uploads/2024/05/Professores-CIn-15.png',
    bio: 'Prof. Associado (CIn-UFPE), Doutor em Visão Computacional/Física (Univ. Antuérpia). Membro IEEE. Pesquisa: Visão Computacional, Aprendizado de Máquina (incluindo Deep Learning), Processamento de Imagens e Fotografia Computacional.',
    social: {
      linkedin: 'https://www.linkedin.com/in/ing-ren-tsang-6551371/',
      email: 'tir@cin.ufpe.br'
    }
  },
  {
    id: 4,
    name: 'Gabriel Matias',
    role: 'Diretor Executivo',
    focus: 'Processamento de Linguagem Natural',
    image: 'https://vp2uploads.s3.amazonaws.com/18443/67/palestrantes/2e9dbab80cd8acb736e018b10df5cea1b474845a.png',
    bio: 'Rodrigo is a machine learning researcher with a focus on deep learning and neural networks. He works on developing AI models for healthcare applications.',
    social: {
      linkedin: 'https://www.linkedin.com/in/gabriel-wa-matias-a9913a210/',
      email: ''
    }
  },
  {
    id: 5,
    name: 'Júlia Nunes',
    role: 'Diretora de Comunicação',
    focus: 'Comunicação',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQFMvP9Y2auaNw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1691979336862?e=1747267200&v=beta&t=KXipcBUzlceX7GBhz3iwO18uzmWVxEMcTaKd8t-gCuw',
    bio: 'Julia is a natural language processing researcher with a focus on text generation and summarization. She leads the communications team in developing content for the community.',
    social: {
      linkedin: 'https://www.linkedin.com/in/j%C3%BAlia-nunes-29406927b/',
      email: 'jnas2@cin.ufpe.br'
    }
  },
  {
    id: 6,
    name: 'Rafael Barros',
    role: 'Diretor de Pesquisa',
    focus: 'Visão Computacional',
    image: 'https://vp2uploads.s3.amazonaws.com/18443/67/palestrantes/2dbf1bb13fda0a50184eef48a58c6eefb220e14d.png',
    bio: 'Rafa Panda',
    social: {
      linkedin: 'https://www.linkedin.com/in/rafael-barros-b4034b244/',
      email: 'rsb7@cin.ufpe.br'
    }
  },
  {
    id: 7,
    name: 'Victor Amarante',
    role: 'Diretor de Ensino',
    focus: 'Aprendizado de Máquina',
    image: 'vafs.jpg',
    bio: 'Victor Amarante é Engenheiro de Software com foco em IA, atuando como Data Scientist no CESAR. Tem experiência em Machine Learning e IA Generativa, desenvolvendo sistemas avançados com LLMs, RAG e AI Agents. Como Diretor de Ensino da LIGIA, acompanha os alunos nas trilhas de aprendizado, promovendo cursos alinhados às áreas de atuação e projetos da Liga.',
    social: {
      linkedin: 'https://www.linkedin.com/in/vamarante/',
      email: 'vafs@cin.ufpe.br'
    }
  },
  {
    id: 8,
    name: 'Vitor Negromonte',
    role: 'Diretor de Extensão',
    focus: 'Visão Computacional',
    image: 'vnco.JPG',
    bio: 'Vitor Negromonte é um pesquisador de visão computacional com foco em detecção de objetos e segmentação de imagens, com interesse em IA em sistemas embarcados. Como Diretor de Extensão da LIGIA, ele promove parcerias, organiza eventos de IA e desenvolve recursos educacionais para a comunidade.',
    social: {
      linkedin: 'https://linkedin.com/in/vitornegromonte',
      email: 'vnco@cin.ufpe.br',
      instagram: 'https://www.instagram.com/vitor.ncabral/',
      portfolio: 'https://vitornegromonte.github.io/',
      github: 'http://github.com/vitornegromonte/'
    }
  },
  {
    id: 9,
    name: 'John Doe',
    role: 'Membro',
    focus: 'Design',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToOvnH4kMe_RNK3OYVAVbPZTg8eLtxwRidOQ&s',
    bio: 'John Doe is a designer with a focus on user experience and interface design. He works on creating intuitive and engaging designs for AI applications.',
    social: {
      linkedin: 'a',
      email: 'mailto:b@dadas.com',
      instagram: 'c',
      portfolio: 'd',
      github: 'e'
  },
  }
];

export function Members() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [imageLoading, setImageLoading] = useState<{ [key: number]: boolean }>({});

  const filteredMembers = useMemo(() => {
    return members.filter(member => 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.focus.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const groupedMembers = useMemo(() => {
    const groups = {
      coordenadores: filteredMembers.filter(member => member.role === 'Coordenador'),
      diretores: filteredMembers.filter(member => member.role.startsWith('Diretor')),
      membros: filteredMembers.filter(member => member.role === 'Membro')
    };
    return groups;
  }, [filteredMembers]);

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossa Equipe</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Conheça os pesquisadores e profissionais que fazem parte da LIGIA.
        </p>
      </motion.div>

      <div className="max-w-md mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Buscar membros..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#FF4B1F] focus:outline-none text-white"
          />
        </div>
      </div>

      {/* Coordenadores Section */}
      {groupedMembers.coordenadores.length > 0 && (
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#FF4B1F]">Coordenadores</h3>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {groupedMembers.coordenadores.map((member) => (
                <motion.div
                  key={member.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -5 }}
                  className="group flex flex-col items-center p-6 rounded-xl bg-white/5 hover:bg-white/7 transition-all duration-600 cursor-pointer backdrop-blur-sm"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 ring-2 ring-[#FF4B1F] ring-offset-2 ring-offset-black group-hover:ring-[#FF4B1F]/80 transition-all duration-300">
                    {imageLoading[member.id] && (
                      <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                    )}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onLoad={() => setImageLoading(prev => ({ ...prev, [member.id]: false }))}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF4B1F] text-center transition-colors">{member.name}</h3>
                  <p className="text-gray-400 mb-3 text-center">{member.role}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      )}

      {/* Diretores Section */}
      {groupedMembers.diretores.length > 0 && (
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#FF4B1F]">Diretores</h3>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {groupedMembers.diretores.map((member) => (
                <motion.div
                  key={member.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -5 }}
                  className="group flex flex-col items-center p-6 rounded-xl bg-white/5 hover:bg-white/7 transition-all duration-600 cursor-pointer backdrop-blur-sm"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 ring-2 ring-[#FF4B1F] ring-offset-2 ring-offset-black group-hover:ring-[#FF4B1F]/80 transition-all duration-300">
                    {imageLoading[member.id] && (
                      <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                    )}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onLoad={() => setImageLoading(prev => ({ ...prev, [member.id]: false }))}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF4B1F] text-center transition-colors">{member.name}</h3>
                  <p className="text-gray-400 mb-3 text-center">{member.role}</p>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF4B1F]/10 text-[#FF4B1F] text-sm text-center font-medium group-hover:bg-[#FF4B1F]/20 transition-colors">
                    {member.focus}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      )}

      {/* Membros Section */}
      {groupedMembers.membros.length > 0 && (
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#FF4B1F]">Membros</h3>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {groupedMembers.membros.map((member) => (
                <motion.div
                  key={member.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -5 }}
                  className="group flex flex-col items-center p-6 rounded-xl bg-white/5 hover:bg-white/7 transition-all duration-600 cursor-pointer backdrop-blur-sm"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 ring-2 ring-[#FF4B1F] ring-offset-2 ring-offset-black group-hover:ring-[#FF4B1F]/80 transition-all duration-300">
                    {imageLoading[member.id] && (
                      <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                    )}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onLoad={() => setImageLoading(prev => ({ ...prev, [member.id]: false }))}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF4B1F] text-center transition-colors">{member.name}</h3>
                  <p className="text-gray-400 mb-3 text-center">{member.role}</p>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF4B1F]/10 text-[#FF4B1F] text-sm text-center font-medium group-hover:bg-[#FF4B1F]/20 transition-colors">
                    {member.focus}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      )}

      <Dialog
        open={selectedMember !== null}
        onClose={() => setSelectedMember(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-lg w-full rounded-xl bg-black/70 backdrop-blur-md border-[0.001em] border-[#FF4B1F]/50 border-offset-black p-8">
            {selectedMember && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 ring-4 ring-[#FF4B1F] ring-offset-4 ring-offset-black">
                  {imageLoading[selectedMember.id] && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                  )}
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                    onLoad={() => setImageLoading(prev => ({ ...prev, [selectedMember.id]: false }))}
                  />
                </div>
                <Dialog.Title className="text-3xl font-bold mb-2 text-center">
                  {selectedMember.name}
                </Dialog.Title>
                <p className="text-gray-400 mb-2 text-lg">{selectedMember.role}</p>
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF4B1F]/20 text-[#FF4B1F] text-sm font-medium mb-6">
                  {selectedMember.focus}
                </span>
                <p className="text-gray-300 text-center leading-relaxed mb-8">{selectedMember.bio}</p>
                
                {selectedMember.social && (
                  <div className="flex gap-4">
                    {selectedMember.social.linkedin && (
                      <a 
                        href={selectedMember.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors hover:scale-110 transform duration-200"
                        aria-label={`${selectedMember.name}'s LinkedIn`}
                      >
                        <Linkedin size={20} className="text-[#FF4B1F]" />
                      </a>
                    )}
                    {selectedMember.social.instagram && (
                      <a 
                        href={selectedMember.social.instagram}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors hover:scale-110 transform duration-200"
                        aria-label={`${selectedMember.name}'s Instagram`}
                      >
                        <Instagram size={20} className="text-[#FF4B1F]" />
                      </a>
                    )}
                    {selectedMember.social.email && (
                      <a 
                        href={`mailto:${selectedMember.social.email}`}
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors hover:scale-110 transform duration-200"
                        aria-label={`Email ${selectedMember.name}`}
                      >
                        <Mail size={20} className="text-[#FF4B1F]" />
                      </a>
                    )}
                    {selectedMember.social.portfolio && (
                      <a 
                        href={selectedMember.social.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors hover:scale-110 transform duration-200"
                        aria-label={`${selectedMember.name}'s Portfolio`}
                      >
                        <Globe size={20} className="text-[#FF4B1F]" />
                      </a>
                    )}
                    {selectedMember.social.github && (
                      <a 
                        href={selectedMember.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors hover:scale-110 transform duration-200"
                        aria-label={`${selectedMember.name}'s GitHub`}
                      >
                        <Github size={20} className="text-[#FF4B1F]" />
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}