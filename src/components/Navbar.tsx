import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Activités', href: '#activities' },
  { label: 'Tarifs', href: '#pricing' },
  { label: 'Horaires', href: '#schedule' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg shadow-black/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button
          onClick={() => handleNav('#hero')}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 border-2 border-[#D4A017] flex items-center justify-center group-hover:bg-[#D4A017] transition-colors duration-250">
            <span className="font-condensed font-900 text-white text-base leading-none group-hover:text-black transition-colors duration-250 tracking-widest">CF</span>
          </div>
          <span className="font-condensed font-800 text-white text-xl tracking-widest uppercase">
            THE <span className="text-[#D4A017]">BOX</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`nav-link text-xs font-condensed font-600 uppercase tracking-widest transition-colors duration-200 ${
                active === link.href ? 'text-[#D4A017] active' : 'text-white hover:text-[#D4A017]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="btn-gold text-xs ml-2"
          >
            Essai Gratuit
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu md:hidden bg-black/97 backdrop-blur-sm border-t border-[#D4A017]/20">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left text-sm font-condensed font-700 uppercase tracking-widest text-white hover:text-[#D4A017] transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              className="btn-gold self-start mt-2 text-xs"
            >
              Essai Gratuit
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
