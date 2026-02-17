
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  MessageCircle,
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  ChevronRight,
  Star,
  Instagram,
  Timer,
  ShoppingBag,
  Info,
  Heart,
  Utensils,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { SERVICES, FAQ, BENEFITS } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('esfihas-bistro');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/5514997939067?text=${encodeURIComponent('Olá! Vi o site e quero fazer um pedido agora.')}`, '_blank');
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
      const offset = 80;
      window.scrollTo({ top: element.offsetTop - offset, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Dynamic Smart Header */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white shadow-xl py-2' : 'bg-transparent py-4 sm:py-6'}`}>
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            <div className={`p-2 rounded-xl transition-all ${scrolled ? 'bg-brand-red shadow-lg' : 'bg-white/10 backdrop-blur-md border border-white/20'}`}>
               <Utensils size={20} className={scrolled ? 'text-white' : 'text-brand-red'} />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-black tracking-tighter leading-none uppercase ${scrolled ? 'text-zinc-900' : 'text-brand-red sm:text-zinc-900'}`}>CASA DA ESFIHA</span>
              <span className={`text-[8px] font-bold uppercase tracking-[0.3em] mt-0.5 ${scrolled ? 'text-zinc-400' : 'text-zinc-500'}`}>Est. 1990 • Ourinhos</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            {['Início', 'Cardápio', 'Lojas', 'História'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace('á', 'a').replace('ó', 'o'))}
                className={`text-[11px] font-extrabold uppercase tracking-widest transition-all ${scrolled ? 'text-zinc-600 hover:text-brand-red' : 'text-zinc-800 hover:text-brand-red'}`}
              >
                {item}
              </button>
            ))}
            <button onClick={openWhatsApp} className="px-6 py-3 btn-primary text-[10px] flex items-center gap-2">
              PEDIR VIA WHATSAPP <MessageCircle size={14} />
            </button>
          </div>

          <button className={`lg:hidden p-3 rounded-full ${scrolled ? 'bg-zinc-100 text-brand-red' : 'bg-white/20 text-brand-red backdrop-blur-md'}`} onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Full Screen Recursive Mobile Menu */}
      <div className={`fixed inset-0 bg-zinc-900 z-[200] transition-all duration-500 flex flex-col ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
         <div className="p-6 flex justify-between items-center border-b border-white/10">
            <span className="text-white font-black uppercase text-sm tracking-widest">Navegação</span>
            <button onClick={() => setIsMenuOpen(false)} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white">
               <X size={24} />
            </button>
         </div>
         <div className="flex-grow flex flex-col justify-center gap-8 px-10">
            {['Início', 'Cardápio', 'Lojas', 'História'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace('á', 'a').replace('ó', 'o'))}
                className="text-4xl font-heritage font-black text-white text-left flex items-center justify-between group"
              >
                {item} <ChevronRight className="text-brand-red group-hover:translate-x-2 transition-transform" />
              </button>
            ))}
         </div>
         <div className="p-10 space-y-4">
            <button onClick={openWhatsApp} className="w-full py-5 btn-primary text-sm flex items-center justify-center gap-4 shadow-2xl">
              FAZER PEDIDO AGORA <ShoppingBag size={20} />
            </button>
            <p className="text-center text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Aberto até 23:30h</p>
         </div>
      </div>

      {/* Hero Section - App Style Focus */}
      <section id="inicio" className="relative pt-32 lg:pt-56 pb-20 lg:pb-40 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue hidden lg:block rounded-l-[80px]"></div>
        <div className="max-w-7xl mx-auto px-5 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-100 rounded-full mb-8">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-500">Forno Quente em Ourinhos</span>
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heritage font-black text-zinc-900 leading-[1] mb-8 tracking-tighter">
              A Mordida <br className="hidden sm:block"/>
              <span className="text-brand-red">Perfeita</span> <br className="hidden sm:block"/>
              Existe.
            </h1>
            <p className="text-lg text-zinc-500 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Esfihas fechadas com massa ultra-leve e recheio generoso. A receita original que Ourinhos ama há mais de 3 décadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={() => scrollToSection('cardapio')} className="px-10 py-5 btn-primary text-sm shadow-2xl">
                ABRIR CARDÁPIO
              </button>
              <button onClick={() => scrollToSection('lojas')} className="px-10 py-5 bg-white border border-zinc-200 rounded-xl text-sm font-bold text-zinc-600 hover:bg-zinc-50 flex items-center justify-center gap-3 transition-all">
                VER UNIDADES <MapPin size={18} className="text-brand-blue-light" />
              </button>
            </div>
          </div>
          
          <div className="relative group">
             <div className="relative aspect-square sm:aspect-video lg:aspect-square rounded-[40px] overflow-hidden shadow-2xl shadow-brand-blue/20">
                <img 
                  src="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1000" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" 
                  alt="Esfiha Original Ourinhos"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                   <div>
                      <p className="text-[10px] font-black uppercase text-brand-yellow tracking-[0.3em] mb-2">Signature Series</p>
                      <p className="text-3xl font-heritage font-black text-white leading-none">CARNE COM <br/> TEMPERO SÍRIO</p>
                   </div>
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-red shadow-xl">
                      <Heart size={24} fill="currentColor" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Cardápio Inteligente - Recursividade por Abas */}
      <section id="cardapio" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-red font-extrabold text-[10px] uppercase tracking-[0.4em] mb-4 block">Nossa Seleção</span>
            <h2 className="text-4xl lg:text-6xl font-heritage font-black text-zinc-900 leading-none mb-6">Explore os <br/> <span className="text-brand-blue-light italic">Sabores.</span></h2>
          </div>

          {/* Tab Navigation - Mobile Optimized (Scrollable) */}
          <div className="flex overflow-x-auto pb-6 mb-12 gap-3 no-scrollbar justify-start sm:justify-center px-2">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`flex-shrink-0 px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 border ${
                  activeTab === s.id 
                  ? 'tab-active border-brand-red' 
                  : 'bg-white text-zinc-400 border-zinc-100 hover:border-brand-red/30'
                }`}
              >
                {s.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Dynamic Content Area */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
             <div className="lg:col-span-7 space-y-6">
                {SERVICES.find(s => s.id === activeTab)?.features?.map((f, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-zinc-100 hover:border-brand-blue-light/20 transition-all">
                     <div className="w-10 h-10 bg-brand-blue-light/10 text-brand-blue-light rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={20} />
                     </div>
                     <span className="text-sm font-bold text-zinc-700">{f}</span>
                  </div>
                ))}
                <div className="p-8 bg-brand-blue text-white rounded-[32px] relative overflow-hidden mt-12">
                   <div className="relative z-10">
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-yellow mb-4">Dica do Chef</p>
                      <p className="text-xl font-medium leading-relaxed italic opacity-90">
                        "{SERVICES.find(s => s.id === activeTab)?.description}"
                      </p>
                      <button onClick={openWhatsApp} className="mt-8 flex items-center gap-3 text-brand-yellow font-black uppercase text-[10px] tracking-widest group">
                         PEDIR ESTA OPÇÃO <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                      </button>
                   </div>
                   <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                </div>
             </div>
             
             <div className="lg:col-span-5">
                <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-zinc-100 text-center">
                   <div className="w-20 h-20 bg-brand-red/10 text-brand-red rounded-3xl flex items-center justify-center mx-auto mb-8">
                      {SERVICES.find(s => s.id === activeTab)?.icon}
                   </div>
                   <h3 className="text-3xl font-heritage font-black mb-4 uppercase">{SERVICES.find(s => s.id === activeTab)?.title}</h3>
                   <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-10">{SERVICES.find(s => s.id === activeTab)?.tag}</p>
                   
                   <div className="text-5xl font-black text-zinc-900 mb-10">
                     <span className="text-sm align-top mr-1 font-bold">A partir de</span>
                     {SERVICES.find(s => s.id === activeTab)?.price}
                   </div>
                   
                   <button onClick={openWhatsApp} className="w-full py-5 btn-primary text-sm flex items-center justify-center gap-4">
                     PEÇA PELO WHATSAPP <MessageCircle size={20} />
                   </button>
                   <p className="mt-6 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Entrega em Ourinhos em até 40 min</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Unidades & Delivery - High Hierarchy */}
      <section id="lojas" className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-5">
            <div className="grid lg:grid-cols-2 gap-16 items-stretch">
               <div className="bg-brand-blue rounded-[40px] p-12 lg:p-20 text-white flex flex-col">
                  <span className="text-brand-yellow font-black text-[10px] uppercase tracking-[0.4em] mb-8">Tradição Local</span>
                  <h2 className="text-4xl lg:text-7xl font-heritage font-black leading-[0.9] mb-12 uppercase">Nossas <br/> <span className="text-brand-blue-light">Casas.</span></h2>
                  
                  <div className="space-y-12 flex-grow">
                     {[1, 2].map((u) => (
                       <div key={u} className="group cursor-pointer" onClick={() => openMap(u)}>
                          <div className="flex justify-between items-center mb-4">
                             <h4 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-brand-yellow transition-colors">
                               {u === 1 ? 'Unidade Rio de Janeiro' : 'Unidade Antônio C. Mori'}
                             </h4>
                             <ArrowRight size={20} className="text-brand-yellow group-hover:translate-x-2 transition-transform" />
                          </div>
                          <p className="text-zinc-400 text-sm font-light">
                             {u === 1 ? 'Rua Rio de Janeiro, 186 - Centro' : 'Rua Antônio Carlos Mori, 337 - Centro'}
                          </p>
                       </div>
                     ))}
                  </div>
                  
                  <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 gap-8">
                     <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">Horário</p>
                        <p className="text-sm font-bold">17h às 23:30h</p>
                     </div>
                     <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">Delivery</p>
                        <p className="text-sm font-bold">(14) 99793-9067</p>
                     </div>
                  </div>
               </div>

               <div className="relative">
                  <div className="h-full min-h-[400px] rounded-[40px] overflow-hidden shadow-2xl relative">
                     <img 
                        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000" 
                        className="w-full h-full object-cover" 
                        alt="Unidade Casa da Esfiha"
                     />
                     <div className="absolute inset-0 bg-brand-red/10 mix-blend-multiply"></div>
                     <div className="absolute top-10 right-10 bg-white p-6 rounded-3xl shadow-2xl text-center">
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Status</p>
                        <div className="flex items-center gap-2 text-emerald-500 font-bold">
                           <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div> ABERTO
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer Minimal Heritage */}
      <footer className="py-20 bg-zinc-50 border-t border-zinc-100">
         <div className="max-w-7xl mx-auto px-5 text-center">
            <div className="inline-flex items-center gap-4 mb-12">
               <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center text-brand-yellow">
                  <Utensils size={20} />
               </div>
               <span className="text-2xl font-heritage font-black text-brand-red uppercase">CASA DA ESFIHA</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-10 mb-16">
               {['Início', 'Cardápio', 'Lojas', 'História'].map(item => (
                 <button key={item} onClick={() => scrollToSection(item.toLowerCase().replace('á', 'a'))} className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-brand-red transition-all">
                   {item}
                 </button>
               ))}
            </div>

            <div className="flex justify-center gap-6 mb-16">
               <a href="https://instagram.com/casa.daesfiha" className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-zinc-400 hover:text-brand-red transition-all border border-zinc-100">
                  <Instagram size={20} />
               </a>
               <button onClick={openWhatsApp} className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-zinc-400 hover:text-emerald-500 transition-all border border-zinc-100">
                  <MessageCircle size={20} />
               </button>
            </div>

            <div className="pt-10 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-6">
               <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-[0.3em]">© 2026 CASA DA ESFIHA OURINHOS. QUALIDADE QUE É TRADIÇÃO.</p>
               <div className="flex items-center gap-3">
                  <ShieldCheck size={16} className="text-brand-blue-light" />
                  <span className="text-[8px] font-black text-zinc-300 uppercase tracking-widest leading-none">Certificado de Higiene<br/>Vigilância Sanitária</span>
               </div>
            </div>
         </div>
      </footer>

      {/* Smart Mobile Action Bar - The "Thumb Reach" Experience */}
      <div className="lg:hidden fixed bottom-6 left-5 right-5 z-[150] flex gap-3">
         <button onClick={openWhatsApp} className="flex-grow py-5 btn-primary flex items-center justify-center gap-3 text-sm shadow-2xl">
            PEDIR AGORA <MessageCircle size={22} />
         </button>
         <button onClick={() => scrollToSection('lojas')} className="w-20 bg-brand-blue text-white rounded-2xl flex items-center justify-center shadow-2xl">
            <MapPin size={24} />
         </button>
      </div>
    </div>
  );
};

export default App;
