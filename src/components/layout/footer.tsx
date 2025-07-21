import { Logo } from '../ui/logo';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/ligia-ufpe', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ligia/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/ligia.ufpe/', label: 'Instagram' },
  ];

  return (
    <footer className="bg-white/5 py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-4 md:max-w-xs">
            <Logo />
            <address className="not-italic text-gray-400">
              Av. Jornalista Anibal Fernandes, s/n<br />
              Centro de Informática da UFPE<br />
              Cidade Universitária (Campus Recife)<br />
              50740-560<br />
              Recife, PE - Brazil<br />
            </address>
          </div>

          {/* <div>
            <h3 className="font-bold mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#initiatives" className="text-gray-400 hover:text-white transition-colors">Iniciativas</a></li>
              <li><a href="#members" className="text-gray-400 hover:text-white transition-colors">Membros</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-white transition-colors">Eventos</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div> */}

          {/* <div>
            <h3 className="font-bold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="/papers" className="text-gray-400 hover:text-white transition-colors">Artigos</a></li>
              <li><a href="/materials" className="text-gray-400 hover:text-white transition-colors">Educacional</a></li>
            </ul>
          </div> */}

          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5 text-[#FF4B1F]" />
                <a
                  href="mailto:ligia@cin.ufpe.br"
                  className="hover:underline text-[#FF4B1F]"
                >
                  ligia@cin.ufpe.br
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Ligia - UFPE. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}