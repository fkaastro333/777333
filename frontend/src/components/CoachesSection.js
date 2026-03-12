import { Instagram } from 'lucide-react';

const COACH_IMG = 'https://images.unsplash.com/photo-1585757318177-0570a997dc3a?w=400&q=85';

const coaches = [
  {
    name: 'Lucas Willian',
    role: 'Treinador Principal',
    description:
      'Apaixonado pelo futebol e pelo desenvolvimento juvenil, Lucas Willian é especialista em formação de jovens atletas. Sua metodologia combina técnica moderna com valores humanos, criando um ambiente de aprendizado positivo e motivador para cada aluno.',
    instagram: '@prof.lucaswill',
    instagramUrl: 'https://instagram.com/prof.lucaswill',
    image: COACH_IMG,
    badges: ['UEFA Licenciado', 'Formação Infantil', 'Preparação Física'],
  },
];

export default function CoachesSection() {
  return (
    <section
      id="treinadores"
      data-testid="coaches-section"
      className="py-24 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <span
            className="inline-block text-[#003399] text-sm font-bold uppercase tracking-widest mb-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Equipe Técnica
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#0F172A] uppercase tracking-tight mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            CONHEÇA NOSSO <span className="text-[#003399]">TREINADOR</span>
          </h2>
          <p
            className="text-[#475569] text-base max-w-xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Profissional qualificado dedicado ao desenvolvimento técnico e humano de cada aluno.
          </p>
        </div>

        {/* Coach Card */}
        <div className="max-w-3xl mx-auto">
          {coaches.map((coach, index) => (
            <div
              key={coach.name}
              data-testid={`coach-card-${index}`}
              className="fade-up group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-400"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-72 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003399]/60 to-transparent md:bg-gradient-to-r" />
                  {/* Overlay Badge */}
                  <div className="absolute bottom-4 left-4 md:hidden">
                    <h3
                      className="text-white font-black text-xl uppercase"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {coach.name}
                    </h3>
                    <p className="text-[#F1BE10] text-sm font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {coach.role}
                    </p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="hidden md:block mb-4">
                    <h3
                      className="text-2xl font-black text-[#0F172A] uppercase tracking-wide"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {coach.name}
                    </h3>
                    <p
                      className="text-[#003399] font-semibold text-sm mt-1"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {coach.role}
                    </p>
                  </div>

                  <p
                    className="text-[#475569] text-sm leading-relaxed mb-6"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {coach.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {coach.badges.map((badge) => (
                      <span
                        key={badge}
                        className="bg-[#003399]/10 text-[#003399] text-xs font-semibold rounded-full px-3 py-1.5"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Instagram */}
                  <a
                    href={coach.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`coach-instagram-${index}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#E1306C] hover:text-[#C13584] transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <Instagram size={18} />
                    {coach.instagram}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
