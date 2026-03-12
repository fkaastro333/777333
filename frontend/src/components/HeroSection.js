import { ChevronDown } from 'lucide-react';

const HERO_BG = 'https://customer-assets.emergentagent.com/job_academy-talento/artifacts/aoywedwu_532318169_17951559602990849_5719894322516491368_n..webp';
const LOGO_URL = 'https://customer-assets.emergentagent.com/job_academy-talento/artifacts/n8ugzokq_471621460_460486846915306_2809886453613972521_n.jpg';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HERO_BG}')` }}
      />

      {/* Gradiente azul — termina na metade, revelando a foto abaixo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#003399] via-[#003399]/85 via-[45%] to-transparent to-[68%]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-24">

        {/* LOGO EM DESTAQUE */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/20 blur-xl scale-125" />
            <img
              src={LOGO_URL}
              alt="Escola Cruzeiro Vila Velha"
              className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white shadow-[0_0_40px_rgba(255,255,255,0.4)] ring-4 ring-white/30"
            />
          </div>
        </div>

        {/* Nome da Escola */}
        <p
          className="text-white/90 text-sm sm:text-base font-semibold uppercase tracking-[0.25em] mb-6"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Escola Cruzeiro · Vila Velha – ES
        </p>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight mb-5 leading-none"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          TREINA.
          <br />
          <span className="text-white/80">DESENVOLVE.</span>
          <br />
          VENCE.
        </h1>

        {/* Linha divisora */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-white/40" />
          <div className="w-2 h-2 rounded-full bg-white" />
          <div className="h-px w-16 bg-white/40" />
        </div>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-3"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Treinamento profissional de futebol para crianças e adolescentes em Vila Velha.
        </p>
        <p
          className="text-base text-white/60 max-w-xl mx-auto mb-10"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Ajudando jovens atletas a construírem confiança, disciplina e habilidades no futebol.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
          <a
            href="#contato"
            data-testid="hero-cta-primary"
            className="bg-white text-[#003399] font-bold uppercase tracking-wide rounded-full px-10 py-4 text-base hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_24px_rgba(255,255,255,0.3)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.4)] w-full sm:w-auto text-center"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Agendar Aula Gratuita
          </a>
          <a
            href="#programas"
            data-testid="hero-cta-secondary"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold uppercase tracking-wide rounded-full px-10 py-4 text-base transition-all duration-300 w-full sm:w-auto text-center"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Ver Programas
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto">
          {[
            { number: '200+', label: 'Alunos' },
            { number: '5+', label: 'Anos de Experiência' },
            { number: '100%', label: 'Dedicação' },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              {i > 0 && (
                <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 h-8 w-px bg-white/20" />
              )}
              <p
                className="text-2xl sm:text-3xl font-black text-white"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {stat.number}
              </p>
              <p
                className="text-white/55 text-xs sm:text-sm mt-1 leading-tight"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10">
        <p className="text-white/40 text-xs" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Role para baixo
        </p>
        <ChevronDown size={22} className="text-white/40 animate-bounce" />
      </div>
    </section>
  );
}
