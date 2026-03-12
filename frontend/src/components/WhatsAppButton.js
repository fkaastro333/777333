import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5527992034728?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20a%20Escola%20Cruzeiro%20Vila%20Velha."
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-floating-btn"
      className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all duration-300"
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
