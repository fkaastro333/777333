import { Instagram, MessageCircle, Mail } from 'lucide-react';

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_academy-talento/artifacts/n8ugzokq_471621460_460486846915306_2809886453613972521_n.jpg';

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Programas', href: '#programas' },
  { label: 'Treinadores', href: '#treinadores' },
  { label: 'Instalações', href: '#instalacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="bg-[#1a3080] text-white"
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={LOGO_URL}
                alt="Escola Cruzeiro Vila Velha"
                className="w-12 h-12 rounded-full object-cover border-2 border-white/50"
              />
              <div>
                <p
                  className="text-white font-extrabold text-sm tracking-wide"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  ESCOLA CRUZEIRO
                </p>
                <p
                  className="text-white/60 text-xs font-semibold tracking-widest"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  VILA VELHA
                </p>
              </div>
            </div>
            <p
              className="text-white/60 text-sm leading-relaxed mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Formando atletas e cidadãos em Vila Velha, ES.
              O futebol como ferramenta de transformação de vida.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/escola.cruzeiro.vilavelha"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E1306C] flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/5527992034728"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-whatsapp"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="mailto:vilavelha@escolacruzeiro.com.br"
                data-testid="footer-email"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#003399] flex items-center justify-center transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-extrabold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#F1BE10] text-sm transition-colors duration-200"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-extrabold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Contato
            </h4>
            <ul className="space-y-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <li className="text-white/60 text-sm">
                Alvorada, Vila Velha – ES
                <br />
                CEP: 29117-270
              </li>
              <li>
                <a
                  href="tel:+5527992034728"
                  className="text-white/60 hover:text-[#F1BE10] text-sm transition-colors"
                >
                  (27) 99203-4728
                </a>
              </li>
              <li>
                <a
                  href="mailto:vilavelha@escolacruzeiro.com.br"
                  className="text-white/60 hover:text-[#F1BE10] text-sm transition-colors break-all"
                >
                  vilavelha@escolacruzeiro.com.br
                </a>
              </li>
            </ul>

            {/* Age Groups */}
            <div className="mt-6">
              <p
                className="text-white/40 text-xs uppercase tracking-widest mb-3"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Faixas Etárias
              </p>
              <div className="flex flex-wrap gap-2">
                {['5-7 anos', '8-10 anos', '11-14 anos'].map((age) => (
                  <span
                    key={age}
                    className="text-xs bg-white/10 text-white/70 rounded-full px-3 py-1"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {age}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slogan Banner */}
      <div className="border-t border-white/10 py-6 bg-[#003399]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-2xl sm:text-3xl font-black text-white uppercase tracking-widest"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            JOGUE. <span className="text-white/70">EVOLUA.</span> REPITA.
          </p>
          <p
            className="text-white/40 text-xs"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            © {new Date().getFullYear()} Escola Cruzeiro Vila Velha. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
