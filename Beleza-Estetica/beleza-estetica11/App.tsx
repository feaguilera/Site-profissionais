
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
  Users
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
    <div className="min-h-screen selection:bg-[#E8D5CC] selection:text-[#2D3436]">
      {/* Dynamic Header */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-7'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <span className="text-2xl font-serif font-bold tracking-tighter text-[#1A1A1A]">Lumière</span>
            <div className="w-1.5 h-1.5 rounded-full bg-quartz mt-2"></div>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {['Expertise', 'Tratamentos', 'Resultados', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[13px] font-semibold text-[#1A1A1A]/70 hover:text-quartz transition-all"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-graphite text-white px-7 py-3 rounded-full text-[12px] font-bold uppercase tracking-wider hover:bg-quartz hover:text-graphite transition-all shadow-lg"
            >
              Agendar Avaliação
            </button>
          </div>

          <button className="md:hidden text-graphite" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col p-10 animate-in fade-in duration-300">
            <div className="flex justify-between items-center mb-20">
              <span className="text-2xl font-serif font-bold">Lumière</span>
              <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8">
              {['Expertise', 'Tratamentos', 'Resultados', 'FAQ'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-4xl font-serif text-left border-b border-[#FAF7F5] pb-4"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="bg-graphite text-white py-5 rounded-full font-bold mt-10"
              >
                Conversar no WhatsApp
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero: Asymmetric Modernist */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <div className="inline-flex items-center gap-3 mb-6 bg-white px-4 py-2 rounded-full border border-quartz/20 shadow-sm">
              <Star size={14} className="text-quartz fill-quartz" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">Estética de Alto Padrão</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-[#1A1A1A] mb-8 leading-[1] font-normal">
              Reinvente sua <br />
              <span className="italic text-quartz">expressão natural.</span>
            </h1>
            <p className="text-lg text-[#3D3D3D]/70 mb-10 leading-relaxed max-w-lg font-medium">
              A Lumière une a expertise médica internacional com um olhar artístico para criar resultados que exaltam quem você realmente é. Sem exageros, apenas harmonia.
            </p>
            <div className="flex flex-wrap gap-5">
              <button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="bg-graphite text-white px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-quartz hover:text-graphite transition-all shadow-xl hover:-translate-y-1"
              >
                Solicitar Orçamento
              </button>
              <button 
                onClick={() => scrollToSection('tratamentos')}
                className="flex items-center gap-3 px-8 py-5 border border-graphite/10 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white transition-all"
              >
                Ver Protocolos <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-[4rem] overflow-hidden soft-glow aspect-[4/5] border-[12px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Natural Beauty" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-quartz/20 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-[2rem] shadow-xl z-20 hidden md:block border border-quartz/10">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <img src={`https://picsum.photos/seed/${i*10}/100/100`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-bold text-[#1A1A1A]">+2k Clientes Felizes</span>
              </div>
              <p className="text-[10px] text-graphite/40 font-bold uppercase tracking-widest">Referência em São Paulo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise / Philosophy */}
      <section id="expertise" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] mb-6 italic">O Equilíbrio entre Ciência e Arte</h2>
            <p className="text-[#3D3D3D]/60 max-w-2xl mx-auto text-lg leading-relaxed">
              Diferente de clínicas convencionais, na Lumière cada milímetro é planejado digitalmente para garantir que sua identidade permaneça intacta.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              { 
                title: 'Arquitetura Facial', 
                desc: 'Análise 3D da estrutura óssea para reposicionamento volumétrico estratégico.',
                icon: <ShieldCheck className="text-quartz" size={32} />
              },
              { 
                title: 'Regeneração Profunda', 
                desc: 'Foco na saúde da barreira cutânea e estímulo biológico de colágeno real.',
                icon: <Clock className="text-quartz" size={32} />
              },
              { 
                title: 'Atendimento Boutique', 
                desc: 'Consultas longas, sem pressa, com foco total na sua queixa e bem-estar.',
                icon: <Users className="text-quartz" size={32} />
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-10 rounded-[3rem] bg-[#FAF7F5] border border-transparent hover:border-quartz/20 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="mb-8 p-4 bg-white rounded-2xl inline-block shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-serif text-[#1A1A1A] mb-4">{item.title}</h4>
                <p className="text-graphite/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments: Editorial Layout */}
      <section id="tratamentos" className="py-32 bg-[#FAF7F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-quartz text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Selection Noir</span>
              <h2 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-tight">Protocolos de <br /> <span className="italic">Assinatura</span></h2>
            </div>
            <button className="text-graphite font-bold uppercase tracking-widest text-xs border-b-2 border-quartz pb-2 hover:text-quartz transition-colors">Ver portfólio completo</button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, idx) => (
              <div key={service.id} className="relative bg-white p-4 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all duration-700 group">
                <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-8 relative">
                  <img src={`https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sig=${idx}`} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-8 left-8">
                     <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase opacity-80 mb-2 block">{service.tag || 'Exclusive'}</span>
                     <h3 className="text-2xl font-serif text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="px-6 pb-8">
                  <p className="text-graphite/50 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-graphite font-bold text-xs tracking-widest uppercase">{service.price}</span>
                    <button 
                      onClick={() => window.open(`https://wa.me/5511999999999?text=Olá, quero saber mais sobre ${service.title}`, '_blank')}
                      className="w-12 h-12 bg-graphite text-white rounded-full flex items-center justify-center hover:bg-quartz transition-colors"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials: Visual Quote Style */}
      <section id="resultados" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <span className="text-[30rem] font-serif font-bold italic absolute -top-40 -left-20">L</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] mb-8 italic">O que dizem sobre nós</h2>
            <div className="flex gap-1 text-quartz">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-[#FAF7F5] p-12 rounded-[4rem] flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all duration-500">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border-4 border-white shadow-lg">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <p className="text-graphite/60 italic text-lg leading-relaxed mb-10">"{t.content}"</p>
                <div>
                  <h4 className="text-xl font-serif font-bold text-[#1A1A1A]">{t.name}</h4>
                  <p className="text-quartz text-[10px] font-bold uppercase tracking-[0.3em] mt-2">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ: Clean Accordion */}
      <section id="faq" className="py-32 bg-[#FAF7F5]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-16 text-center italic">Esclarecendo Suas Dúvidas</h2>
          <div className="space-y-4">
            {FAQ.map((item, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] shadow-sm overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full py-8 px-10 text-left flex justify-between items-center group"
                >
                  <span className="text-[#1A1A1A] font-bold tracking-wide group-hover:text-quartz transition-colors">{item.question}</span>
                  <div className={`w-8 h-8 rounded-full border border-quartz/20 flex items-center justify-center text-quartz transition-transform duration-500 ${activeFaq === idx ? 'rotate-180 bg-quartz text-white border-transparent' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                {activeFaq === idx && (
                  <div className="px-10 pb-8 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-graphite/50 text-sm leading-relaxed font-medium">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA: Final Impact */}
      <section className="py-40 bg-graphite text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-quartz opacity-10 blur-3xl rounded-full"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-serif mb-12 leading-[1.1]">Sua melhor versão <br /> <span className="italic text-quartz">está pronta.</span></h2>
          <p className="text-white/60 text-xl mb-16 font-light max-w-2xl mx-auto">
            Agende sua consultoria personalizada e descubra o plano terapêutico desenhado exclusivamente para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-white text-graphite px-16 py-6 rounded-full font-bold text-sm tracking-[0.3em] uppercase hover:bg-quartz hover:text-white transition-all shadow-2xl flex items-center gap-4"
            >
              <MessageCircle size={20} /> Agendar via WhatsApp
            </button>
            <span className="text-[10px] text-white/30 uppercase tracking-[0.5em] hidden sm:block">Vagas Limitadas para este Mês</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FAF7F5] pt-32 pb-16 border-t border-quartz/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-10">
                <span className="text-2xl font-serif font-bold tracking-tighter text-[#1A1A1A]">Lumière</span>
                <div className="w-1.5 h-1.5 rounded-full bg-quartz mt-2"></div>
              </div>
              <p className="text-graphite/40 text-[11px] leading-relaxed uppercase tracking-[0.2em] mb-10 font-bold">
                Arte, Ciência e Estética de Alta Performance. São Paulo, Brasil.
              </p>
              <div className="flex gap-6">
                <a href="#" className="w-12 h-12 rounded-full border border-quartz/20 flex items-center justify-center text-graphite/40 hover:text-quartz hover:border-quartz transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-quartz/20 flex items-center justify-center text-graphite/40 hover:text-quartz hover:border-quartz transition-all">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            {[
              { title: 'Navegação', links: ['Início', 'Expertise', 'Tratamentos', 'Resultados'] },
              { title: 'Contato', links: ['+55 11 99999.9999', 'contato@lumiere.com', 'São Paulo, Brasil'] },
              { title: 'Horários', links: ['Seg - Sex: 09h - 19h', 'Sáb: 09h - 13h', 'Dom: Fechado'] }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="text-quartz mb-10 text-[10px] font-bold uppercase tracking-[0.4em]">{col.title}</h4>
                <ul className="space-y-6 text-[#1A1A1A]/50 text-[11px] font-bold tracking-widest uppercase">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx} className="hover:text-quartz transition-colors cursor-pointer">{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-quartz/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-bold uppercase tracking-[0.3em] text-graphite/20">
            <p>© 2024 Lumière Wellness & Aesthetics. Todos os direitos reservados.</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-graphite">Privacidade</a>
              <a href="#" className="hover:text-graphite">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <button 
        onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
        className="fixed bottom-10 right-10 bg-graphite text-white p-5 rounded-full shadow-2xl hover:scale-110 hover:bg-quartz transition-all z-50 flex items-center gap-3 group"
      >
        <MessageCircle size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold uppercase tracking-widest text-[10px] whitespace-nowrap">
          Falar com Especialista
        </span>
      </button>
    </div>
  );
};

export default App;
