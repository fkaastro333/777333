import { CheckCircle2 } from 'lucide-react';

const FIELD_IMG = 'https://images.unsplash.com/photo-1607089696115-cee3bb825da3?w=1200&q=85';

const facilities = [
  'Campos de futebol de qualidade profissional',
  'Equipamentos modernos de treinamento',
  'Treinadores certificados e experientes',
  'Ambiente seguro e supervisionado',
  'Vestiários e área de apoio',
  'Turmas reduzidas para atendimento personalizado',
  'Avaliações periódicas de desempenho',
  'Programa de nutrição esportiva básica',
];

export default function FacilitiesSection() {
  return (
    <section
      id="instalacoes"
      data-testid="facilities-section"
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <span
            className="inline-block text-[#003399] text-sm font-bold uppercase tracking-widest mb-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Infraestrutura
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#0F172A] uppercase tracking-tight mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            NOSSO AMBIENTE DE <span className="text-[#003399]">TREINAMENTO</span>
          </h2>
          <p
            className="text-[#475569] text-base max-w-xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Estrutura completa para proporcionar o melhor ambiente de desenvolvimento para seu filho.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="slide-left relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                src={FIELD_IMG}
                alt="Campo de treinamento"
                className="w-full h-72 lg:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003399]/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg">
                  <p
                    className="text-[#003399] font-extrabold text-lg uppercase tracking-wide"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Alvorada, Vila Velha
                  </p>
                  <p
                    className="text-[#475569] text-sm"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Espírito Santo, Brasil
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-white text-[#003399] rounded-2xl p-5 shadow-2xl border border-slate-100">
              <p
                className="text-3xl font-black text-[#003399]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                3x
              </p>
              <p
                className="text-xs font-semibold mt-1 leading-tight"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Treinos por
                <br />semana
              </p>
            </div>
          </div>

          {/* Features List */}
          <div className="slide-right">
            <h3
              className="text-2xl font-extrabold text-[#0F172A] uppercase tracking-wide mb-8"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              O QUE OFERECEMOS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facilities.map((item, index) => (
                <div
                  key={item}
                  className={`fade-up delay-${(index % 4) * 100} flex items-start gap-3 bg-[#F8FAFC] rounded-xl p-4 border border-slate-100 hover:border-[#003399]/20 hover:bg-[#003399]/5 transition-all duration-200`}
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#003399] flex-shrink-0 mt-0.5"
                  />
                  <span
                    className="text-[#475569] text-sm leading-snug"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#contato"
                data-testid="facilities-cta"
                className="inline-block bg-[#003399] text-white font-bold uppercase tracking-wide rounded-full px-8 py-4 text-sm hover:bg-[#1a3080] hover:-translate-y-1 transition-all duration-300 shadow-lg"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Agendar Visita
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
