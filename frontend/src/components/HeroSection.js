import { ChevronDown } from 'lucide-react';

const HERO_BG = 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=1920&q=85';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url('${HERO_BG}')` }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003399]/92 via-[#003399]/78 to-[#1a3080]/65" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 text-white/90 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-[#F1BE10] rounded-full animate-pulse"></span>
          <span style={{ fontFamily: 'Poppins, sans-serif' }}>Vila Velha – Espírito Santo, Brasil</span>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight mb-6 leading-none"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          TREINA.
          <br />
          <span className="text-[#F1BE10]">DESENVOLVE.</span>
          <br />
          VENCE.
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-3"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Treinamento profissional de futebol para crianças e adolescentes em Vila Velha.
        </p>
        <p
          className="text-base text-white/65 max-w-xl mx-auto mb-10"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Ajudando jovens atletas a construírem confiança, disciplina e habilidades no futebol.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#contato"
            data-testid="hero-cta-primary"
            className="bg-[#F1BE10] text-[#003399] font-bold uppercase tracking-wide rounded-full px-10 py-4 text-base hover:bg-[#D4A000] hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl w-full sm:w-auto text-center"
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
        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-16">
          {[
            { number: '200+', label: 'Alunos' },
            { number: '5+', label: 'Anos de Experiência' },
            { number: '100%', label: 'Dedicação' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-2xl sm:text-3xl font-black text-[#F1BE10]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {stat.number}
              </p>
              <p
                className="text-white/65 text-xs sm:text-sm mt-1 leading-tight"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <p className="text-white/40 text-xs" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Role para baixo
        </p>
        <ChevronDown size={24} className="text-white/40 animate-bounce" />
      </div>
    </section>
  );
}
