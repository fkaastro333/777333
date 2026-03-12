import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Paula S.',
    role: 'Mãe do Pedro, 8 anos',
    text: 'Meu filho começou tímido e hoje é outro menino. A Escola Cruzeiro transformou a autoconfiança dele! Os treinadores são incríveis e o ambiente é muito acolhedor. Recomendo para todas as famílias!',
    rating: 5,
  },
  {
    name: 'Roberto M.',
    role: 'Pai do Guilherme, 11 anos',
    text: 'A metodologia dos treinadores é impressionante. Em poucos meses, vi um desenvolvimento enorme no meu filho, tanto no futebol quanto como pessoa. Uma escola que realmente faz a diferença na vida dos jovens.',
    rating: 5,
  },
  {
    name: 'Fernanda C.',
    role: 'Mãe da Sofia, 6 anos',
    text: 'Ambiente seguro, treinadores atenciosos e minha filha ama cada treino. Ficamos muito felizes com a escolha. Além do futebol, ela aprendeu disciplina e valores que leva para a vida toda.',
    rating: 5,
  },
  {
    name: 'Carlos E.',
    role: 'Pai do Matheus, 13 anos',
    text: 'Meu filho sonha em ser profissional, e a Escola Cruzeiro está ajudando a realizar esse sonho. A estrutura, os treinamentos e o comprometimento do Lucas Willian são de alto nível. Vale cada centavo!',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setIsAnimating(false);
    }, 200);
  }, [isAnimating]);

  const prev = useCallback(() => goTo((current - 1 + testimonials.length) % testimonials.length), [current, goTo]);
  const next = useCallback(() => goTo((current + 1) % testimonials.length), [current, goTo]);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const t = testimonials[current];

  return (
    <section
      id="depoimentos"
      data-testid="testimonials-section"
      className="py-24 bg-[#003399] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-[#F1BE10]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 fade-up">
          <span
            className="inline-block text-[#F1BE10] text-sm font-bold uppercase tracking-widest mb-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Depoimentos
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            O QUE AS <span className="text-[#F1BE10]">FAMÍLIAS</span> DIZEM
          </h2>
        </div>

        {/* Testimonial Card */}
        <div
          data-testid="testimonial-card"
          className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 sm:p-12 transition-opacity duration-200 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Quote size={40} className="text-[#F1BE10] mb-6 opacity-80" />

          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={18} className="text-[#F1BE10] fill-[#F1BE10]" />
            ))}
          </div>

          {/* Text */}
          <blockquote
            className="text-white text-lg sm:text-xl leading-relaxed mb-8 font-light"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            "{t.text}"
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#F1BE10]/20 border-2 border-[#F1BE10]/50 flex items-center justify-center">
              <span
                className="text-[#F1BE10] font-black text-lg"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {t.name[0]}
              </span>
            </div>
            <div>
              <p
                className="text-white font-bold"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {t.name}
              </p>
              <p
                className="text-white/60 text-sm"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {t.role}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                data-testid={`testimonial-dot-${i}`}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-8 h-3 bg-[#F1BE10]'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              data-testid="testimonial-prev"
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition-all flex items-center justify-center"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              data-testid="testimonial-next"
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition-all flex items-center justify-center"
              aria-label="Próximo"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
