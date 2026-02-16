
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  MessageCircle,
  Instagram,
  Sparkles,
  Heart,
  Star,
  ShieldCheck,
  Flower
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
    <div className="min-h-screen selection:bg-[#D8A48F] selection:text-white">
      {/* Header */}
      <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-luxury py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col cursor-pointer" onClick={() => scrollToSection('home')}>
            <span className="text-3xl font-serif font-bold tracking-widest text-[#5D3A3A] uppercase">Lumière</span>
            <span className="text-[8px] font-bold tracking-[0.5em] text-[#D8A48F] uppercase ml-1">Estética & Bem-estar</span>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {['Expertise', 'Protocolos', 'Resultados', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#5D3A3A]/60 hover:text-[#D8A48F] transition-all"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-[#5D3A3A] text-white px-10 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] btn-female shadow-lg"
            >
              Agendar Reserva
            </button>
          </div>

          <button className="md:hidden text-[#5D3A3A]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-[#FDF9F8] z-50 flex flex-col p-12 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex justify-between items-center mb-20">
              <span className="text-2xl font-serif font-bold uppercase tracking-widest">Lumière</span>
              <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-10">
              {['Expertise', 'Protocolos', 'Resultados', 'FAQ'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-4xl font-serif text-left border-b border-[#F7EFEF] pb-6 text-[#5D3A3A]"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="bg-[#D8A48F] text-white py-6 rounded-2xl font-bold mt-10 uppercase tracking-widest text-xs"
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
          <div className="z-10 animate-in fade-in duration-1000">
            <div className="inline-flex items-center gap-3 mb-12 bg-white px-6 py-2 rounded-full shadow-sm border border-[#F7EFEF]">
              <Flower size={14} className="text-[#D8A48F]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#5D3A3A]">Curadoria de Beleza Feminina</span>
            </div>
            <h1 className="text-6xl md:text-[5.5rem] font-serif text-[#5D3A3A] mb-10 leading-[1.1] font-normal">
              Refine sua <br />
              <span className="italic text-[#D8A48F]">melhor versão.</span>
            </h1>
            <p className="text-lg text-[#5D3A3A]/60 mb-14 leading-relaxed max-w-lg font-light">
              Protocolos de precisão médica desenhados para exaltar a feminilidade com naturalidade. A ciência do rejuvenescimento em um ambiente de absoluta sofisticação.
            </p>
            <div className="flex flex-col sm:row gap-8">
              <button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="bg-[#5D3A3A] text-white px-16 py-6 rounded-full font-bold text-[11px] tracking-[0.3em] uppercase btn-female shadow-2xl shadow-[#5D3A3A]/20"
              >
                Solicitar Avaliação
              </button>
              <button 
                onClick={() => scrollToSection('protocolos')}
                className="flex items-center gap-4 px-6 py-6 font-bold text-[11px] tracking-[0.3em] uppercase text-[#D8A48F] hover:text-[#5D3A3A] transition-all"
              >
                Conheça os Protocolos <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in zoom-in duration-1000">
            <div className="relative z-10 rounded-t-[15rem] rounded-b-[2rem] overflow-hidden aspect-[3/4] shadow-luxury border-[12px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Professional Aesthetic Excellence" 
                className="w-full h-full object-cover grayscale-[0.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5D3A3A]/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#D8A48F]/15 rounded-full blur-3xl -z-0"></div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-32 bg-[#F7EFEF]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-32">
            <span className="text-[#D8A48F] text-[10px] font-bold tracking-[0.5em] uppercase mb-8 block">Nossa Filosofia</span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#5D3A3A] mb-10 italic">O equilíbrio entre técnica e sensibilidade.</h2>
            <p className="text-[#5D3A3A]/50 text-xl font-light leading-relaxed">
              Trabalhamos para que os resultados sejam sentidos, não apenas vistos. Uma abordagem que respeita sua anatomia e celebra sua singularidade.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="bg-white p-14 rounded-3xl shadow-sm hover:shadow-luxury transition-all duration-700 group border border-transparent hover:border-[#F7EFEF]">
                <div className="mb-10 text-[#D8A48F] group-hover:scale-110 transition-transform duration-500 inline-block">
                  {idx === 0 ? <ShieldCheck size={28} /> : idx === 1 ? <Star size={28} /> : idx === 2 ? <Heart size={28} /> : <Sparkles size={28} />}
                </div>
                <h4 className="font-bold text-[#5D3A3A] uppercase tracking-[0.3em] text-[10px] mb-5">{benefit.title}</h4>
                <p className="text-[#5D3A3A]/40 text-xs font-light leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocols */}
      <section id="protocolos" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-20 items-center mb-32">
            <div className="md:col-span-5">
              <h2 className="text-5xl md:text-7xl font-serif text-[#5D3A3A] mb-10 leading-tight">Protocolos de <br /><span className="italic">Assinatura.</span></h2>
              <p className="text-[#5D3A3A]/40 text-lg font-light mb-12">Uma seleção rigorosa de procedimentos de última geração para rosto e corpo.</p>
              <div className="flex gap-4">
                <div className="w-12 h-[1px] bg-[#D8A48F] mt-3"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D8A48F]">Luxury Collection 2024</span>
              </div>
            </div>
            <div className="md:col-span-7 grid md:grid-cols-2 gap-10">
              {SERVICES.slice(0, 2).map((service) => (
                <div key={service.id} className="group cursor-pointer">
                  <div className="aspect-square rounded-full overflow-hidden mb-10 border-8 border-[#F7EFEF] shadow-sm group-hover:border-[#D8A48F] transition-all duration-1000">
                    <img src={`https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&sig=${service.id}`} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#5D3A3A] mb-3">{service.title}</h3>
                  <p className="text-[#5D3A3A]/40 text-xs mb-6 leading-relaxed">{service.description}</p>
                  <span className="text-[#D8A48F] font-bold text-[10px] tracking-widest uppercase">{service.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="resultados" className="py-40 bg-[#5D3A3A] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-serif mb-6 italic">Relatos de Excelência</h2>
            <div className="flex justify-center gap-1 text-[#D8A48F]">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-10 border-2 border-[#D8A48F] p-1">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover rounded-full grayscale" />
                </div>
                <p className="text-white/60 italic text-lg leading-relaxed mb-10 font-light max-w-xs">"{t.content}"</p>
                <h4 className="font-bold text-white text-[10px] tracking-[0.4em] uppercase">{t.name}</h4>
                <p className="text-[#D8A48F] text-[9px] font-bold uppercase tracking-widest mt-2">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-40 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-serif text-[#5D3A3A] mb-4">Dúvidas Frequentes</h2>
            <p className="text-[#5D3A3A]/40 uppercase tracking-[0.3em] text-[10px] font-bold">Transparência e Ética</p>
          </div>
          <div className="space-y-6">
            {FAQ.map((item, idx) => (
              <div key={idx} className="border-b border-[#F7EFEF]">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full py-10 text-left flex justify-between items-center group"
                >
                  <span className="text-[#5D3A3A] text-xl font-medium tracking-tight group-hover:text-[#D8A48F] transition-colors">{item.question}</span>
                  <div className={`text-[#D8A48F] transition-all duration-500 ${activeFaq === idx ? 'rotate-180 scale-110' : ''}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-700 ${activeFaq === idx ? 'max-h-96 opacity-100 pb-10' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[#5D3A3A]/50 text-lg font-light leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-48 bg-[#F7EFEF] relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-8xl font-serif text-[#5D3A3A] mb-16 leading-tight">Manifeste sua <br /> <span className="italic text-[#D8A48F]">melhor essência.</span></h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-[#5D3A3A] text-white px-20 py-7 rounded-full font-bold text-[10px] tracking-[0.5em] uppercase btn-female shadow-2xl"
            >
              Agendar Concierge
            </button>
          </div>
          <p className="mt-12 text-[#5D3A3A]/30 text-[9px] font-bold uppercase tracking-[0.4em]">Atendimento exclusivo com hora marcada</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-40 pb-20 border-t border-[#F7EFEF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-40">
            <div className="col-span-1">
              <span className="text-3xl font-serif font-bold text-[#5D3A3A] block mb-12 uppercase tracking-widest">Lumière</span>
              <p className="text-[#5D3A3A]/40 text-[9px] leading-loose uppercase tracking-[0.4em] font-bold mb-12">
                Referência em Estética Feminina & Rejuvenescimento Natural. <br />São Paulo, Brasil.
              </p>
              <div className="flex gap-8">
                <a href="#" className="text-[#5D3A3A]/40 hover:text-[#D8A48F] transition-all"><Instagram size={20} /></a>
                <a href="#" className="text-[#5D3A3A]/40 hover:text-[#D8A48F] transition-all"><MessageCircle size={20} /></a>
              </div>
            </div>

            {[
              { title: 'The Brand', links: ['Início', 'Sobre', 'Protocolos', 'Agendamento'] },
              { title: 'Localização', links: ['+55 11 99999.9999', 'contato@lumiere.com', 'Unidade Jardins/SP'] },
              { title: 'Legal', links: ['Privacidade', 'Termos', 'Ética Médica'] }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="text-[#D8A48F] mb-12 text-[10px] font-bold uppercase tracking-[0.5em]">{col.title}</h4>
                <ul className="space-y-8 text-[#5D3A3A]/60 text-[10px] font-bold tracking-[0.3em] uppercase">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx} className="hover:text-[#D8A48F] transition-colors cursor-pointer">{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-[#F7EFEF] pt-16 flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#5D3A3A]/20">© 2024 Lumière Private Aesthetics. Responsabilidade Técnica: Dra. CRM/SP.</p>
            <div className="flex gap-10 opacity-20 text-[9px] font-bold uppercase tracking-[0.4em] text-[#5D3A3A]">
              <span>Beauty</span>
              <span>Wellness</span>
              <span>Luxury</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <button 
        onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
        className="fixed bottom-12 right-12 bg-[#D8A48F] text-white p-6 rounded-full shadow-2xl hover:scale-110 hover:bg-[#5D3A3A] transition-all z-50 flex items-center gap-4"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default App;
