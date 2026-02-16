
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Phone, 
  Instagram, 
  Facebook, 
  Star, 
  ChevronDown, 
  MessageCircle,
  Clock,
  MapPin,
  Mail,
  CheckCircle2
} from 'lucide-react';
import { SERVICES, TESTIMONIALS, FAQ, BENEFITS } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 bg-[#C5A059] rounded-sm flex items-center justify-center text-black font-serif text-xl shadow-lg rotate-45">
              <span className="-rotate-45">L</span>
            </div>
            <span className="text-2xl font-serif font-bold tracking-[0.2em] text-white uppercase">Lumière</span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {['Início', 'Sobre', 'Serviços', 'Resultados', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/60 hover:text-[#C5A059] transition-all"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-transparent border border-[#C5A059] text-[#C5A059] px-8 py-2.5 rounded-sm text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#C5A059] hover:text-black transition-all"
            >
              Agendar Exclusive
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0A0A0A] absolute top-full left-0 w-full h-screen border-t border-white/10 p-8 flex flex-col space-y-8 animate-in fade-in slide-in-from-top-4">
            {['Início', 'Sobre', 'Serviços', 'Resultados', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-2xl font-serif text-white text-left border-b border-white/5 pb-4"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-[#C5A059] text-black py-4 rounded-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} /> WhatsApp VIP
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Aesthetic" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <span className="inline-block text-[#C5A059] text-[10px] font-bold tracking-[0.5em] uppercase mb-8">
              Experience the Extraordinary
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-tight">
              A estética <br /><span className="italic text-[#C5A059]">do amanhã.</span>
            </h1>
            <p className="text-xl text-white/50 mb-12 leading-relaxed max-w-xl font-light">
              Protocolos de luxo desenhados para quem não aceita nada menos que a perfeição. Tecnologia, arte e exclusividade em cada detalhe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="bg-[#C5A059] text-black px-12 py-5 rounded-sm font-bold text-sm tracking-[0.2em] uppercase hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl shadow-[#C5A059]/10"
              >
                Solicitar Convite
              </button>
              <button 
                onClick={() => scrollToSection('serviços')}
                className="bg-transparent text-white border border-white/20 px-12 py-5 rounded-sm font-bold text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all"
              >
                The Collection
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
              <div>
                <p className="text-[#C5A059] text-2xl font-serif mb-1">100%</p>
                <p className="text-white/30 text-[10px] uppercase tracking-widest">Privacidade</p>
              </div>
              <div>
                <p className="text-[#C5A059] text-2xl font-serif mb-1">Elite</p>
                <p className="text-white/30 text-[10px] uppercase tracking-widest">Tecnologia</p>
              </div>
              <div className="hidden md:block">
                <p className="text-[#C5A059] text-2xl font-serif mb-1">Gold</p>
                <p className="text-white/30 text-[10px] uppercase tracking-widest">Certificação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dores / Problems Section */}
      <section className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-serif mb-6 text-white leading-tight">Onde o tempo <br /><span className="text-[#C5A059] italic">se curva à beleza.</span></h2>
              <p className="text-white/40 text-lg font-light">Não permita que pequenos detalhes ofusquem sua presença. Nós cuidamos do que é invisível para os outros, mas essencial para você.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { title: 'Sinais de Tempo', desc: 'Revertemos os marcadores de idade com precisão cirúrgica e naturalidade.' },
              { title: 'Perda de Vitalidade', desc: 'Devolvemos o brilho e a energia que sua pele irradiava.' },
              { title: 'Desarmonia', desc: 'Ajustamos as proporções para um rosto equilibrado e magnético.' },
              { title: 'Fadiga Facial', desc: 'Protocolos de recuperação celular para um olhar sempre descansado.' }
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="text-[#C5A059] mb-8 group-hover:scale-110 transition-transform duration-500">
                  <CheckCircle2 size={32} strokeWidth={1} />
                </div>
                <h3 className="text-xl font-serif mb-4 text-white uppercase tracking-wider">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre / Solution Section */}
      <section id="sobre" className="py-32 bg-[#111111] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1 relative">
            <div className="relative z-10 border border-white/10 p-4 bg-[#0A0A0A]">
              <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Black Aesthetics" className="w-full grayscale brightness-75" />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t border-l border-[#C5A059] -z-0 opacity-40"></div>
          </div>
          
          <div className="flex-1">
            <span className="text-[#C5A059] text-[10px] font-bold tracking-[0.5em] uppercase mb-8 block">Nossa Herança</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-white leading-tight">Privacidade, Arte e <br /><span className="text-[#C5A059]">Resultados.</span></h2>
            <p className="text-white/50 text-lg mb-12 font-light leading-relaxed">
              A Lumière nasceu para redefinir o conceito de clínica estética. Aqui, você não é apenas um paciente, é um convidado em um refúgio de bem-estar.
            </p>
            
            <div className="grid gap-12">
              {[
                { title: 'Consultoria Noir', desc: 'Análise profunda em ambiente privativo com nossos master injectors.' },
                { title: 'Mastery & Tech', desc: 'As melhores substâncias do mundo aliadas à tecnologia alemã.' },
                { title: 'Pós-Care Gold', desc: 'Acompanhamento 24/7 para garantir que sua recuperação seja impecável.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8">
                  <div className="text-[#C5A059] font-serif text-2xl opacity-50">0{idx + 1}</div>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-[0.2em] text-sm mb-2">{item.title}</h4>
                    <p className="text-white/40 text-sm font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-white tracking-tight">The Collection</h2>
            <p className="text-white/30 uppercase tracking-[0.4em] text-[10px]">Procedimentos Selecionados</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-[#111111] border border-white/5 p-1 hover:border-[#C5A059]/30 transition-all duration-700">
                <div className="h-[400px] overflow-hidden relative">
                  <img src={`https://picsum.photos/seed/${service.id}/600/800`} alt={service.title} className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 group-hover:brightness-75 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    {service.tag && (
                      <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-[0.3em] mb-4 block">{service.tag}</span>
                    )}
                    <h3 className="text-2xl font-serif text-white mb-2">{service.title}</h3>
                    <p className="text-white/40 text-xs font-light line-clamp-2">{service.description}</p>
                  </div>
                </div>
                <div className="p-8 flex justify-between items-center">
                  <span className="text-white/20 text-xs font-bold uppercase tracking-widest">{service.price}</span>
                  <button 
                    onClick={() => window.open(`https://wa.me/5511999999999?text=Desejo informações exclusivas sobre ${service.title}`, '_blank')}
                    className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.2em] border-b border-[#C5A059]/20 hover:border-[#C5A059] transition-all"
                  >
                    Consultar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results / Testimonials */}
      <section id="resultados" className="py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-24">
            <h2 className="text-4xl md:text-6xl font-serif text-white text-center md:text-left">Círculo de <br /><span className="text-[#C5A059] italic">Confiança.</span></h2>
            <div className="mt-8 md:mt-0 flex gap-4">
              <div className="bg-[#0A0A0A] border border-white/5 p-4 rounded-sm flex items-center gap-4">
                <div className="flex text-[#C5A059]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-white text-xs tracking-widest uppercase">Excellent 5.0</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="border-l border-white/10 pl-10 py-8 hover:border-[#C5A059] transition-all duration-500">
                <p className="text-white/60 font-light italic mb-10 text-lg leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-6">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full grayscale border border-white/20" />
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-widest uppercase">{t.name}</h4>
                    <p className="text-[#C5A059] text-[10px] uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-serif text-white mb-4">Intelligence</h2>
            <p className="text-white/30 uppercase tracking-[0.4em] text-[10px]">Dúvidas e Orientações</p>
          </div>

          <div className="space-y-6">
            {FAQ.map((item, idx) => (
              <div key={idx} className="border-b border-white/10 overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full py-8 text-left flex justify-between items-center group"
                >
                  <span className="text-white/80 group-hover:text-white transition-colors tracking-wide">{item.question}</span>
                  <div className={`text-[#C5A059] transition-transform duration-500 ${activeFaq === idx ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                {activeFaq === idx && (
                  <div className="pb-8 animate-in slide-in-from-top-4 duration-500">
                    <p className="text-white/40 text-sm font-light leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-[#0A0A0A] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C5A059]/5 rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-serif text-white mb-12 leading-tight">Sua jornada VIP <br /><span className="italic text-[#C5A059]">começa aqui.</span></h2>
          <p className="text-white/50 text-xl mb-16 font-light">Disponibilidade limitada para novos pacientes este mês.</p>
          <button 
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            className="bg-[#C5A059] text-black px-16 py-6 rounded-sm font-bold text-sm tracking-[0.3em] uppercase hover:bg-white transition-all shadow-2xl"
          >
            Falar com Concierge
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] pt-32 pb-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 bg-[#C5A059] rounded-sm rotate-45 flex items-center justify-center">
                  <span className="text-black font-serif -rotate-45 font-bold text-sm">L</span>
                </div>
                <span className="text-xl font-serif font-bold tracking-widest text-white uppercase">Lumière</span>
              </div>
              <p className="text-white/20 text-xs leading-relaxed uppercase tracking-widest mb-10">
                Estética de luxo e alta performance. <br />Privacidade absoluta.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-white/20 hover:text-[#C5A059] transition-all"><Instagram size={20} /></a>
                <a href="#" className="text-white/20 hover:text-[#C5A059] transition-all"><Facebook size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-[#C5A059] mb-10 text-[10px] font-bold uppercase tracking-[0.4em]">Explore</h4>
              <ul className="space-y-6 text-white/30 text-[10px] uppercase tracking-widest font-bold">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-all">Atelier</button></li>
                <li><button onClick={() => scrollToSection('sobre')} className="hover:text-white transition-all">Filosofia</button></li>
                <li><button onClick={() => scrollToSection('serviços')} className="hover:text-white transition-all">Protocolos</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#C5A059] mb-10 text-[10px] font-bold uppercase tracking-[0.4em]">Contato VIP</h4>
              <ul className="space-y-6 text-white/30 text-[10px] uppercase tracking-widest font-bold">
                <li className="text-white"><span>+55 11 99999.9999</span></li>
                <li><span>private@lumiere.com.br</span></li>
                <li><span>Luxury District, SP</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#C5A059] mb-10 text-[10px] font-bold uppercase tracking-[0.4em]">Horários</h4>
              <ul className="space-y-6 text-white/30 text-[10px] uppercase tracking-widest font-bold">
                <li className="flex justify-between"><span>Seg - Sex</span> <span>09h - 20h</span></li>
                <li className="flex justify-between"><span>Sáb</span> <span>Sob Consulta</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-bold uppercase tracking-[0.3em] text-white/10">
            <p>© 2024 Lumière Private Aesthetics. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Concierge Button */}
      <button 
        onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
        className="fixed bottom-10 right-10 bg-[#C5A059] text-black p-5 rounded-sm shadow-2xl hover:scale-110 hover:bg-white transition-all z-50 group"
      >
        <MessageCircle size={24} />
        <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Falar com Concierge
        </span>
      </button>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#0A0A0A] border-t border-white/10 p-4 z-40 flex items-center justify-between">
        <span className="text-[9px] font-bold uppercase tracking-widest text-[#C5A059]">Private Access</span>
        <button 
          onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
          className="bg-[#C5A059] text-black px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest"
        >
          WhatsApp VIP
        </button>
      </div>
    </div>
  );
};

export default App;
