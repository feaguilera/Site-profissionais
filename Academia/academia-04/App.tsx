
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  MessageCircle,
  Play,
  Zap,
  ChevronDown,
  Dumbbell,
  Target,
  Flame,
  Activity,
  ArrowUpRight
} from 'lucide-react';
import { SERVICES, BENEFITS, FAQ } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/5514999999999?text=${encodeURIComponent('Olá! Quero conhecer o método Titan Industrial.')}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white selection:bg-[#F97316] selection:text-black">
      {/* Navigation */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-black/95 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#F97316] flex items-center justify-center text-black font-black">T</div>
            <span className="text-xl font-display tracking-widest uppercase italic">TITAN <span className="text-zinc-500 font-light">RAW</span></span>
          </div>

          <div className="hidden lg:flex items-center gap-12">
            {['Início', 'Planos', 'Metodologia', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-[#F97316] transition-colors"
              >
                {item}
              </a>
            ))}
            <button onClick={openWhatsApp} className="btn-brutal text-[10px] py-2 px-6">
              PARTICIPAR
            </button>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(true)}>
            <div className="flex flex-col gap-1.5">
              <div className="w-8 h-0.5 bg-white"></div>
              <div className="w-5 h-0.5 bg-[#F97316]"></div>
            </div>
          </button>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section id="início" className="relative min-h-screen flex items-center pt-20">
        <div className="grid lg:grid-cols-2 w-full h-full min-h-[80vh]">
          {/* Text Content */}
          <div className="flex flex-col justify-center px-6 lg:px-20 py-20 bg-[#121212] relative z-10">
            <div className="space-y-6">
              <span className="text-[#F97316] font-black text-xs uppercase tracking-[0.5em] block mb-4">Established 2024</span>
              <h1 className="text-7xl lg:text-9xl font-display uppercase leading-[0.85] mb-8">
                TREINE PARA <br/>
                <span className="text-zinc-800 outline-text">DOMINAR.</span>
              </h1>
              <p className="text-zinc-500 text-lg max-w-md leading-relaxed mb-10 border-l-2 border-[#F97316] pl-6 italic">
                A academia que une a estética industrial com a tecnologia de biomecânica mais avançada do país. 
              </p>
              <div className="flex flex-wrap gap-6">
                <button onClick={openWhatsApp} className="btn-brutal text-sm">
                  COMEÇAR AGORA
                </button>
                <button className="flex items-center gap-3 font-black text-[10px] uppercase tracking-widest group">
                  <span className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#F97316] transition-all">
                    <Play size={16} fill="white" />
                  </span>
                  Ver Teaser
                </button>
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="mt-24 grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
              <div>
                <p className="text-4xl font-display text-[#F97316]">24/7</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500">Acesso Total</p>
              </div>
              <div>
                <p className="text-4xl font-display text-white">500m²</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500">Área Industrial</p>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative hidden lg:block overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1500" 
              className="w-full h-full object-cover grayscale brightness-50"
              alt="Gym Interior"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121212] to-transparent"></div>
            <div className="absolute bottom-20 left-20">
               <div className="bg-[#F97316] p-8 max-w-xs">
                  <p className="text-black font-black uppercase text-xl italic leading-tight mb-4">"A melhor estrutura que já treinei na região."</p>
                  <p className="text-black/60 text-xs font-bold uppercase tracking-widest">— Rodrigo M., Atleta IFBB</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Industrial Style */}
      <section id="planos" className="py-32 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-xl">
              <h2 className="text-6xl font-display uppercase mb-6 italic">SELECIONE SEU <span className="text-[#F97316]">PROTOCOLO.</span></h2>
              <p className="text-zinc-500">Nossos planos são desenhados para máxima adesão e resultados mensuráveis. Sem pegadinhas.</p>
            </div>
            <div className="flex gap-4">
               <div className="w-16 h-1 bg-[#F97316]"></div>
               <div className="w-16 h-1 bg-white/10"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {SERVICES.map((s, i) => (
              <div key={s.id} className="bg-[#121212] p-12 hover:bg-[#181818] transition-all group relative">
                <div className="mb-10 flex justify-between items-start">
                   <div className="text-[#F97316]">{s.icon}</div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">{s.tag}</span>
                </div>
                <h3 className="text-3xl font-display uppercase mb-4">{s.title}</h3>
                <p className="text-zinc-500 text-sm mb-10 leading-relaxed min-h-[60px]">{s.description}</p>
                
                <div className="mb-12">
                   <p className="text-sm text-zinc-600 uppercase font-black mb-1">A partir de</p>
                   <p className="text-4xl font-display">{s.price}</p>
                </div>

                <ul className="space-y-4 mb-12">
                  {s.features?.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs text-zinc-400">
                      <div className="w-1 h-1 bg-[#F97316]"></div>
                      {f}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={openWhatsApp}
                  className="w-full py-4 border border-white/10 flex items-center justify-center gap-4 group-hover:bg-[#F97316] group-hover:text-black transition-all font-black text-[10px] uppercase tracking-[0.2em]"
                >
                  CONTRATAR AGORA <ArrowUpRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="metodologia" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
           <div className="lg:col-span-5">
              <div className="industrial-border p-12 bg-white/[0.02]">
                 <h2 className="text-5xl font-display uppercase mb-12 leading-tight">O <span className="text-[#F97316]">MÉTODO</span> QUE <br/> FUNCIONA.</h2>
                 <div className="space-y-12">
                    {BENEFITS.map((b, i) => (
                      <div key={i} className="group cursor-default">
                         <div className="flex items-center gap-4 mb-3">
                            <span className="text-[#F97316] font-display text-2xl">0{i+1}</span>
                            <h4 className="text-lg font-black uppercase tracking-wider group-hover:text-[#F97316] transition-colors">{b.title}</h4>
                         </div>
                         <p className="text-zinc-500 text-sm leading-relaxed pl-10">{b.description}</p>
                      </div>
                    ))}
                 </div>
                 <button onClick={openWhatsApp} className="mt-16 text-[10px] font-black uppercase tracking-[0.4em] text-[#F97316] flex items-center gap-4 hover:gap-8 transition-all">
                    CONHEÇA NOSSO TIME <ArrowRight size={18} />
                 </button>
              </div>
           </div>

           <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                 <img src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800" className="w-full aspect-[3/4] object-cover grayscale border border-white/5" />
                 <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800" className="w-full aspect-square object-cover grayscale border border-white/5" />
              </div>
              <div className="space-y-4">
                 <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800" className="w-full aspect-square object-cover grayscale border border-white/5" />
                 <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800" className="w-full aspect-[3/4] object-cover grayscale border border-white/5" />
              </div>
           </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 bg-[#0F0F0F]">
         <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-display uppercase italic mb-16 text-center">Protocolo de <span className="text-[#F97316]">Dúvidas</span></h2>
            <div className="space-y-4">
               {FAQ.map((item, i) => (
                 <div key={i} className="bg-[#121212] border border-white/5 overflow-hidden">
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full p-8 text-left flex justify-between items-center"
                    >
                       <span className="font-bold text-xs uppercase tracking-[0.2em]">{item.question}</span>
                       <ChevronDown className={`text-[#F97316] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`transition-all duration-300 ${openFaq === i ? 'max-h-40 opacity-100 p-8 pt-0' : 'max-h-0 opacity-0'}`}>
                       <p className="text-zinc-500 text-sm">{item.answer}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Footer Industrial */}
      <footer className="py-32 bg-black border-t-4 border-[#F97316]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 mb-24">
               <div>
                  <h2 className="text-7xl font-display uppercase mb-10 leading-none">PRONTO PARA A <br/><span className="text-[#F97316]">MUDANÇA?</span></h2>
                  <button onClick={openWhatsApp} className="btn-brutal text-lg px-12 py-6">
                     AGENDAR VISITA EXPERIMENTAL
                  </button>
               </div>
               <div className="grid grid-cols-2 gap-12">
                  <div>
                     <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F97316] mb-6">Localização</p>
                     <p className="text-zinc-500 text-sm leading-relaxed">Av. Industrial, 400 - Centro<br/>Ourinhos/SP - 19900-000</p>
                  </div>
                  <div>
                     <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F97316] mb-6">Horário</p>
                     <p className="text-zinc-500 text-sm leading-relaxed">Seg a Sex: 05h - 23h<br/>Sab e Dom: 08h - 16h</p>
                  </div>
               </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
               <div className="flex items-center gap-2">
                  <Zap size={20} className="text-[#F97316]" fill="currentColor" />
                  <span className="font-display text-xl tracking-tighter uppercase">TITAN PERFORMANCE RAW</span>
               </div>
               <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.4em]">© 2024 DESIGNED BY SEUSITEPROFISSIONAL. ALL RIGHTS RESERVED.</p>
            </div>
         </div>
      </footer>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[200] bg-black transition-all duration-700 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
         <div className="p-8 flex justify-between items-center">
            <span className="font-display text-2xl tracking-widest text-[#F97316]">MENU</span>
            <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
         </div>
         <div className="flex flex-col items-center justify-center h-full gap-8">
            {['Início', 'Planos', 'Metodologia', 'FAQ'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-6xl font-display uppercase hover:text-[#F97316] transition-colors">{item}</a>
            ))}
            <button onClick={openWhatsApp} className="btn-brutal mt-12 text-sm w-64 text-center">WHATSAPP</button>
         </div>
      </div>

      <style>{`
        .outline-text {
          -webkit-text-stroke: 1px #333;
          color: transparent;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
