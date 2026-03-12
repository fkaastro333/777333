import { Trophy, Shield, Star } from 'lucide-react';

const trustItems = [
  {
    icon: Trophy,
    title: 'Treinadores Profissionais',
    description: 'Nossa equipe é formada por treinadores certificados com experiência em futebol competitivo e formação de jovens atletas.',
    color: '#003399',
  },
  {
    icon: Shield,
    title: 'Ambiente Seguro',
    description: 'Priorizamos a segurança e o bem-estar de cada criança. Um espaço estruturado, supervisionado e acolhedor para todos.',
    color: '#003399',
  },
  {
    icon: Star,
    title: 'Metodologia Comprovada',
    description: 'Nosso método de ensino é baseado nas melhores práticas internacionais de desenvolvimento esportivo juvenil.',
    color: '#003399',
  },
];

export default function TrustSection() {
  return (
    <section
      id="confianca"
      data-testid="trust-section"
      className="py-16 bg-white relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                data-testid={`trust-card-${index}`}
                className={`fade-up delay-${(index + 1) * 100} group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 hover:-translate-y-2 transition-all duration-300 flex flex-col items-start`}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <Icon size={28} style={{ color: item.color }} strokeWidth={1.8} />
                </div>
                <h3
                  className="text-lg font-extrabold text-[#0F172A] mb-3 uppercase tracking-wide"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[#475569] text-sm leading-relaxed"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
