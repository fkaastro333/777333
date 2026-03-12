import { Users, ArrowLeft, MessageCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_academy-talento/artifacts/n8ugzokq_471621460_460486846915306_2809886453613972521_n.jpg';
const WHATSAPP_URL = 'https://wa.me/5527992034728?text=Ol%C3%A1!%20Vi%20que%20as%20turmas%20est%C3%A3o%20lotadas.%20Gostaria%20de%20entrar%20na%20lista%20de%20espera.';

export default function ClassesFullPage() {
  return (
    <div
      data-testid="classes-full-page"
      className="min-h-screen bg-gradient-to-br from-[#003399] via-[#003399] to-[#1a3080] flex flex-col items-center justify-center px-4"
    >
      <div className="text-center max-w-lg w-full">
        <img
          src={LOGO_URL}
          alt="Escola Cruzeiro Vila Velha"
          className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-[#F1BE10] shadow-xl"
        />
        <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500/20 rounded-full border-2 border-yellow-400 mb-6">
          <Users size={40} className="text-yellow-400" />
        </div>
        <h1
          className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          TURMAS <span className="text-[#F1BE10]">LOTADAS!</span>
        </h1>
        <p
          className="text-white/80 text-lg mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Nossas turmas estão com as vagas preenchidas no momento.
        </p>
        <p
          className="text-white/60 text-base mb-10"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Mas não se preocupe! Você pode entrar na nossa lista de espera e
          ser avisado assim que uma vaga abrir.
        </p>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <Clock size={20} className="text-[#F1BE10]" />
            <h3
              className="text-[#F1BE10] font-bold text-lg uppercase tracking-wide"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Lista de Espera
            </h3>
          </div>
          <p className="text-white/70 text-sm mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Novas turmas são abertas regularmente. Entre em contato via WhatsApp
            para garantir sua posição na lista de espera.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="waitlist-whatsapp"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold rounded-full px-6 py-3 hover:bg-[#1ebd5b] transition-all duration-300 hover:-translate-y-0.5 w-full"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <MessageCircle size={20} />
            Entrar na Lista de Espera
          </a>
        </div>

        <Link
          to="/"
          data-testid="back-to-home"
          className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-semibold uppercase tracking-wide rounded-full px-8 py-3 hover:bg-white/10 transition-all duration-300"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <ArrowLeft size={18} />
          Voltar para o Início
        </Link>
      </div>
    </div>
  );
}
