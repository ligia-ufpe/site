import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ExternalLink, ArrowRight, Clock } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import { Button } from '../ui/button';
import { events, Event } from '../models/events';


export function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Futuros Eventos</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Junte-se a nós para eventos incríveis e oportunidades de aprender, colaborar, inovar e conectar-se..
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedEvent(event)}
            className="group relative overflow-hidden rounded-2xl bg-white/2.5 hover:bg-white/5 transition-all duration-500 cursor-pointer"
          >
            <div className="absolute inset-0">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
            </div>
            
            <div className="relative p-4 sm:p-6 lg:p-8">
              <span className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm mb-3 sm:mb-4 ${
                event.type === 'conference' ? 'bg-blue-500/20 text-blue-400' :
                event.type === 'workshop' ? 'bg-green-500/20 text-green-400' :
                'bg-purple-500/20 text-purple-400'
              }`}>
                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-[#FF4B1F] transition-colors">
                {event.title}
              </h3>
              
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-center text-sm sm:text-base text-gray-400">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-sm sm:text-base text-gray-400">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-sm sm:text-base text-gray-400">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  <span>{event.location}</span>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 flex items-center gap-2 text-[#FF4B1F]">
                <span className="text-xs sm:text-sm font-medium">View Details</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog
        open={selectedEvent !== null}
        onClose={() => setSelectedEvent(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-start justify-center p-4 overflow-y-auto">
          <Dialog.Panel className="relative mx-auto max-w-3xl w-full rounded-2xl bg-black border border-white/10 p-4 sm:p-6 lg:p-8 my-4 sm:my-6 lg:my-8">
            {selectedEvent && (
              <div>
                <div className="relative h-48 rounded-xl overflow-hidden mb-8">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      selectedEvent.type === 'conference' ? 'bg-blue-500/20 text-blue-400' :
                      selectedEvent.type === 'workshop' ? 'bg-green-500/20 text-green-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {selectedEvent.type.charAt(0).toUpperCase() + selectedEvent.type.slice(1)}
                    </span>
                  </div>
                </div>

                <Dialog.Title className="text-2xl font-bold mb-4">
                  {selectedEvent.title}
                </Dialog.Title>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="bg-white/5 rounded-lg p-4">
                    <Calendar className="w-5 h-5 text-[#FF4B1F] mb-2" />
                    <div className="text-sm text-gray-400">Date</div>
                    <div className="font-medium">{selectedEvent.date}</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <Clock className="w-5 h-5 text-[#FF4B1F] mb-2" />
                    <div className="text-sm text-gray-400">Time</div>
                    <div className="font-medium">{selectedEvent.time}</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <Users className="w-5 h-5 text-[#FF4B1F] mb-2" />
                    <div className="text-sm text-gray-400">Capacity</div>
                    <div className="font-medium">{selectedEvent.capacity} people</div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-bold mb-4">Event Schedule</h4>
                  <div className="space-y-4">
                    {selectedEvent.schedule.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-24 text-sm text-[#FF4B1F]">{item.time}</div>
                        <div className="flex-1 text-gray-300">{item.activity}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedEvent.speakers && (
                  <div className="bg-white/5 rounded-xl p-6 mb-8">
                    <h4 className="text-lg font-bold mb-4">Featured Speakers</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {selectedEvent.speakers.map((speaker) => (
                        <div key={speaker.name} className="flex items-center gap-4">
                          <img
                            src={speaker.image}
                            alt={speaker.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-medium">{speaker.name}</div>
                            <div className="text-sm text-gray-400">{speaker.role}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-white/5 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-bold mb-4">Event Highlights</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {selectedEvent.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF4B1F]" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-end gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedEvent(null)}
                  >
                    Fechar
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => window.open(selectedEvent.registrationLink, '_blank')}
                  >
                    Saiba mais
                    <ExternalLink className="w-4 h-4 ml-2" />
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