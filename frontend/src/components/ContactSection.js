import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Send } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function ContactSection() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    parent_name: '',
    child_age: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await axios.post(`${BACKEND_URL}/api/contact`, form);
      navigate('/obrigado');
    } catch (err) {
      setError('Ocorreu um erro. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contato"
      data-testid="contact-section"
      className="py-24 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <span
            className="inline-block text-[#F1BE10] text-sm font-bold uppercase tracking-widest mb-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Fale Conosco
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#0F172A] uppercase tracking-tight mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            AGENDE SUA <span className="text-[#003399]">AULA GRATUITA</span>
          </h2>
          <p
            className="text-[#475569] text-base max-w-xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Preencha o formulário abaixo e nossa equipe entrará em contato para confirmar sua aula experimental.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Form */}
          <div className="fade-up">
            <form
              data-testid="contact-form"
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="parent_name"
                    className="block text-sm font-semibold text-[#0F172A] mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Nome do Responsável *
                  </label>
                  <input
                    id="parent_name"
                    name="parent_name"
                    type="text"
                    required
                    value={form.parent_name}
                    onChange={handleChange}
                    data-testid="input-parent-name"
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#0F172A] text-sm outline-none focus:border-[#003399] focus:ring-2 focus:ring-[#003399]/20 transition-all"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="child_age"
                    className="block text-sm font-semibold text-[#0F172A] mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Idade da Criança *
                  </label>
                  <input
                    id="child_age"
                    name="child_age"
                    type="text"
                    required
                    value={form.child_age}
                    onChange={handleChange}
                    data-testid="input-child-age"
                    placeholder="Ex: 8 anos"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#0F172A] text-sm outline-none focus:border-[#003399] focus:ring-2 focus:ring-[#003399]/20 transition-all"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[#0F172A] mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Telefone / WhatsApp *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    data-testid="input-phone"
                    placeholder="(27) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#0F172A] text-sm outline-none focus:border-[#003399] focus:ring-2 focus:ring-[#003399]/20 transition-all"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#0F172A] mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Mensagem (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    data-testid="input-message"
                    placeholder="Alguma informação adicional sobre seu filho..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#0F172A] text-sm outline-none focus:border-[#003399] focus:ring-2 focus:ring-[#003399]/20 transition-all resize-none"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  />
                </div>

                {error && (
                  <p
                    data-testid="form-error"
                    className="text-red-600 text-sm"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  data-testid="contact-form-submit"
                  className="w-full bg-[#003399] text-white font-bold uppercase tracking-wide rounded-full py-4 text-sm hover:bg-[#1a3080] hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {loading ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      Agendar Aula Experimental
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="fade-up delay-200 flex flex-col justify-center">
            <h3
              className="text-2xl font-extrabold text-[#0F172A] uppercase tracking-wide mb-8"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              INFORMAÇÕES DE CONTATO
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#003399]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-[#003399]" />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold text-[#0F172A] mb-0.5"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Endereço
                  </p>
                  <p
                    className="text-[#475569] text-sm"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Alvorada, Vila Velha – ES
                    <br />
                    CEP: 29117-270
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={22} className="text-[#25D366]" />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold text-[#0F172A] mb-0.5"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/5527992034728"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-whatsapp"
                    className="text-[#25D366] text-sm hover:underline font-medium"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    (27) 99203-4728
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#003399]/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-[#003399]" />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold text-[#0F172A] mb-0.5"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Telefone
                  </p>
                  <a
                    href="tel:+5527992034728"
                    data-testid="contact-phone"
                    className="text-[#475569] text-sm hover:text-[#003399] transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    (27) 99203-4728
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#003399]/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-[#003399]" />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold text-[#0F172A] mb-0.5"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    E-mail
                  </p>
                  <a
                    href="mailto:vilavelha@escolacruzeiro.com.br"
                    data-testid="contact-email"
                    className="text-[#475569] text-sm hover:text-[#003399] transition-colors break-all"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    vilavelha@escolacruzeiro.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E1306C]/10 flex items-center justify-center flex-shrink-0">
                  <Instagram size={22} className="text-[#E1306C]" />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold text-[#0F172A] mb-0.5"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Instagram
                  </p>
                  <a
                    href="https://instagram.com/escola.cruzeiro.vilavelha"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-instagram"
                    className="text-[#E1306C] text-sm hover:underline"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    @escola.cruzeiro.vilavelha
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Button */}
            <a
              href="https://wa.me/5527992034728?text=Ol%C3%A1!%20Quero%20agendar%20uma%20aula%20experimental%20para%20meu%20filho."
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-whatsapp-button"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold rounded-full px-8 py-4 hover:bg-[#1ebd5b] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <MessageCircle size={22} />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
