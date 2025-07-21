import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { Github, Linkedin, Mail, Instagram, Globe, Search } from 'lucide-react';
import { members, Member } from '../models/members';

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
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF4B1F] transition-colors">{member.name}</h3>
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
                {selectedMember.role !== 'Coordenador' && (
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF4B1F]/20 text-[#FF4B1F] text-sm font-medium mb-6">
                    {selectedMember.focus}
                  </span>
                )}
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