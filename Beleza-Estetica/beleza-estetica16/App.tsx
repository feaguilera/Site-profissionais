
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  MessageCircle,
  Instagram,
  Sparkles,
  Leaf,
  Wind,
  ShieldCheck,
  Sun
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
    <div className="min-h-screen selection:bg-[#C5A059] selection:text-white">
      {/* Header */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-botanical py-4' : 'bg-transparent py-7'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <span className="text-3xl font-serif font-bold tracking-tight text-[#064E3B]">Lumière</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2"></div>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {['Expertise', 'Protocolos', 'Resultados', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#064E3B]/70 hover:text-[#C5A059] transition-all"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-[#064E3B] text-white px-9 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] btn-luxury shadow-lg"
            >
              Agendar Boutique
            </button>
          </div>

          <button className="md:hidden text-[#064E3B]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-[#FFFCF9] z-50 flex flex-col p-10 animate-in fade-in slide-in-from-right duration-500">
            <div className="flex justify-between items-center mb-16">
              <span className="text-2xl font-serif font-bold">Lumière</span>
              <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8">
              {['Expertise', 'Protocolos', 'Resultados', 'FAQ'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-4xl font-serif text-left border-b border-[#F1F3EE] pb-4 text-[#064E3B]"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="bg-[#C5A059] text-white py-6 rounded-2xl font-bold mt-10 uppercase tracking-widest text-xs"
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
          <div className="z-10 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-3 mb-10 bg-[#F1F3EE] px-6 py-2.5 rounded-full border border-[#064E3B]/5">
              <Leaf size={16} className="text-[#C5A059]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#064E3B]">Estética Bio-Regenerativa</span>
            </div>
            <h1 className="text-6xl md:text-[5.5rem] font-serif text-[#064E3B] mb-10 leading-[1] font-normal">
              A alma da <br />
              <span className="italic text-[#C5A059]">sua beleza.</span>
            </h1>
            <p className="text-xl text-[#064E3B]/60 mb-14 leading-relaxed max-w-lg font-light">
              Na Lumière, cultivamos a beleza através da harmonia biológica. Protocolos que despertam a vitalidade celular para resultados que transcendem o tempo.
            </p>
            <div className="flex flex-col sm:row gap-6">
              <button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="bg-[#064E3B] text-white px-14 py-6 rounded-2xl font-bold text-[11px] tracking-[0.3em] uppercase btn-luxury shadow-2xl shadow-[#064E3B]/20"
              >
                Solicitar Reserva
              </button>
              <button 
                onClick={() => scrollToSection('protocolos')}
                className="flex items-center gap-4 px-10 py-6 border-b border-[#C5A059] font-bold text-[11px] tracking-[0.3em] uppercase hover:text-[#C5A059] transition-all"
              >
                The Green Protocols <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <div className="relative z-10 rounded-[3rem] overflow-hidden aspect-[4/5] shadow-botanical">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Regenerative Aesthetics" 
                className="w-full h-full object-cover contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-[80px] -z-0"></div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-32 bg-[#F1F3EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center mb-32">
            <div>
              <span className="text-[#C5A059] text-[11px] font-bold tracking-[0.5em] uppercase mb-8 block">Nossa Expertise</span>
              <h2 className="text-5xl md:text-7xl font-serif text-[#064E3B] leading-tight">Onde a vida <br /><span className="italic">floresce.</span></h2>
            </div>
            <div className="space-y-8">
              <p className="text-[#064E3B]/60 text-2xl font-light leading-relaxed">
                Nossa filosofia une o rigor científico com a sabedoria da natureza. Utilizamos bioestimuladores que trabalham a favor do seu corpo.
              </p>
              <div className="flex gap-10">
                <div className="flex flex-col">
                  <span className="text-4xl font-serif text-[#064E3B]">12k</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#C5A059]">Vidas Renovadas</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-serif text-[#064E3B]">100%</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#C5A059]">Personalização</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="bg-white p-14 rounded-[2.5rem] shadow-sm hover:shadow-botanical transition-all duration-700 group">
                <div className="mb-10 text-[#C5A059] group-hover:scale-110 transition-transform duration-500">
                  {idx === 0 ? <ShieldCheck size={32} /> : idx === 1 ? <Sparkles size={32} /> : idx === 2 ? <Wind size={32} /> : <Sun size={32} />}
                </div>
                <h4 className="font-bold text-[#064E3B] uppercase tracking-[0.3em] text-[11px] mb-5">{benefit.title}</h4>
                <p className="text-[#064E3B]/50 text-sm font-light leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocols */}
      <section id="protocolos" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
            <div className="max-w-2xl">
              <h2 className="text-6xl font-serif text-[#064E3B] mb-8">Protocolos de Assinatura</h2>
              <p className="text-[#064E3B]/40 text-lg font-light">Uma curadoria meticulosa de tratamentos que restauram a vitalidade e a arquitetura facial com precisão botânica.</p>
            </div>
            <button className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.4em] border-b border-[#C5A059] pb-2">Ver Catálogo Completo</button>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {SERVICES.map((service) => (
              <div key={service.id} className="group">
                <div className="aspect-[4/5] overflow-hidden mb-10 relative rounded-[3rem] shadow-lg">
                  <img src={`https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sig=${service.id}`} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/60 to-transparent opacity-60 group-hover:opacity-20 transition-all"></div>
                  {service.tag && (
                    <div className="absolute top-8 left-8 bg-[#C5A059] text-white px-5 py-2 text-[9px] font-bold tracking-[0.3em] uppercase rounded-full">
                      {service.tag}
                    </div>
                  )}
                </div>
                <h3 className="text-3xl font-serif text-[#064E3B] mb-4">{service.title}</h3>
                <p className="text-[#064E3B]/50 text-sm font-light leading-relaxed mb-8">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#C5A059] font-bold text-xs tracking-widest uppercase">{service.price}</span>
                  <div className="w-12 h-[1px] bg-[#C5A059]/30"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="resultados" className="py-40 bg-[#F1F3EE] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#064E3B]/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <span className="text-[#C5A059] text-[11px] font-bold tracking-[0.5em] uppercase mb-6 block">Legacy</span>
            <h2 className="text-5xl font-serif text-[#064E3B]">Testemunhos de Renovação</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white p-16 rounded-[4rem] relative shadow-sm hover:shadow-botanical transition-all duration-500">
                <div className="absolute -top-10 left-16 w-20 h-20 rounded-3xl overflow-hidden border-8 border-[#F1F3EE]">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div className="pt-8">
                  <p className="text-[#064E3B]/70 italic text-lg leading-relaxed mb-10 font-light">"{t.content}"</p>
                  <h4 className="font-bold text-[#064E3B] text-[10px] tracking-[0.4em] uppercase">{t.name}</h4>
                  <p className="text-[#C5A059] text-[9px] font-bold uppercase tracking-widest mt-2">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-serif text-[#064E3B] mb-4">Diálogo & Transparência</h2>
            <div className="w-20 h-1 bg-[#C5A059]/20 mx-auto rounded-full"></div>
          </div>
          <div className="divide-y divide-[#F1F3EE]">
            {FAQ.map((item, idx) => (
              <div key={idx} className="group">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full py-10 text-left flex justify-between items-center"
                >
                  <span className="text-[#064E3B] text-xl font-medium tracking-tight group-hover:text-[#C5A059] transition-colors">{item.question}</span>
                  <div className={`text-[#C5A059] transition-all duration-500 ${activeFaq === idx ? 'rotate-180 scale-125' : ''}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${activeFaq === idx ? 'max-h-96 opacity-100 pb-10' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[#064E3B]/50 text-lg font-light leading-relaxed max-w-2xl">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-48 bg-[#064E3B] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_#C5A059_0%,_transparent_60%)]"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-8xl font-serif mb-16 leading-tight">Sua melhor versão <br /> <span className="italic text-[#C5A059]">está para florescer.</span></h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-[#C5A059] text-white px-16 py-7 rounded-2xl font-bold text-xs tracking-[0.5em] uppercase hover:bg-white hover:text-[#064E3B] transition-all shadow-2xl"
            >
              Agendar Concierge
            </button>
            <div className="flex items-center gap-4 text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold">
              <Sparkles size={16} /> Vagas limitadas este mês
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-40 pb-20 border-t border-[#F1F3EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-40">
            <div className="col-span-1">
              <span className="text-4xl font-serif font-bold text-[#064E3B] block mb-12">Lumière</span>
              <p className="text-[#064E3B]/40 text-xs leading-loose uppercase tracking-[0.3em] font-bold mb-12">
                Arquitetura Regenerativa & Estética de Alta Performance. <br />Jardins, São Paulo.
              </p>
              <div className="flex gap-8">
                <a href="#" className="text-[#064E3B]/40 hover:text-[#C5A059] transition-all"><Instagram size={22} /></a>
                <a href="#" className="text-[#064E3B]/40 hover:text-[#C5A059] transition-all"><MessageCircle size={22} /></a>
              </div>
            </div>

            {[
              { title: 'The Clinic', links: ['Filosofia', 'Protocolos', 'Mentoria', 'Contato'] },
              { title: 'Experiência', links: ['+55 11 99999.9999', 'reservas@lumiere.com', 'Unidade Jardins'] },
              { title: 'Informação', links: ['Privacidade', 'Ética Clínica', 'Resultados'] }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="text-[#C5A059] mb-12 text-[10px] font-bold uppercase tracking-[0.5em]">{col.title}</h4>
                <ul className="space-y-7 text-[#064E3B]/60 text-[11px] font-bold tracking-[0.3em] uppercase">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx} className="hover:text-[#C5A059] transition-colors cursor-pointer">{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-[#F1F3EE] pt-16 flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#064E3B]/20">© 2024 Lumière Regenerative Boutique. Todos os direitos reservados.</p>
            <div className="flex gap-10 opacity-20 text-[9px] font-bold uppercase tracking-[0.4em] text-[#064E3B]">
              <span>Bio-Tech</span>
              <span>Luxury Skin</span>
              <span>São Paulo</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <button 
        onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
        className="fixed bottom-12 right-12 bg-[#064E3B] text-white p-6 rounded-3xl shadow-2xl hover:scale-110 hover:bg-[#C5A059] transition-all z-50 flex items-center gap-4"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
};

export default App;
