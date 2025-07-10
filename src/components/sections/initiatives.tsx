import { useState } from 'react';
import { motion } from 'framer-motion';
import {  ArrowRight } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import { Button } from '../ui/button';
import { Initiative, initiatives } from '../models/initiatives';

export function Initiatives() {
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null);

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossas Iniciativas</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Nossas iniciativas são projetos que visam promover o aprendizado e a troca de conhecimento entre os membros e a comunidade no geral.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {initiatives.map((initiative, index) => (
          <motion.div
            key={initiative.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedInitiative(initiative)}
            className="group relative overflow-hidden rounded-2xl bg-white/2.5 hover:bg-white/5 transition-all duration-500 cursor-pointer"
          >
            <div className="absolute inset-0">
              <img
                src={initiative.image}
                alt={initiative.title}
                className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
            </div>
            
            <div className="relative p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FF4B1F]/20 rounded-xl">
                  <initiative.icon className="w-8 h-8 text-[#FF4B1F]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#FF4B1F] transition-colors">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-400 line-clamp-2">{initiative.description}</p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 text-[#FF4B1F]">
                <span className="text-sm font-medium">Saiba mais</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog
        open={selectedInitiative !== null}
        onClose={() => setSelectedInitiative(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-3xl w-full rounded-2xl bg-black border border-white/10 p-8 overflow-y-auto">
            {selectedInitiative && (
              <div>
                <div className="relative h-48 rounded-xl overflow-hidden mb-8">
                  <img
                    src={selectedInitiative.image}
                    alt={selectedInitiative.title}
                    className="w-full h-full object-cover "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="p-2 bg-[#FF4B1F]/20 rounded-lg">
                      <selectedInitiative.icon className="w-6 h-6 text-[#FF4B1F]" />
                    </div>
                    <Dialog.Title className="text-2xl font-bold">
                      {selectedInitiative.title}
                    </Dialog.Title>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-8">
                  {selectedInitiative.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {selectedInitiative.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/5 rounded-lg p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-[#FF4B1F] mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-white/5 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-bold mb-4">Destaques</h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {selectedInitiative.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF4B1F]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-end gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedInitiative(null)}
                  >
                    Fechar
                  </Button>
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}