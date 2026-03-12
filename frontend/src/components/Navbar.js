import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_academy-talento/artifacts/n8ugzokq_471621460_460486846915306_2809886453613972521_n.jpg';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Programas', href: '#programas' },
  { label: 'Treinadores', href: '#treinadores' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Instalações', href: '#instalacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-[#003399] shadow-2xl py-2'
          : 'bg-[#003399]/85 backdrop-blur-md py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo em destaque */}
        <a href="#inicio" className="flex items-center gap-3 flex-shrink-0" data-testid="navbar-logo">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/20 blur-md" />
            <img
              src={LOGO_URL}
              alt="Escola Cruzeiro Vila Velha"
              className="relative w-12 h-12 rounded-full object-cover border-2 border-white/80 shadow-lg"
            />
          </div>
          <div className="hidden sm:block leading-tight">
            <p
              className="text-white font-extrabold text-sm tracking-wide"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              ESCOLA CRUZEIRO
            </p>
            <p
              className="text-white/70 text-xs font-medium tracking-widest"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              VILA VELHA
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 hover:underline underline-offset-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contato"
          data-testid="navbar-cta"
          className="hidden lg:block bg-white text-[#003399] font-bold uppercase tracking-wide rounded-full px-6 py-2.5 text-sm hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-200 shadow-lg flex-shrink-0"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Aula Experimental
        </a>

        {/* Mobile Hamburger */}
        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden bg-[#003399] border-t border-white/10 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/5 py-3 px-2 rounded-lg text-base font-medium transition-all"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="bg-white text-[#003399] font-bold uppercase tracking-wide rounded-full px-6 py-3 text-sm text-center hover:bg-white/90 transition-all duration-200 mt-3"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Aula Experimental Grátis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
