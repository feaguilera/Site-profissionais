
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  MessageCircle,
  Utensils,
  MapPin,
  Clock,
  Phone,
  Star,
  Plus,
  Check,
  Instagram,
  Heart,
  Navigation,
  ChevronRight,
  ShieldCheck,
  MoveUpRight,
  TrendingUp,
  Map
} from 'lucide-react';
import { SERVICES, FAQ, BENEFITS } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/5514997939067?text=${encodeURIComponent('Olá! Gostaria de conhecer o menu completo da Casa da Esfiha.')}`, '_blank');
  };

  const openMap = (unidade: number) => {
    const address = unidade === 1 
      ? "Rua Rio de Janeiro, 186 - Ourinhos" 
      : "Rua Antônio Carlos Mori, 337 - Ourinhos";
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation - Minimal Glass */}
      <nav className={`fixed w-full z-[100] transition-all duration-700 ${scrolled ? 'bg-white/80 py-4 shadow-sm backdrop-blur-xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-12 h-12 bg-stone-900 flex items-center justify-center rounded-2xl group-hover:rotate-12 transition-transform duration-500">
              <Utensils className="text-white" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-extrabold tracking-tight leading-none">CASA DA ESFIHA</span>
              <span className="text-[10px] font-bold text-orange-700 uppercase tracking-widest mt-1">Ourinhos • Brasil</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            {['Vitrine', 'Destinos', 'História'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[11px] font-bold text-stone-500 hover:text-stone-900 transition-colors uppercase tracking-[0.2em]"
              >
                {item}
              </button>
            ))}
            <button onClick={() => openWhatsApp()} className="px-8 py-3 rounded-full btn-artisan text-[11px] uppercase flex items-center gap-2">
               Falar com a gente <ArrowRight size={14} />
            </button>
          </div>

          <button className="lg:hidden text-stone-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Hero Section - Bold & Dynamic */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#FFFBF7]">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[120%] h-[600px] bg-orange-50/50 rounded-[100%] blur-[120px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 rounded-full mb-8">
              <TrendingUp size={14} className="text-orange-700" />
              <span className="text-[10px] font-black uppercase tracking-widest text-stone-600">A favorita de Ourinhos</span>
            </div>
            <h1 className="text-7xl md:text-[100px] font-display font-black leading-[0.9] text-stone-900 mb-10 tracking-tight">
              Sabor que tem <br/> <span className="text-orange-700">Identidade.</span>
            </h1>
            <p className="text-xl text-stone-600 mb-12 font-medium leading-relaxed max-w-xl">
              Unimos a tradição de Ourinhos com o frescor de ingredientes premium em uma massa leve que você nunca esquece.
            </p>
            <div className="flex flex-wrap gap-6">
              <button onClick={() => scrollToSection('destinos')} className="px-12 py-6 rounded-2xl btn-artisan flex items-center gap-3 text-[12px] uppercase">
                Ver Onde Estamos <MapPin size={18} />
              </button>
              <button onClick={() => scrollToSection('vitrine')} className="px-12 py-6 rounded-2xl border-2 border-stone-200 hover:bg-white hover:border-stone-900 transition-all text-[12px] font-bold uppercase text-stone-800">
                Menu de Especialidades
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative rotate-2 group hover:rotate-0 transition-transform duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                alt="Esfiha Urbana"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-orange-700 text-white p-10 rounded-3xl shadow-2xl max-w-[200px] animate-bounce-slow">
               <Star size={32} fill="white" className="mb-4" />
               <p className="font-display font-bold text-lg leading-tight">Massa Leve <br/> & Crocante.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Bar */}
      <div className="bg-stone-900 py-6 overflow-hidden flex">
        <div className="marquee-text flex items-center gap-16">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 text-white/40 font-display font-black text-2xl uppercase tracking-[0.2em]">
              <span>Artesanal</span>
              <div className="w-2 h-2 bg-orange-700 rounded-full"></div>
              <span>Tradição</span>
              <div className="w-2 h-2 bg-orange-700 rounded-full"></div>
              <span>Ourinhos</span>
              <div className="w-2 h-2 bg-orange-700 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Vitrine Premium - Interactive List/Grid */}
      <section id="vitrine" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-display font-black text-stone-900 mb-8 tracking-tighter uppercase leading-none">
                Vitrine <span className="text-orange-700">Artesanal.</span>
              </h2>
              <p className="text-stone-500 font-medium text-lg italic">Uma seleção do que há de melhor em nossa cozinha, preparada diariamente para você.</p>
            </div>
            <div className="flex gap-4">
               <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center"><Check size={20} /></div>
                  <div>
                    <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest leading-none">Status</p>
                    <p className="text-sm font-bold text-stone-800">Fornos Aquecidos</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="card-urban p-10 rounded-[2.5rem] group h-full flex flex-col">
                <div className="mb-10 flex justify-between items-start">
                  <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-900 group-hover:bg-orange-700 group-hover:text-white transition-all duration-500">
                    {s.icon}
                  </div>
                  <span className="text-[9px] font-black text-stone-300 uppercase tracking-[0.3em]">{s.tag}</span>
                </div>
                <h3 className="text-2xl font-display font-black text-stone-900 mb-4 tracking-tight uppercase group-hover:text-orange-700 transition-colors">{s.title}</h3>
                <p className="text-stone-500 text-sm font-medium leading-relaxed mb-10 flex-grow italic">"{s.description}"</p>
                <div className="flex items-center justify-between pt-6 border-t border-stone-50">
                   <p className="font-bold text-stone-900">{s.price}</p>
                   <button className="w-10 h-10 rounded-full bg-stone-50 text-stone-400 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all">
                      <MoveUpRight size={18} />
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinos - Luxury Location Cards */}
      <section id="destinos" className="py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
             <span className="text-orange-700 font-bold text-xs uppercase tracking-[0.5em] mb-4 block">Ourinhos • São Paulo</span>
             <h2 className="text-5xl md:text-7xl font-display font-black text-stone-900 tracking-tighter uppercase">Nossas Casas.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Unidade 1 */}
            <div className="relative group cursor-pointer" onClick={() => openMap(1)}>
               <div className="aspect-[16/10] rounded-[3rem] overflow-hidden mb-10 shadow-2xl shadow-stone-200">
                  <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Loja 01"/>
                  <div className="absolute top-8 right-8 bg-white/90 backdrop-blur shadow-xl px-4 py-2 rounded-full flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                     <span className="text-[10px] font-black text-stone-800 uppercase tracking-widest">Unidade Centro I</span>
                  </div>
               </div>
               <div className="flex justify-between items-start gap-8">
                  <div>
                    <h3 className="text-3xl font-display font-black text-stone-900 mb-4 uppercase tracking-tighter">Rua Rio de Janeiro, 186</h3>
                    <p className="text-stone-500 font-medium italic mb-6">Ambiente climatizado, atendimento premium e o sabor clássico de Ourinhos.</p>
                    <div className="flex items-center gap-6">
                       <span className="flex items-center gap-2 text-xs font-bold text-stone-400 uppercase tracking-widest"><Clock size={16} /> 17:00 • 23:30</span>
                       <span className="flex items-center gap-2 text-xs font-bold text-orange-700 uppercase tracking-widest"><Map size={16} /> Ver no Mapa</span>
                    </div>
                  </div>
               </div>
            </div>

            {/* Unidade 2 */}
            <div className="relative group cursor-pointer" onClick={() => openMap(2)}>
               <div className="aspect-[16/10] rounded-[3rem] overflow-hidden mb-10 shadow-2xl shadow-stone-200">
                  <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Loja 02"/>
                  <div className="absolute top-8 right-8 bg-white/90 backdrop-blur shadow-xl px-4 py-2 rounded-full flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                     <span className="text-[10px] font-black text-stone-800 uppercase tracking-widest">Unidade Centro II</span>
                  </div>
               </div>
               <div className="flex justify-between items-start gap-8">
                  <div>
                    <h3 className="text-3xl font-display font-black text-stone-900 mb-4 uppercase tracking-tighter">Rua Antônio Carlos Mori, 337</h3>
                    <p className="text-stone-500 font-medium italic mb-6">Ponto estratégico, ideal para lanches rápidos ou encontros casuais com amigos.</p>
                    <div className="flex items-center gap-6">
                       <span className="flex items-center gap-2 text-xs font-bold text-stone-400 uppercase tracking-widest"><Clock size={16} /> 17:00 • 23:30</span>
                       <span className="flex items-center gap-2 text-xs font-bold text-orange-700 uppercase tracking-widest"><Map size={16} /> Ver no Mapa</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais - Modern Grid */}
      <section id="história" className="py-32 bg-stone-900 text-white overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div>
                  <h2 className="text-5xl md:text-7xl font-display font-black mb-10 tracking-tighter uppercase leading-none">
                     Tradição que se <br/> sente no <span className="text-orange-600">toque.</span>
                  </h2>
                  <div className="space-y-12">
                     {BENEFITS.map((b, i) => (
                       <div key={i} className="flex gap-8 group">
                          <div className="w-16 h-16 shrink-0 border border-white/10 rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                             {b.icon}
                          </div>
                          <div>
                             <h4 className="text-xl font-bold mb-3 uppercase tracking-widest">{b.title}</h4>
                             <p className="text-stone-400 font-light leading-relaxed">{b.description}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="relative">
                  <div className="absolute -inset-10 bg-orange-700/20 blur-[100px] rounded-full"></div>
                  <div className="aspect-square bg-stone-800 rounded-[4rem] flex items-center justify-center p-20 relative border border-white/5">
                     <Utensils size={160} className="text-orange-600 opacity-20" />
                     <div className="absolute text-center">
                        <p className="text-7xl font-display font-black">+30</p>
                        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-500">Anos de História</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer - Brutalist Minimalist */}
      <footer className="py-24 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-4 gap-16 mb-24">
              <div className="lg:col-span-2">
                 <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-stone-900 flex items-center justify-center rounded-xl">
                      <Utensils className="text-white" size={20} />
                    </div>
                    <span className="text-2xl font-display font-black tracking-tighter uppercase">CASA DA ESFIHA</span>
                 </div>
                 <p className="text-stone-500 text-lg font-medium leading-relaxed max-w-sm mb-10 italic">
                   "A excelência está no detalhe. Da escolha da farinha ao ponto perfeito do forno."
                 </p>
                 <div className="flex gap-6">
                    <a href="https://instagram.com/casa.daesfiha" className="text-stone-400 hover:text-orange-700 transition-colors"><Instagram size={28} /></a>
                    <button onClick={openWhatsApp} className="text-stone-400 hover:text-emerald-600 transition-colors"><MessageCircle size={28} /></button>
                 </div>
              </div>

              <div>
                 <h5 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.3em] mb-8">Nossas Casas</h5>
                 <div className="space-y-8">
                    <div>
                       <p className="text-xs font-black uppercase tracking-widest text-orange-700 mb-1">Unidade Centro I</p>
                       <p className="text-sm font-bold text-stone-800">R. Rio de Janeiro, 186</p>
                    </div>
                    <div>
                       <p className="text-xs font-black uppercase tracking-widest text-orange-700 mb-1">Unidade Centro II</p>
                       <p className="text-sm font-bold text-stone-800">R. Antônio Carlos Mori, 337</p>
                    </div>
                 </div>
              </div>

              <div>
                 <h5 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.3em] mb-8">Atendimento</h5>
                 <div className="space-y-4">
                    <p className="text-sm font-bold text-stone-800 flex items-center gap-3">
                       <Clock size={16} className="text-stone-300" /> 17:00 às 23:30
                    </p>
                    <p className="text-sm font-bold text-stone-800 flex items-center gap-3">
                       <Phone size={16} className="text-stone-300" /> (14) 99793-9067
                    </p>
                    <div className="pt-4">
                       <span className="px-3 py-1 bg-stone-100 text-[9px] font-black uppercase tracking-widest rounded-full text-stone-500">Ourinhos • São Paulo</span>
                    </div>
                 </div>
              </div>
           </div>

           <div className="pt-12 border-t border-stone-50 flex flex-col md:flex-row justify-between items-center gap-8">
              <p className="text-stone-400 text-[10px] font-black tracking-[0.3em] uppercase">© 2026 Casa da Esfiha • Crafted for the bold</p>
              <div className="flex items-center gap-3">
                 <ShieldCheck size={18} className="text-stone-200" />
                 <span className="text-[9px] font-black uppercase tracking-widest text-stone-300">Alta Qualidade Garantida</span>
              </div>
           </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <button 
        onClick={() => openWhatsApp()}
        className="fixed bottom-10 right-10 bg-stone-900 text-white p-6 rounded-[2rem] shadow-2xl hover:bg-orange-700 transition-all z-[120] border border-white/10 flex items-center gap-4 group"
      >
        <MessageCircle size={24} fill="currentColor" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-700 text-[10px] font-black uppercase tracking-widest">
          Chamar no Whats
        </span>
      </button>
    </div>
  );
};

export default App;
