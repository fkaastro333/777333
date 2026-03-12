import { CheckCircle2, Calendar } from 'lucide-react';

const bullets = [
  'Nenhuma experiência necessária',
  'Traga apenas roupa esportiva e disposição',
  'Vagas limitadas — garanta a sua agora',
  'Acompanhamento personalizado desde o primeiro dia',
];

export default function CTASection() {
  return (
    <section
      data-testid="cta-section"
      className="py-24 bg-[#1a3080] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#003399] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F1BE10]/10 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#F1BE10] rounded-full opacity-60" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#F1BE10] rounded-full opacity-40" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="fade-up">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F1BE10]/20 rounded-full border-2 border-[#F1BE10]/40 mb-6">
            <Calendar size={36} className="text-[#F1BE10]" />
          </div>

          <span
            className="inline-block text-[#F1BE10] text-sm font-bold uppercase tracking-widest mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Vagas Abertas
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-6 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            AGENDE SUA AULA
            <br />
            <span className="text-[#F1BE10]">EXPERIMENTAL GRÁTIS</span>
          </h2>

          <p
            className="text-white/75 text-lg mb-10 max-w-xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Deixe seu filho experimentar o treinamento profissional de futebol sem nenhum compromisso.
          </p>

          {/* Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto mb-10 text-left">
            {bullets.map((bullet) => (
              <div
                key={bullet}
                className="flex items-center gap-3"
              >
                <CheckCircle2 size={18} className="text-[#F1BE10] flex-shrink-0" />
                <span
                  className="text-white/80 text-sm"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {bullet}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#contato"
            data-testid="cta-main-button"
            className="inline-block bg-[#F1BE10] text-[#003399] font-black uppercase tracking-wide rounded-full px-12 py-5 text-lg hover:bg-[#D4A000] hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-[#F1BE10]/30"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Agendar Agora — É Gratuito!
          </a>

          <p
            className="text-white/40 text-xs mt-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Sem compromisso. Apenas venha jogar!
          </p>
        </div>
      </div>
    </section>
  );
}
