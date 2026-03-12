import { Rocket, Zap, Target, ChevronRight } from 'lucide-react';

const programs = [
  {
    icon: Rocket,
    title: 'Programa Iniciante',
    age: '5 a 7 anos',
    tag: 'Iniciante',
    tagColor: 'bg-green-100 text-green-700',
    iconBg: 'bg-green-50',
    iconColor: '#16A34A',
    description:
      'Introdução lúdica ao futebol com foco em coordenação motora, prazer pelo esporte e primeiros fundamentos da bola.',
    highlights: ['Coordenação motora', 'Introdução divertida', 'Primeiros fundamentos'],
  },
  {
    icon: Zap,
    title: 'Programa Desenvolvimento',
    age: '8 a 10 anos',
    tag: 'Intermediário',
    tagColor: 'bg-blue-100 text-[#003399]',
    iconBg: 'bg-blue-50',
    iconColor: '#003399',
    description:
      'Evolução técnica com domínio de bola, passes, dribles e jogo coletivo. Fase de formação dos fundamentos sólidos.',
    highlights: ['Técnica individual', 'Jogo coletivo', 'Controle de bola'],
    featured: true,
  },
  {
    icon: Target,
    title: 'Programa Avançado',
    age: '11 a 14 anos',
    tag: 'Avançado',
    tagColor: 'bg-yellow-100 text-yellow-700',
    iconBg: 'bg-yellow-50',
    iconColor: '#D4A000',
    description:
      'Preparação tática, condicionamento físico e preparação para competições. Formação do atleta completo.',
    highlights: ['Tática avançada', 'Preparação física', 'Competições'],
  },
];

export default function ProgramsSection() {
  return (
    <section
      id="programas"
      data-testid="programs-section"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <span
            className="inline-block text-[#F1BE10] text-sm font-bold uppercase tracking-widest mb-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Modalidades
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#0F172A] uppercase tracking-tight mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            PROGRAMAS DE <span className="text-[#003399]">TREINAMENTO</span>
          </h2>
          <p
            className="text-[#475569] text-base max-w-xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Turmas divididas por faixa etária para garantir o desenvolvimento adequado em cada fase do crescimento.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={program.title}
                data-testid={`program-card-${index}`}
                className={`fade-up delay-${(index + 1) * 100} group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  program.featured
                    ? 'bg-[#003399] shadow-2xl shadow-[#003399]/30 ring-2 ring-[#F1BE10]'
                    : 'bg-white border border-slate-100 shadow-sm hover:shadow-xl'
                }`}
              >
                {program.featured && (
                  <div className="absolute top-4 right-4 bg-[#F1BE10] text-[#003399] text-xs font-bold rounded-full px-3 py-1 uppercase tracking-wide">
                    Popular
                  </div>
                )}

                <div className="p-8">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${
                      program.featured ? 'bg-white/20' : program.iconBg
                    }`}
                  >
                    <Icon
                      size={28}
                      style={{ color: program.featured ? '#F1BE10' : program.iconColor }}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Tag */}
                  <span
                    className={`inline-block text-xs font-semibold rounded-full px-3 py-1 mb-4 ${
                      program.featured ? 'bg-white/20 text-white' : program.tagColor
                    }`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {program.tag}
                  </span>

                  {/* Title */}
                  <h3
                    className={`text-xl font-extrabold uppercase tracking-wide mb-1 ${
                      program.featured ? 'text-white' : 'text-[#0F172A]'
                    }`}
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {program.title}
                  </h3>

                  {/* Age */}
                  <p
                    className={`text-sm font-semibold mb-4 ${
                      program.featured ? 'text-[#F1BE10]' : 'text-[#003399]'
                    }`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {program.age}
                  </p>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      program.featured ? 'text-white/80' : 'text-[#475569]'
                    }`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {program.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {program.highlights.map((h) => (
                      <li
                        key={h}
                        className={`flex items-center gap-2 text-xs font-medium ${
                          program.featured ? 'text-white/75' : 'text-[#475569]'
                        }`}
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            program.featured ? 'bg-[#F1BE10]' : 'bg-[#003399]'
                          }`}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contato"
                    className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-200 ${
                      program.featured
                        ? 'text-[#F1BE10] hover:text-white'
                        : 'text-[#003399] hover:text-[#1a3080]'
                    }`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Saiba mais <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
