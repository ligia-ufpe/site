import React from 'react';
import { Menu, X, Github, Linkedin, Twitter , Instagram} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { useLocation, useNavigate } from 'react-router-dom';

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Sobre', href: '#about' },
    { name: 'Iniciativas', href: '#initiatives' },
    { name: 'Membros', href: '#members' },
    { name: 'Recursos', href: '#resources' },
    { name: 'Eventos', href: '#events' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ligia-ufpe', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ligia/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/ligia.ufpe/', label: 'Instagram' },
  ];

  const handleNavigation = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: href } });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  // Listen for navigation state and scroll to the section
  React.useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.querySelector(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Clear the state to prevent scrolling on subsequent renders
        navigate(location.pathname, { replace: true, state: {} });
      }
    }
  }, [location.state, navigate]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </button>
            ))}
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 ml-4 border-l border-white/10 pl-4">
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

            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNavigation('#contact')}
            >
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Social Icons */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
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

              <Button
                variant="primary"
                size="sm"
                onClick={() => handleNavigation('#contact')}
              >
                Contato
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}