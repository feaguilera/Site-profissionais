
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
  ShieldCheck,
  Check,
  Play
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
    <div className="min-h-screen selection:bg-[#AF8F6F] selection:text-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-[#AF8F6F]/10 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => scrollToSection('home')}>
            <span className="text-3xl font-serif font-medium tracking-[0.1em] text-[#1A1A1A] uppercase">Lumière</span>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {['Início', 'Filosofia', 'Protocolos', 'Resultados'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[12px] font-medium tracking-[0.15em] uppercase text-[#1A1A1A]/60 hover:text-[#AF8F6F] transition-all"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-[#1A1A1A] text-white px-8 py-3 text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-[#AF8F6F] transition-all"
            >
              Agendar Consulta
            </button>
          </div>

          <button className="md:hidden text-[#1A1A1A]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Clinic Aesthetic" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDFCFB] to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#AF8F6F]"></div>
              <span className="text-[#AF8F6F] text-[12px] font-bold tracking-[0.3em] uppercase">Excelência em Estética Facial</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-[#1A1A1A] mb-8 leading-[1.1] font-light">
              A ciência da sua <br /><span className="italic">melhor versão.</span>
            </h1>
            <p className="text-xl text-[#1A1A1A]/60 mb-12 leading-relaxed max-w-xl font-light">
              Protocolos personalizados que unem a precisão médica à harmonia estética. Onde cada detalhe é desenhado para realçar sua essência.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="bg-[#AF8F6F] text-white px-10 py-5 font-bold text-[12px] tracking-[0.2em] uppercase hover:bg-[#1A1A1A] transition-all shadow-xl shadow-[#AF8F6F]/20"
              >
                Agendar Avaliação
              </button>
              <button 
                onClick={() => scrollToSection('protocolos')}
                className="group flex items-center gap-4 text-[#1A1A1A] font-bold text-[12px] tracking-[0.2em] uppercase"
              >
                Explorar Protocolos <div className="p-3 border border-[#1A1A1A]/10 rounded-full group-hover:bg-[#1A1A1A] group-hover:text-white transition-all"><ArrowRight size={16} /></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / About */}
      <section id="filosofia" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] bg-[#F4F1EE] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Dermatology Expertise" 
                  className="w-full h-full object-cover grayscale-[0.2]"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 bg-[#AF8F6F] p-12 hidden md:block">
                <p className="text-white text-4xl font-serif mb-2">15+</p>
                <p className="text-white/80 text-[10px] uppercase tracking-widest font-bold">Anos de Experiência</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-serif mb-10 text-[#1A1A1A] leading-tight">Uma abordagem <span className="italic">ética e sutil.</span></h2>
              <p className="text-[#1A1A1A]/60 text-lg mb-12 font-light leading-relaxed">
                Acreditamos que a verdadeira beleza reside na harmonia, não no exagero. Nossa filosofia é pautada em resultados que preservam sua identidade e rejuvenescem com elegância.
              </p>
              
              <div className="grid gap-10">
                {[
                  { title: 'Diagnóstico Avançado', desc: 'Análise detalhada da estrutura dérmica e muscular antes de qualquer intervenção.' },
                  { title: 'Técnicas Refinadas', desc: 'Utilização de microcânulas e pontos estratégicos para o mínimo de trauma e máximo resultado.' },
                  { title: 'Bio-Integração', desc: 'Produtos que se integram perfeitamente ao seu tecido, garantindo naturalidade ao sorrir e falar.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 border border-[#AF8F6F]/20 flex items-center justify-center rounded-full text-[#AF8F6F]">
                      <Check size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A1A1A] uppercase tracking-widest text-[13px] mb-2">{item.title}</h4>
                      <p className="text-[#1A1A1A]/50 text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Collection */}
      <section id="protocolos" className="py-32 bg-[#F4F1EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#AF8F6F] text-[11px] font-bold tracking-[0.3em] uppercase mb-4 block">The Treatment Gallery</span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A]">Protocolos de <span className="italic">Assinatura.</span></h2>
            </div>
            <p className="text-[#1A1A1A]/40 max-w-xs text-sm font-light">Procedimentos minimamente invasivos com foco em alta definição e regeneração celular.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-white p-2 premium-shadow transition-all duration-700 hover:-translate-y-2">
                <div className="aspect-[3/4] overflow-hidden relative mb-8">
                  <img src={`https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sig=${service.id}`} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[#1A1A1A]/10 group-hover:bg-transparent transition-colors"></div>
                  {service.tag && (
                    <div className="absolute top-6 left-6 bg-[#AF8F6F] text-white px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase">
                      {service.tag}
                    </div>
                  )}
                </div>
                <div className="p-6 pt-0">
                  <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">{service.title}</h3>
                  <p className="text-[#1A1A1A]/50 text-sm font-light leading-relaxed mb-8 line-clamp-3">{service.description}</p>
                  <div className="flex items-center justify-between border-t border-[#F4F1EE] pt-6">
                    <span className="text-[#AF8F6F] font-medium text-sm tracking-widest uppercase">{service.price}</span>
                    <button className="text-[#1A1A1A] text-[10px] font-bold tracking-widest uppercase hover:text-[#AF8F6F] transition-colors">Detalhes</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 mx-auto mb-8 border border-[#AF8F6F]/10 flex items-center justify-center rounded-full text-[#AF8F6F] bg-[#FDFCFB]">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-[#1A1A1A] uppercase tracking-[0.2em] text-[12px] mb-4">{benefit.title}</h4>
                <p className="text-[#1A1A1A]/40 text-sm font-light leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="resultados" className="py-32 bg-[#F4F1EE] overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-5 hidden lg:block">
          <span className="text-[200px] font-serif font-bold italic leading-none">L</span>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-20 text-center">Transformações <span className="italic">Reais.</span></h2>
          <div className="grid md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white p-12 border border-[#AF8F6F]/5 relative">
                <div className="flex text-[#AF8F6F] mb-8">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-[#1A1A1A]/70 font-light italic text-lg leading-relaxed mb-10">"{t.content}"</p>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-[#AF8F6F]/20">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <h4 className="text-[#1A1A1A] font-bold text-[12px] tracking-widest uppercase">{t.name}</h4>
                    <p className="text-[#AF8F6F] text-[10px] uppercase tracking-widest mt-1 font-bold">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif text-[#1A1A1A] mb-4">Perguntas Frequentes</h2>
            <div className="h-[1px] w-12 bg-[#AF8F6F] mx-auto"></div>
          </div>
          <div className="space-y-4">
            {FAQ.map((item, idx) => (
              <div key={idx} className="border-b border-[#F4F1EE]">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full py-8 text-left flex justify-between items-center group"
                >
                  <span className="text-[#1A1A1A] font-medium tracking-wide group-hover:text-[#AF8F6F] transition-colors">{item.question}</span>
                  <div className={`text-[#AF8F6F] transition-transform duration-500 ${activeFaq === idx ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} strokeWidth={1.5} />
                  </div>
                </button>
                {activeFaq === idx && (
                  <div className="pb-8 animate-in slide-in-from-top-2 duration-500">
                    <p className="text-[#1A1A1A]/50 text-sm font-light leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-[#1A1A1A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Texture" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">Agende seu momento <br /><span className="italic text-[#AF8F6F]">de renovação.</span></h2>
          <p className="text-white/60 text-xl mb-16 font-light max-w-2xl mx-auto">
            Estamos prontos para desenhar seu novo protocolo exclusivo. Entre em contato com nosso atendimento concierge.
          </p>
          <button 
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            className="bg-[#AF8F6F] text-white px-16 py-6 font-bold text-[12px] tracking-[0.3em] uppercase hover:bg-white hover:text-[#1A1A1A] transition-all shadow-2xl"
          >
            Falar no WhatsApp VIP
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FDFCFB] pt-32 pb-16 border-t border-[#F4F1EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
            <div className="col-span-1 md:col-span-1">
              <span className="text-2xl font-serif font-medium tracking-widest text-[#1A1A1A] uppercase block mb-10">Lumière</span>
              <p className="text-[#1A1A1A]/40 text-xs leading-relaxed uppercase tracking-[0.2em] mb-10">
                Onde a precisão clínica encontra a arte da beleza natural.
              </p>
              <div className="flex gap-8 opacity-40">
                <a href="#" className="hover:text-[#AF8F6F] transition-all"><Clock size={20} /></a>
                <a href="#" className="hover:text-[#AF8F6F] transition-all"><MapPin size={20} /></a>
              </div>
            </div>

            {[
              { title: 'Explore', links: ['Protocolos', 'Filosofia', 'Equipe', 'Resultados'] },
              { title: 'Contato', links: ['+55 11 99999.9999', 'concierge@lumiere.com', 'São Paulo, Brasil'] },
              { title: 'Unidades', links: ['Jardins, SP', 'Itaim Bibi, SP', 'Barra, RJ'] }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="text-[#AF8F6F] mb-10 text-[10px] font-bold uppercase tracking-[0.4em]">{col.title}</h4>
                <ul className="space-y-6 text-[#1A1A1A]/50 text-[11px] font-medium tracking-widest uppercase">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx} className="hover:text-[#AF8F6F] transition-colors cursor-pointer">{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-[#F4F1EE] pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A]/20">
            <p>© 2024 Lumière Clinic Aesthetics. Registrado e Certificado.</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-[#1A1A1A]">Termos</a>
              <a href="#" className="hover:text-[#1A1A1A]">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Concierge Button */}
      <button 
        onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
        className="fixed bottom-10 right-10 bg-[#1A1A1A] text-white p-5 rounded-full shadow-2xl hover:scale-110 hover:bg-[#AF8F6F] transition-all z-50 group"
      >
        <MessageCircle size={24} />
      </button>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-[#F4F1EE] p-5 z-40 flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#AF8F6F]">Concierge Online</span>
        <button 
          onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
          className="bg-[#1A1A1A] text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest"
        >
          Agendar
        </button>
      </div>
    </div>
  );
};

export default App;
