
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  MessageCircle,
  Phone,
  Clock,
  ShieldCheck,
  Zap,
  Instagram,
  Settings,
  Star,
  MapPin,
  Truck,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { SERVICES, TESTIMONIALS, FAQ, BENEFITS, PROCESS, BRANDS } from './constants';

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
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen selection:bg-[#FACC15] selection:text-[#09090B]">
      {/* Header */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#09090B]/95 backdrop-blur-md shadow-2xl py-3 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-[#FACC15] p-2 rounded-lg">
              <Settings className="text-[#09090B]" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white uppercase italic leading-none">TurboTech</span>
              <span className="text-[10px] font-bold text-[#FACC15] uppercase tracking-[0.2em]">Industrial Power</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {['Serviços', 'Processo', 'Depoimentos', 'Localização'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="text-[11px] font-bold tracking-widest uppercase text-slate-400 hover:text-[#FACC15] transition-all"
              >
                {item}
              </button>
            ))}
            <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-[#FACC15] text-[#09090B] px-6 py-2.5 rounded-md text-[11px] font-black uppercase tracking-widest btn-performance flex items-center gap-2"
            >
              <Phone size={14} /> Agendar Agora
            </button>
          </div>

          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-[#09090B] z-50 flex flex-col p-8 animate-in slide-in-from-right">
            <div className="flex justify-between items-center mb-16">
              <span className="text-2xl font-black italic text-[#FACC15]">TURBOTECH</span>
              <button onClick={() => setIsMenuOpen(false)}><X size={32} className="text-white"/></button>
            </div>
            <div className="flex flex-col gap-6">
              {['Serviços', 'Processo', 'Depoimentos', 'Localização', 'FAQ'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                  className="text-2xl font-bold text-left border-b border-white/5 pb-4 text-white hover:text-[#FACC15]"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="bg-[#FACC15] text-[#09090B] py-5 rounded-lg font-black mt-6 uppercase tracking-widest text-sm flex justify-center items-center gap-3"
              >
                <MessageCircle size={20} /> Orçamento Grátis
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FACC15]/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10 animate-in fade-in duration-700">
            <div className="inline-flex items-center gap-2 mb-6 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 size={14} className="text-[#FACC15]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Potência & Engenharia de Resultados</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight uppercase italic tracking-tighter">
              Energia em <br />
              <span className="text-[#FACC15] italic underline decoration-white/10">Movimento.</span>
            </h1>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
              Diagnóstico de alta visibilidade e precisão. Transparência total, tecnologia industrial e 1 ano de garantia para quem não aceita menos que o topo.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="bg-[#FACC15] text-[#09090B] px-10 py-5 rounded-md font-black text-xs tracking-widest uppercase btn-performance shadow-2xl flex items-center justify-center gap-3"
              >
                Solicitar Orçamento <ArrowRight size={18} />
              </button>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Clock size={16} className="text-[#FACC15]" /> Checklist em 2 horas
                </div>
                <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Atendimento Profissional</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in slide-in-from-bottom-10 duration-1000">
            <div className="rounded-2xl overflow-hidden border-4 border-[#27272A] shadow-industrial relative group">
              <img 
                src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?w=1200&q=80" 
                alt="Industrial Mechanic" 
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] to-transparent opacity-60"></div>
              
              <div className="absolute bottom-8 left-8 right-8 bg-[#09090B]/90 backdrop-blur-md p-6 rounded-xl border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-r border-white/10 pr-4">
                    <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1">Qualidade</p>
                    <p className="text-white text-xs font-bold italic">ISO Certificada</p>
                  </div>
                  <div className="pl-4">
                    <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1">Garantia</p>
                    <p className="text-white text-xs font-bold italic">12 Meses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Bar */}
      <div className="bg-[#18181B] py-10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-slate-500 text-[9px] font-black uppercase tracking-[0.5em] mb-8">Dominamos as principais marcas</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
             {BRANDS.map(brand => (
               <span key={brand} className="text-white font-black italic text-lg tracking-tighter uppercase">{brand}</span>
             ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section id="diferenciais" className="py-24 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="bg-[#18181B] p-8 rounded-xl border border-white/5 hover:border-[#FACC15]/40 transition-all">
                <div className="text-[#FACC15] mb-6">{benefit.icon}</div>
                <h4 className="text-white font-black uppercase tracking-wider text-sm mb-3">{benefit.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processo" className="py-24 bg-[#18181B] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter mb-4">Fluxo TurboTech</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-medium">Segurança em primeiro lugar. Processo estruturado para resultados impecáveis.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {PROCESS.map((p, idx) => (
              <div key={idx} className="relative p-8 rounded-xl bg-[#09090B]/50 border border-white/5 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-[#FACC15] flex items-center justify-center text-[#09090B] mb-6 shadow-xl shadow-[#FACC15]/10 group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <div className="absolute top-6 right-8 text-white/5 font-black text-5xl italic">{idx + 1}</div>
                <h4 className="text-white font-black uppercase tracking-wider text-xs mb-3">{p.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-32 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-[#FACC15] text-[10px] font-black tracking-[0.3em] uppercase mb-4 block">Power Engineering</span>
              <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter mb-4">Especialidades</h2>
              <p className="text-slate-400 text-sm font-medium">Equipamento pesado e tecnologia de diagnóstico para qualquer desafio.</p>
            </div>
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="text-white bg-[#18181B] px-8 py-4 rounded-md font-black text-[10px] uppercase tracking-widest border border-white/10 hover:bg-[#FACC15] hover:text-[#09090B] transition-all"
            >
              Outros Serviços
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="bg-[#18181B] p-8 rounded-2xl border border-white/5 hover:border-[#FACC15]/30 transition-all group">
                <div className="flex justify-between items-start mb-10">
                  <div className="bg-[#09090B] p-4 rounded-xl text-[#FACC15] group-hover:bg-[#FACC15] group-hover:text-[#09090B] transition-all">
                    {s.icon || <Settings size={24} />}
                  </div>
                  {s.tag && <span className="bg-[#FACC15]/10 text-[#FACC15] px-3 py-1 rounded text-[9px] font-black uppercase tracking-widest">{s.tag}</span>}
                </div>
                <h3 className="text-2xl font-black text-white italic uppercase mb-4">{s.title}</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">{s.description}</p>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-white font-bold text-xs uppercase tracking-widest">{s.price}</span>
                  <button className="text-[#FACC15] group-hover:translate-x-2 transition-transform">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Guincho Bar */}
      <div className="bg-[#FACC15] py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-[#09090B]">
            <Truck size={40} className="animate-pulse" />
            <div>
              <p className="font-black text-xl uppercase italic leading-none">Serviço de Guincho</p>
              <p className="font-bold text-sm uppercase opacity-70">Disponível para emergências 24h</p>
            </div>
          </div>
          <button 
            onClick={() => window.open('tel:5511999999999')}
            className="bg-[#09090B] text-[#FACC15] px-10 py-4 rounded-md font-black uppercase text-xs tracking-widest flex items-center gap-3 shadow-xl hover:bg-white hover:text-[#09090B] transition-all"
          >
            <Phone size={18} /> Chamar Agora
          </button>
        </div>
      </div>

      {/* Location Section */}
      <section id="localizacao" className="py-32 bg-[#18181B]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-8">Localização</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#FACC15] shrink-0" size={24} />
                <div>
                  <p className="text-white font-bold uppercase tracking-widest text-sm mb-1">Centro Técnico Lapa</p>
                  <p className="text-slate-400 text-sm">Av. Engenheiro Automotivo, 1500 - Lapa<br />São Paulo - SP, 05000-000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-[#FACC15] shrink-0" size={24} />
                <div>
                  <p className="text-white font-bold uppercase tracking-widest text-sm mb-1">Horário Operacional</p>
                  <p className="text-slate-400 text-sm">Segunda a Sexta: 08:00 às 18:00<br />Sábados: 08:00 às 13:00</p>
                </div>
              </div>
              <div className="pt-8">
                <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-md font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#FACC15] hover:text-[#09090B] hover:border-[#FACC15] transition-all flex items-center gap-3">
                  Abrir no Google Maps <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
          <div className="h-[400px] bg-zinc-800 rounded-2xl overflow-hidden relative border-4 border-[#09090B] shadow-industrial">
            <div className="absolute inset-0 bg-[#09090B]/40"></div>
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80" 
              alt="Map Base" 
              className="w-full h-full object-cover grayscale opacity-20"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#FACC15] p-4 rounded-full shadow-2xl animate-bounce">
                <MapPin className="text-[#09090B]" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="depoimentos" className="py-32 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-16">Feedback Real</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-[#18181B] p-10 rounded-2xl border border-white/5 text-left relative">
                <div className="flex text-[#FACC15] mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 italic mb-10 font-medium leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale" />
                  <div>
                    <h4 className="font-black text-white uppercase text-[10px] tracking-widest">{t.name}</h4>
                    <p className="text-slate-500 text-[9px] font-bold uppercase">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-[#18181B]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white text-center italic uppercase mb-16 tracking-tighter">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {FAQ.map((item, idx) => (
              <div key={idx} className="bg-[#09090B] rounded-xl border border-white/5">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center group"
                >
                  <span className="text-white font-bold tracking-tight text-sm group-hover:text-[#FACC15] transition-colors">{item.question}</span>
                  <ChevronDown className={`text-[#FACC15] transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} size={20} />
                </button>
                <div className={`transition-all duration-300 ${activeFaq === idx ? 'max-h-96 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-[#FACC15] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <Settings size={800} className="animate-spin-slow text-[#09090B]" />
        </div>
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-6xl md:text-8xl font-black text-[#09090B] mb-10 italic uppercase tracking-tighter leading-none text-shadow-xl">Energia para <br /> seu Carro.</h2>
          <p className="text-[#09090B] font-black uppercase tracking-[0.3em] mb-12 text-sm">Agende seu diagnóstico agora mesmo.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-[#09090B] text-[#FACC15] px-12 py-6 rounded-md font-black text-xs tracking-widest uppercase shadow-2xl flex items-center justify-center gap-3 hover:bg-white hover:text-[#09090B] transition-all"
            >
              <MessageCircle size={20} /> Orçamento Digital
            </button>
            <button 
               onClick={() => scrollToSection('localizacao')}
               className="bg-transparent border-2 border-[#09090B] text-[#09090B] px-12 py-6 rounded-md font-black text-xs tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-[#09090B] hover:text-[#FACC15] transition-all"
            >
              Visitar Oficina
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#09090B] pt-32 pb-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-[#FACC15] p-2 rounded-lg text-[#09090B]">
                  <Settings size={20} />
                </div>
                <span className="text-2xl font-black italic uppercase text-white tracking-tighter">TURBOTECH</span>
              </div>
              <p className="text-slate-500 text-[9px] uppercase font-black tracking-widest leading-loose mb-10">
                Precisão, Transparência e <br />Engenharia Industrial.
              </p>
              <div className="flex gap-5">
                <a href="#" className="w-10 h-10 rounded-lg bg-[#18181B] flex items-center justify-center text-slate-400 hover:text-[#FACC15] transition-all"><Instagram size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-lg bg-[#18181B] flex items-center justify-center text-slate-400 hover:text-[#FACC15] transition-all"><MessageCircle size={20} /></a>
              </div>
            </div>

            {[
              { title: 'Serviços', links: ['Troca de Óleo', 'Freios ABS', 'Injeção Direta', 'Suspensão'] },
              { title: 'Filiais', links: ['Lapa, SP', 'Pinheiros, SP', 'Campinas, SP'] },
              { title: 'Suporte', links: ['Trabalhe Conosco', 'Política de Garantia', 'Termos de Serviço'] }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="text-[#FACC15] mb-8 text-[10px] font-black uppercase tracking-[0.4em]">{col.title}</h4>
                <ul className="space-y-5 text-slate-500 text-[10px] font-bold tracking-widest uppercase">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx} className="hover:text-white transition-colors cursor-pointer">{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-700">© 2024 TurboTech Industrial Power. CNPJ 00.000.000/0001-00</p>
            <div className="flex gap-8 opacity-10 text-white font-black text-[9px] uppercase tracking-widest italic">
              <span>High Precision</span>
              <span>Industrial Grade</span>
              <span>Advanced Diagnosis</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <button 
        onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
        className="fixed bottom-10 right-10 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center gap-3 shadow-[#FACC15]/20"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
};

export default App;
