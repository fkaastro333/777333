export default function MobileCTA() {
  return (
    <div
      data-testid="mobile-sticky-cta"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#003399] px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.15)]"
    >
      <a
        href="#contato"
        data-testid="mobile-sticky-cta-btn"
        className="block w-full bg-white text-[#003399] text-center font-bold uppercase tracking-wide py-3 rounded-full text-sm hover:bg-white/90 transition-colors duration-200"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        Agendar Aula Gratuita
      </a>
    </div>
  );
}
