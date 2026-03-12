import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_academy-talento/artifacts/n8ugzokq_471621460_460486846915306_2809886453613972521_n.jpg';

export default function ThankYouPage() {
  return (
    <div
      data-testid="thank-you-page"
      className="min-h-screen bg-gradient-to-br from-[#003399] via-[#003399] to-[#1a3080] flex flex-col items-center justify-center px-4"
    >
      <div className="text-center max-w-lg w-full">
        <img
          src={LOGO_URL}
          alt="Escola Cruzeiro Vila Velha"
          className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-[#F1BE10] shadow-xl"
        />
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full border-2 border-green-400 mb-6">
          <CheckCircle size={40} className="text-green-400" />
        </div>
        <h1
          className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          RECEBEMOS <span className="text-[#F1BE10]">SUA</span> MENSAGEM!
        </h1>
        <p
          className="text-white/80 text-lg mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Obrigado por agendar uma aula experimental!
        </p>
        <p
          className="text-white/60 text-base mb-10"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Nossa equipe entrará em contato em breve para confirmar sua aula gratuita.
          Prepare a chuteira!
        </p>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8">
          <h3
            className="text-[#F1BE10] font-bold text-lg mb-3 uppercase tracking-wide"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Proximos Passos
          </h3>
          <ul className="text-white/80 text-sm space-y-2 text-left" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#F1BE10] rounded-full flex-shrink-0"></span>
              Aguarde nosso contato via WhatsApp ou telefone
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#F1BE10] rounded-full flex-shrink-0"></span>
              Confirme o horário disponível com nossa equipe
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#F1BE10] rounded-full flex-shrink-0"></span>
              Traga roupa esportiva e muita vontade de jogar!
            </li>
          </ul>
        </div>

        <Link
          to="/"
          data-testid="back-to-home"
          className="inline-flex items-center gap-2 bg-[#F1BE10] text-[#003399] font-bold uppercase tracking-wide rounded-full px-8 py-4 hover:bg-[#D4A000] hover:-translate-y-1 transition-all duration-300 shadow-xl"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <ArrowLeft size={18} />
          Voltar para o Início
        </Link>
      </div>
    </div>
  );
}
