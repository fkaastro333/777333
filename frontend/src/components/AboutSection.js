import { CheckCircle2 } from 'lucide-react';

const ABOUT_IMG = 'https://images.unsplash.com/photo-1695049391011-c69383402fc9?w=800&q=85';

const values = [
  'Disciplina e foco dentro e fora do campo',
  'Trabalho em equipe e respeito ao próximo',
  'Autoconfiança e desenvolvimento pessoal',
  'Estilo de vida saudável e ativo',
  'Formação humana além do esporte',
];

export default function AboutSection() {
  return (
    <section
      id="sobre"
      data-testid="about-section"
      className="py-24 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="slide-left relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={ABOUT_IMG}
                alt="Crianças treinando futebol"
                className="w-full h-80 lg:h-[480px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003399]/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#003399] text-white rounded-2xl p-6 shadow-2xl">
              <p
                className="text-3xl font-black text-white"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                5+
              </p>
              <p
                className="text-xs text-white/80 font-medium mt-1"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Anos formando
                <br />campeões
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="slide-right">
            <span
              className="inline-block text-[#003399] text-sm font-bold uppercase tracking-widest mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Nossa História
            </span>
            <h2
              className="text-4xl sm:text-5xl font-black text-[#0F172A] uppercase tracking-tight mb-6 leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              MAIS QUE UM <span className="text-[#003399]">CLUBE,</span>
              <br />
              UMA FAMÍLIA.
            </h2>
            <p
              className="text-[#475569] text-base leading-relaxed mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              A <strong className="text-[#003399]">Escola Cruzeiro Vila Velha</strong> nasceu com um objetivo claro:
              oferecer às crianças e adolescentes de Vila Velha um espaço profissional de
              desenvolvimento esportivo, onde o futebol é o meio, e a formação humana é o fim.
            </p>
            <p
              className="text-[#475569] text-base leading-relaxed mb-8"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Acreditamos que o esporte transforma vidas. Por isso, trabalhamos com uma metodologia
              que vai além das técnicas do futebol — construímos valores, caráter e amizades para a vida toda.
            </p>

            {/* Values */}
            <ul className="space-y-3 mb-10">
              {values.map((value) => (
                <li
                  key={value}
                  className="flex items-center gap-3"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <CheckCircle2 size={20} className="text-[#003399] flex-shrink-0" />
                  <span className="text-[#475569] text-sm">{value}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contato"
              data-testid="about-cta"
              className="inline-block bg-[#003399] text-white font-bold uppercase tracking-wide rounded-full px-8 py-4 text-sm hover:bg-[#1a3080] hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Quero Saber Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
