
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Star, 
  ChevronDown, 
  MessageCircle,
  Clock,
  MapPin,
  Check,
  Instagram,
  ShieldCheck,
  Users,
  Award,
  Sparkles
} from 'lucide-react';
import { SERVICES, TESTIMONIALS, FAQ, BENEFITS } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen selection:bg-[#8D86C9] selection:text-white">
      {/* Header */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-celestial py-4' : 'bg-transparent py-7'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <span className="text-2xl font-serif font-bold tracking-tight text-[#242038]">Lumière</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#8D86C9] mt-2"></div>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {['Expertise', 'Protocolos', 'Resultados', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#242038]/70 hover:text-[#8D86C9] transition-all"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-[#242038] text-white px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-[#8D86C9] transition-all shadow-lg"
            >
              Agendar Exclusive
            </button>
          </div>

          <button className="md:hidden text-[#242038]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-[#F8F9FF] z-50 flex flex-col p-10 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex justify-between items-center mb-16">
              <span className="text-2xl font-serif font-bold">Lumière</span>
              <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-6">
              {['Expertise', 'Protocolos', 'Resultados', 'FAQ'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-3xl font-serif text-left border-b border-[#ECEAF4] pb-4"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="bg-[#242038] text-white py-5 rounded-full font-bold mt-10 uppercase tracking-widest text-sm"
              >
                WhatsApp Concierge
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-3 mb-8 bg-[#ECEAF4] px-5 py-2 rounded-full border border-[#8D86C9]/20">
              <Sparkles size={16} className="text-[#8D86C9]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#242038]">Alta Tecnologia Facial</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-[#242038] mb-8 leading-[1.05] font-normal">
              A ciência do <br />
              <span className="italic text-[#8D86C9]">bem-viver.</span>
            </h1>
            <p className="text-lg text-[#242038]/60 mb-12 leading-relaxed max-w-xl font-light">
              Protocolos de precisão cirúrgica sem cortes. Na Lumière, unimos biotecnologia avançada a um ambiente de serenidade para revelar sua versão mais luminosa.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="bg-[#242038] text-white px-12 py-5 rounded-full font-bold text-[12px] tracking-[0.3em] uppercase hover:bg-[#8D86C9] transition-all shadow-xl shadow-[#242038]/10"
              >
                Solicitar Consulta
              </button>
              <button 
                onClick={() => scrollToSection('protocolos')}
                className="flex items-center gap-4 px-10 py-5 border border-[#242038]/10 rounded-full font-bold text-[12px] tracking-[0.3em] uppercase hover:bg-white hover:border-[#8D86C9] transition-all"
              >
                Conhecer Métodos <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-[4rem] overflow-hidden aspect-[4/5] border-[16px] border-white shadow-celestial">
              <img 
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Clinic High Tech" 
                className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#8D86C9]/15 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#242038]/5 rounded-full blur-2xl -z-0"></div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-32 bg-[#ECEAF4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center mb-32">
            <div>
              <span className="text-[#8D86C9] text-[11px] font-bold tracking-[0.4em] uppercase mb-6 block">Nossa Expertise</span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#242038] leading-tight italic">Excelência em cada detalhe.</h2>
            </div>
            <p className="text-[#242038]/50 text-xl font-light leading-relaxed">
              Unimos diagnósticos baseados em inteligência artificial com a sensibilidade clínica para garantir resultados matematicamente perfeitos e visualmente naturais.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-celestial transition-all duration-500 border border-[#8D86C9]/5">
                <div className="mb-10 text-[#8D86C9]">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-[#242038] uppercase tracking-[0.2em] text-[11px] mb-4">{benefit.title}</h4>
                <p className="text-[#242038]/40 text-sm font-light leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocols */}
      <section id="protocolos" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-serif text-[#242038] mb-6">Tratamentos de Elite</h2>
            <div className="w-16 h-[1px] bg-[#8D86C9] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {SERVICES.map((service) => (
              <div key={service.id} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden mb-8 relative rounded-[3rem]">
                  <img src={`https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sig=${service.id}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-[#242038]/20 group-hover:bg-transparent transition-all"></div>
                  {service.tag && (
                    <div className="absolute top-6 left-6 bg-[#8D86C9] text-white px-4 py-1.5 text-[9px] font-bold tracking-[0.3em] uppercase rounded-full">
                      {service.tag}
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-serif text-[#242038] mb-3">{service.title}</h3>
                <p className="text-[#242038]/40 text-sm font-light leading-relaxed mb-6 line-clamp-2">{service.description}</p>
                <div className="flex items-center justify-between border-t border-[#ECEAF4] pt-6">
                  <span className="text-[#8D86C9] font-bold text-xs tracking-widest uppercase">{service.price}</span>
                  <button className="text-[#242038] text-[10px] font-bold uppercase tracking-widest border-b border-[#242038]/10 hover:border-[#8D86C9] transition-all">Ver Protocolo</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="resultados" className="py-32 bg-[#ECEAF4]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#242038] mb-20 italic">Relatos de Satisfação</h2>
          <div className="grid md:grid-cols-3 gap-16">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-10 border-4 border-white shadow-md group-hover:border-[#8D86C9] transition-all duration-500">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale-[0.8] group-hover:grayscale-0 transition-all" />
                </div>
                <p className="text-[#242038]/60 italic text-lg leading-relaxed mb-10 font-light max-w-xs">"{t.content}"</p>
                <h4 className="font-bold text-[#242038] text-xs tracking-[0.3em] uppercase">{t.name}</h4>
                <p className="text-[#8D86C9] text-[9px] font-bold uppercase tracking-widest mt-2">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-[#242038] mb-16 text-center">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {FAQ.map((item, idx) => (
              <div key={idx} className="border-b border-[#ECEAF4]">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full py-8 text-left flex justify-between items-center group"
                >
                  <span className="text-[#242038]/80 font-bold tracking-wide group-hover:text-[#8D86C9] transition-colors">{item.question}</span>
                  <div className={`text-[#8D86C9] transition-transform duration-500 ${activeFaq === idx ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                {activeFaq === idx && (
                  <div className="pb-8 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-[#242038]/40 text-sm font-light leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-[#242038] text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,_#8D86C9_0%,_transparent_100%)]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-8xl font-serif mb-12 leading-tight">Resultados que <br /> <span className="italic text-[#8D86C9]">falam por você.</span></h2>
          <p className="text-white/40 text-xl mb-16 font-light">Agenda de novos pacientes disponível para os próximos 15 dias.</p>
          <button 
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            className="bg-[#8D86C9] text-white px-16 py-6 rounded-full font-bold text-sm tracking-[0.4em] uppercase hover:bg-white hover:text-[#242038] transition-all shadow-2xl"
          >
            Agendar Via WhatsApp
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-32 pb-16 border-t border-[#ECEAF4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
            <div className="col-span-1 md:col-span-1">
              <span className="text-2xl font-serif font-bold tracking-tight text-[#242038] uppercase mb-10 block">Lumière</span>
              <p className="text-[#242038]/30 text-[10px] leading-relaxed uppercase tracking-[0.3em] font-bold mb-10">
                Liderança em Estética Bio-Regenerativa. <br />São Paulo, Brasil.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-[#242038]/30 hover:text-[#8D86C9] transition-all"><Instagram size={20} /></a>
                <a href="#" className="text-[#242038]/30 hover:text-[#8D86C9] transition-all"><MessageCircle size={20} /></a>
              </div>
            </div>

            {[
              { title: 'Plataforma', links: ['Home', 'Metodologia', 'Protocolos', 'FAQ'] },
              { title: 'Conectar', links: ['+55 11 99999.9999', 'contato@lumiere.com', 'São Paulo, SP'] },
              { title: 'Jurídico', links: ['Privacidade', 'Termos', 'Ética Médica'] }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="text-[#8D86C9] mb-10 text-[10px] font-bold uppercase tracking-[0.4em]">{col.title}</h4>
                <ul className="space-y-6 text-[#242038]/50 text-[11px] font-bold tracking-widest uppercase">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx} className="hover:text-[#8D86C9] transition-colors cursor-pointer">{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-[#ECEAF4] pt-12 text-center text-[9px] font-bold uppercase tracking-[0.4em] text-[#242038]/20">
            <p>© 2024 Lumière Private Aesthetics. Protocolos Registrados.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <button 
        onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
        className="fixed bottom-10 right-10 bg-[#242038] text-white p-5 rounded-full shadow-2xl hover:scale-110 hover:bg-[#8D86C9] transition-all z-50 flex items-center gap-3"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default App;
