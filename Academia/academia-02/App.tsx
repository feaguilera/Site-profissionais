
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  MessageCircle,
  MapPin,
  CheckCircle2,
  Instagram,
  Play,
  Zap,
  ChevronRight,
  ChevronDown,
  Dumbbell,
  Users,
  Trophy,
  Activity
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
    window.open(`https://wa.me/5514999999999?text=${encodeURIComponent('Quero começar minha transformação na Titan Performance!')}`, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      window.scrollTo({ top: element.offsetTop - offset, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Dynamic Header */}
      <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            <div className="w-10 h-10 bg-[#FF1F1F] rounded-lg flex items-center justify-center text-white">
               <Zap size={24} fill="currentColor" />
            </div>
            <span className="text-2xl font-impact tracking-tighter uppercase italic">TITAN<span className="text-[#FF1F1F]">PERFORMANCE</span></span>
          </div>

          <div className="hidden lg:flex items-center space-x-12">
            {['Início', 'Planos', 'Metodologia', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[11px] font-bold uppercase tracking-widest hover:text-[#FF1F1F] transition-colors"
              >
                {item}
              </button>
            ))}
            <button onClick={openWhatsApp} className="px-6 py-3 btn-accent text-[10px]">
              QUERO TREINAR
            </button>
          </div>

          <button className="lg:hidden text-[#FF1F1F]" onClick={() => setIsMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[200] bg-black transition-all duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex justify-between items-center border-b border-white/10">
           <span className="font-impact text-xl italic uppercase">TITAN NAV</span>
           <button onClick={() => setIsMenuOpen(false)} className="text-[#FF1F1F]"><X size={32} /></button>
        </div>
        <div className="flex flex-col p-12 gap-8 text-center">
           {['Início', 'Planos', 'Metodologia', 'FAQ'].map((item) => (
             <button
               key={item}
               onClick={() => scrollToSection(item.toLowerCase())}
               className="text-4xl font-impact uppercase italic text-white hover:text-[#FF1F1F]"
             >
               {item}
             </button>
           ))}
           <button onClick={openWhatsApp} className="mt-8 py-6 btn-accent text-lg">
             COMEÇAR AGORA
           </button>
        </div>
      </div>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000" 
             className="w-full h-full object-cover opacity-30 grayscale" 
             alt="Academia de Performance"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
           <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#FF1F1F]/30 rounded-full mb-8 bg-[#FF1F1F]/10">
                 <span className="w-2 h-2 bg-[#FF1F1F] rounded-full animate-pulse"></span>
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF1F1F]">Novas Vagas para Personal VIP</span>
              </div>
              <h1 className="text-6xl sm:text-8xl lg:text-[100px] font-impact leading-[0.9] italic uppercase mb-8">
                PARE DE <br/>
                <span className="text-[#FF1F1F]">TENTAR.</span> <br/>
                COMECE A <br/>
                <span className="text-white">CONQUISTAR.</span>
              </h1>
              <p className="text-xl text-zinc-400 mb-12 max-w-xl leading-relaxed">
                A metodologia de treino que transformou centenas de corpos em Ourinhos. Infraestrutura de elite para quem não aceita desculpas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <button onClick={() => scrollToSection('planos')} className="px-10 py-5 btn-accent text-sm shadow-[0_0_30px_rgba(255,31,31,0.3)]">
                   VER PLANOS DISPONÍVEIS
                 </button>
                 <button onClick={openWhatsApp} className="px-10 py-5 bg-white/5 border border-white/10 rounded-lg text-sm font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                   ASSISTA O TOUR <Play size={18} fill="currentColor" />
                 </button>
              </div>
           </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 right-10 hidden lg:grid grid-cols-2 gap-4">
           {[
             { label: 'Atletas Ativos', val: '+1200' },
             { label: 'Equipamentos', val: '85+' }
           ].map((stat, i) => (
             <div key={i} className="glass-card p-6 rounded-2xl">
                <p className="text-4xl font-impact italic text-[#FF1F1F]">{stat.val}</p>
                <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">{stat.label}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Benefits Strip */}
      <div className="bg-[#FF1F1F] py-4 overflow-hidden whitespace-nowrap border-y border-black">
         <div className="flex animate-[scroll_20s_linear_infinite] gap-12 items-center">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="flex items-center gap-12 text-white">
                <span className="font-impact text-2xl uppercase italic">MUSCULAÇÃO</span>
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="font-impact text-2xl uppercase italic">CROSSFIT</span>
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="font-impact text-2xl uppercase italic">NUTRIÇÃO</span>
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="font-impact text-2xl uppercase italic">PERSONAL VIP</span>
                <span className="w-2 h-2 bg-white rounded-full"></span>
              </div>
            ))}
         </div>
      </div>

      {/* Planos Section */}
      <section id="planos" className="py-32 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-7xl font-impact uppercase italic mb-6">ESCOLHA SEU <span className="text-[#FF1F1F]">LEVEL.</span></h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg">Sem taxas de adesão. Sem fidelidade abusiva. Apenas resultados reais.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <div key={s.id} className={`relative group p-10 rounded-[32px] transition-all duration-500 ${i === 1 ? 'bg-zinc-900 border-2 border-[#FF1F1F] scale-105 z-10' : 'bg-[#1A1A1A] border border-white/5'}`}>
                {i === 1 && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FF1F1F] text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">
                    RECOMENDADO
                  </div>
                )}
                <div className="mb-8 text-[#FF1F1F]">
                  {s.icon}
                </div>
                <h3 className="text-3xl font-impact uppercase italic mb-2">{s.title}</h3>
                <p className="text-zinc-500 text-sm mb-8 leading-relaxed">{s.description}</p>
                
                <div className="mb-10">
                   <span className="text-4xl font-impact italic">{s.price}</span>
                   {s.price.includes('R$') && <span className="text-zinc-500 text-sm ml-2">/ mês</span>}
                </div>

                <div className="space-y-4 mb-12">
                   {s.features?.map((f, idx) => (
                     <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-[#FF1F1F]" />
                        <span className="text-xs text-zinc-300 font-medium">{f}</span>
                     </div>
                   ))}
                </div>

                <button 
                  onClick={openWhatsApp}
                  className={`w-full py-5 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${i === 1 ? 'bg-[#FF1F1F] text-white hover:shadow-[0_0_30px_rgba(255,31,31,0.5)]' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}
                >
                  SELECIONAR PLANO
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia - Energy Focus */}
      <section id="metodologia" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
           <div>
              <span className="text-[#FF1F1F] font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Porque somos diferentes</span>
              <h2 className="text-5xl lg:text-7xl font-impact uppercase italic mb-10 leading-none">CIÊNCIA APLICADA AO <span className="text-zinc-400">ESFORÇO.</span></h2>
              
              <div className="space-y-12">
                 {BENEFITS.map((b, i) => (
                   <div key={i} className="flex gap-6 group">
                      <div className="w-16 h-16 bg-[#FF1F1F]/10 text-[#FF1F1F] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF1F1F] group-hover:text-white transition-all duration-300">
                         {b.icon}
                      </div>
                      <div>
                         <h4 className="text-xl font-bold uppercase mb-2">{b.title}</h4>
                         <p className="text-zinc-500 leading-relaxed text-sm">{b.description}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="relative">
              <div className="aspect-square rounded-[40px] overflow-hidden border-2 border-zinc-800">
                 <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Treino Intenso" />
              </div>
              {/* Badge Overlay */}
              <div className="absolute -bottom-10 -right-10 bg-[#FF1F1F] p-10 rounded-full text-white shadow-2xl animate-float hidden sm:block">
                 <Trophy size={48} strokeWidth={3} />
              </div>
           </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-32 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-impact uppercase italic">DÚVIDAS <span className="text-[#FF1F1F]">FREQUENTES</span></h2>
           </div>
           <div className="space-y-4">
              {FAQ.map((item, i) => (
                <div key={i} className="border border-white/5 rounded-2xl overflow-hidden">
                   <button 
                     onClick={() => setOpenFaq(openFaq === i ? null : i)}
                     className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-all"
                   >
                      <span className="font-bold text-sm uppercase tracking-wide">{item.question}</span>
                      <ChevronDown className={`text-[#FF1F1F] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                   </button>
                   <div className={`transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-40 p-6 pt-0 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-zinc-500 text-sm leading-relaxed">{item.answer}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Footer Minimalist Power */}
      <footer className="py-20 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <div className="flex items-center justify-center gap-2 mb-12">
              <Zap size={32} className="text-[#FF1F1F]" fill="currentColor" />
              <span className="text-3xl font-impact italic uppercase">TITAN PERFORMANCE</span>
           </div>

           <div className="flex flex-wrap justify-center gap-8 mb-16 text-zinc-500 font-bold text-[10px] uppercase tracking-[0.2em]">
              {['Planos', 'Metodologia', 'Horários', 'Localização'].map(link => (
                <button key={link} className="hover:text-[#FF1F1F] transition-colors">{link}</button>
              ))}
           </div>

           <div className="flex justify-center gap-6 mb-16">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#FF1F1F] hover:text-white transition-all">
                 <Instagram size={20} />
              </a>
              <button onClick={openWhatsApp} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#FF1F1F] hover:text-white transition-all">
                 <MessageCircle size={20} />
              </button>
           </div>

           <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em]">
              <p>© 2026 TITAN PERFORMANCE - ALL RIGHTS RESERVED.</p>
              <div className="flex items-center gap-4">
                 <span>Privacy Policy</span>
                 <span className="w-1 h-1 bg-zinc-800 rounded-full"></span>
                 <span>Terms of Service</span>
              </div>
           </div>
        </div>
      </footer>

      {/* Floating CTA Mobile */}
      <div className="lg:hidden fixed bottom-8 left-6 right-6 z-[150]">
         <button onClick={openWhatsApp} className="w-full py-5 btn-accent flex items-center justify-center gap-4 text-sm shadow-[0_0_30px_rgba(255,31,31,0.4)]">
           INICIAR TRANSFORMAÇÃO <MessageCircle size={20} />
         </button>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default App;
