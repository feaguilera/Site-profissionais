
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
  Cpu,
  Monitor,
  Microscope,
  TrendingUp,
  Infinity
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
    window.open(`https://wa.me/5514999999999?text=${encodeURIComponent('Olá! Quero conhecer o ecossistema Titan Hyper-Futurist.')}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-[#22D3EE] selection:text-black">
      {/* Dynamic Glow Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#4338CA] opacity-10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-[#22D3EE] opacity-10 blur-[150px] rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-[#22D3EE] blur-md opacity-50 animate-pulse"></div>
              <div className="w-10 h-10 bg-gradient-to-br from-[#22D3EE] to-[#4338CA] rounded-xl flex items-center justify-center text-black relative z-10">
                <Infinity size={24} strokeWidth={3} />
              </div>
            </div>
            <span className="text-xl font-black tracking-tight flex flex-col leading-none">
              TITAN <span className="text-[#22D3EE] text-[10px] font-mono tracking-[0.3em]">HYPER-TECH</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {['Início', 'Planos', 'Ciência', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-[#22D3EE] transition-all flex items-center gap-2 group"
              >
                <span className="w-1 h-1 bg-[#22D3EE] rounded-full scale-0 group-hover:scale-100 transition-transform"></span>
                {item}
              </a>
            ))}
            <button onClick={openWhatsApp} className="btn-hyper text-[11px] py-3 px-8">
              Sincronizar Agora
            </button>
          </div>

          <button className="lg:hidden p-2 glass rounded-lg text-[#22D3EE]" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="início" className="relative min-h-screen flex items-center pt-20 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full mb-8">
              <div className="w-2 h-2 bg-[#22D3EE] rounded-full animate-ping"></div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#22D3EE]">Vagas Limitadas: 08 Restantes</span>
            </div>
            <h1 className="text-6xl lg:text-[100px] font-black leading-[0.9] tracking-tighter mb-8">
              UPGRADE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#4338CA]">SEU CORPO.</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-lg leading-relaxed mb-12">
              Não somos uma academia. Somos um laboratório de alta performance. Onde a ciência da biomecânica encontra o limite do potencial humano.
            </p>
            <div className="flex flex-wrap gap-6">
              <button onClick={openWhatsApp} className="btn-hyper group flex items-center gap-4">
                INICIAR PROTOCOLO <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <div className="flex items-center gap-4 text-zinc-500 font-bold text-xs uppercase tracking-widest">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-[#22D3EE]">
                   <Play size={18} fill="currentColor" />
                </div>
                The Experience
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-[#22D3EE]/20 blur-[100px] rounded-full animate-pulse"></div>
            <div className="relative z-10 glass rounded-[40px] p-4 border-[#22D3EE]/20 overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200" 
                 className="w-full h-full object-cover rounded-[30px] opacity-80"
                 alt="Future Fitness"
               />
               {/* Overlay Data UI */}
               <div className="absolute top-10 right-10 glass p-4 rounded-2xl animate-bounce">
                  <div className="flex items-center gap-3">
                     <div className="w-2 h-10 bg-[#22D3EE] rounded-full"></div>
                     <div>
                        <p className="text-[10px] font-mono text-zinc-400">LOAD_CAPACITY</p>
                        <p className="text-2xl font-black text-[#22D3EE]">98.2%</p>
                     </div>
                  </div>
               </div>
               <div className="absolute bottom-10 left-10 glass p-6 rounded-2xl border-l-4 border-[#22D3EE]">
                  <p className="text-4xl font-black mb-1">PRO-TECH</p>
                  <p className="text-xs text-zinc-500 font-mono tracking-tighter">ESTABLISHED_SYSTEM_V4.0</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <div className="relative z-10 border-y border-white/5 bg-white/[0.01] backdrop-blur-sm py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Bio-Sensores', val: '124' },
            { label: 'Evoluções Reais', val: '2.5k' },
            { label: 'Precisão Bio', val: '99%' },
            { label: 'Atendimento', val: '24/7' }
          ].map((stat, i) => (
            <div key={i} className="group">
              <p className="text-5xl font-black text-white group-hover:text-[#22D3EE] transition-colors duration-500">{stat.val}</p>
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section - Holographic Cards */}
      <section id="planos" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 flex flex-col lg:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <p className="text-[#22D3EE] font-mono text-xs mb-4">_PROTOCOL_SELECTION</p>
              <h2 className="text-5xl lg:text-7xl font-black tracking-tight leading-none">ESCOLHA SEU <br/> <span className="text-zinc-600">NÍVEL DE ACESSO.</span></h2>
            </div>
            <p className="text-zinc-500 lg:text-right max-w-xs">Planos sem fidelidade, com tecnologia embarcada em cada treino.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <div key={s.id} className="group relative">
                {i === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#22D3EE] text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest rounded-full z-20">
                    MAIS EFICIENTE
                  </div>
                )}
                <div className={`h-full p-10 glass rounded-[40px] transition-all duration-500 border-[#22D3EE]/0 hover:border-[#22D3EE]/30 group-hover:-translate-y-4 ${i === 1 ? 'border-[#22D3EE]/30 ring-1 ring-[#22D3EE]/20' : ''}`}>
                  <div className="w-16 h-16 bg-[#22D3EE]/10 rounded-2xl flex items-center justify-center text-[#22D3EE] mb-10 group-hover:bg-[#22D3EE] group-hover:text-black transition-all duration-500">
                    {s.icon}
                  </div>
                  <h3 className="text-3xl font-black mb-4">{s.title}</h3>
                  <p className="text-zinc-500 text-sm mb-10 leading-relaxed">{s.description}</p>
                  
                  <div className="mb-12">
                    <p className="text-5xl font-black tracking-tighter">{s.price}</p>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase mt-2">Acesso_Livre_24h</p>
                  </div>

                  <ul className="space-y-4 mb-12">
                    {s.features?.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs text-zinc-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]"></div>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={openWhatsApp}
                    className={`w-full py-5 rounded-3xl font-black text-xs uppercase tracking-widest transition-all ${i === 1 ? 'bg-[#22D3EE] text-black hover:scale-105' : 'glass hover:bg-white/10'}`}
                  >
                    Ativar Plano
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science & Tech Focus */}
      <section id="ciência" className="py-32 bg-[#050B1F]/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                   <div className="glass rounded-[30px] p-2">
                      <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600" className="rounded-[25px] grayscale opacity-50" />
                   </div>
                   <div className="bg-[#22D3EE] rounded-[30px] p-8 text-black">
                      <Cpu size={40} className="mb-6" />
                      <h4 className="text-2xl font-black leading-tight">HARDWARE <br/> DE ELITE.</h4>
                   </div>
                </div>
                <div className="space-y-4 pt-12">
                   <div className="glass rounded-[30px] p-8">
                      <Microscope size={40} className="text-[#22C55E] mb-6" />
                      <h4 className="text-2xl font-black leading-tight">ANÁLISE <br/> BIO.</h4>
                   </div>
                   <div className="glass rounded-[30px] p-2">
                      <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600" className="rounded-[25px] grayscale opacity-50" />
                   </div>
                </div>
             </div>
          </div>

          <div>
            <span className="text-[#22D3EE] font-mono text-[10px] uppercase tracking-[0.5em] mb-4 block">_THE_SYSTEM</span>
            <h2 className="text-5xl lg:text-7xl font-black mb-10 leading-none">NOSSO <span className="text-zinc-600">DIFERENCIAL.</span></h2>
            
            <div className="space-y-10">
              {BENEFITS.map((b, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="p-4 glass rounded-2xl text-[#22D3EE] group-hover:text-white group-hover:bg-[#22D3EE] transition-all">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-black uppercase mb-2 tracking-wide">{b.title}</h4>
                    <p className="text-zinc-500 leading-relaxed text-sm max-w-sm">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Tech Accordion */}
      <section id="faq" className="py-32 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tight">CENTRAL DE <span className="text-[#22D3EE]">DADOS</span></h2>
            <p className="text-zinc-500 mt-4 font-mono text-[10px] uppercase tracking-widest">_FREQUENTLY_ASKED_QUESTIONS</p>
          </div>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden border-white/5 hover:border-[#22D3EE]/20 transition-all">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-8 text-left flex justify-between items-center group"
                >
                  <span className="font-bold text-sm uppercase tracking-widest group-hover:text-[#22D3EE] transition-colors">{item.question}</span>
                  <div className={`w-8 h-8 rounded-full glass flex items-center justify-center text-[#22D3EE] transition-transform ${openFaq === i ? 'rotate-180 bg-[#22D3EE] text-black' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                <div className={`transition-all duration-300 ${openFaq === i ? 'max-h-60 opacity-100 p-8 pt-0' : 'max-h-0 opacity-0'}`}>
                  <p className="text-zinc-500 text-sm leading-relaxed border-t border-white/5 pt-6">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Minimalist Tech */}
      <footer className="py-32 bg-[#01030C] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12 mb-24">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <Infinity size={32} className="text-[#22D3EE]" />
                <span className="text-2xl font-black uppercase tracking-tighter">TITAN HYPER-TECH</span>
              </div>
              <p className="text-zinc-500 max-w-sm text-sm leading-relaxed mb-8">
                A convergência entre biomecânica avançada e performance humana. O futuro do treinamento personalizado está aqui.
              </p>
              <div className="flex gap-4">
                {['Insta', 'Face', 'Youtube'].map(soc => (
                  <button key={soc} className="w-10 h-10 rounded-full glass flex items-center justify-center text-xs font-bold text-zinc-400 hover:text-[#22D3EE] transition-colors">{soc}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#22D3EE] font-mono text-[10px] uppercase tracking-[0.3em] mb-8">_NAV_LINKS</p>
              <ul className="space-y-4 text-sm font-bold text-zinc-500 uppercase">
                <li className="hover:text-white cursor-pointer transition-colors">Horários_Fluxo</li>
                <li className="hover:text-white cursor-pointer transition-colors">Treinadores_Expert</li>
                <li className="hover:text-white cursor-pointer transition-colors">Resultados_Verify</li>
                <li className="hover:text-white cursor-pointer transition-colors">Bio_Feedback</li>
              </ul>
            </div>
            <div>
               <p className="text-[#22D3EE] font-mono text-[10px] uppercase tracking-[0.3em] mb-8">_HQ_LOCATION</p>
               <p className="text-zinc-500 text-sm leading-relaxed">
                  Av. Tech, 2048 - Digital District<br/>
                  Ourinhos, SP - BR<br/><br/>
                  <span className="text-white font-bold">+55 14 99999-9999</span>
               </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-[9px] font-mono text-zinc-700 uppercase tracking-[0.4em]">
            <p>© 2026 TITAN_PERFORMANCE. ALL_RIGHTS_RESERVED_V4.0</p>
            <div className="flex gap-8">
              <span className="hover:text-zinc-400 cursor-pointer transition-colors">Privacy_Terms</span>
              <span className="hover:text-zinc-400 cursor-pointer transition-colors">System_Status</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA Mobile */}
      <div className="lg:hidden fixed bottom-6 left-6 right-6 z-[150]">
        <button onClick={openWhatsApp} className="w-full py-5 btn-hyper flex items-center justify-center gap-4 text-sm shadow-2xl">
          SINCRONIZAR AGORA <Zap size={20} fill="currentColor" />
        </button>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default App;
