
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
    <div className="min-h-screen selection:bg-[#F97316] selection:text-white">
      {/* Header */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0F172A]/95 backdrop-blur-md shadow-2xl py-3 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-[#F97316] p-2 rounded-lg">
              <Settings className="text-white" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white uppercase italic">TurboTech</span>
              <span className="text-[10px] font-bold text-[#F97316] uppercase tracking-[0.2em] -mt-1">Especialistas Automotivos</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {['Serviços', 'Processo', 'Depoimentos', 'Localização'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="text-[11px] font-bold tracking-widest uppercase text-slate-400 hover:text-white transition-all"
              >
                {item}
              </button>
            ))}
            <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-[#F97316] text-white px-6 py-2.5 rounded-md text-[11px] font-black uppercase tracking-widest btn-turbo flex items-center gap-2"
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
          <div className="lg:hidden fixed inset-0 bg-[#0F172A] z-50 flex flex-col p-8 animate-in slide-in-from-right">
            <div className="flex justify-between items-center mb-16">
              <span className="text-2xl font-black italic">TURBOTECH</span>
              <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-6">
              {['Serviços', 'Processo', 'Depoimentos', 'Localização', 'FAQ'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                  className="text-2xl font-bold text-left border-b border-white/5 pb-4 text-white"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="bg-[#F97316] text-white py-5 rounded-lg font-bold mt-6 uppercase tracking-widest text-sm flex justify-center items-center gap-3"
              >
                <MessageCircle size={20} /> Orçamento Grátis
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F97316]/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10 animate-in fade-in duration-700">
            <div className="inline-flex items-center gap-2 mb-6 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 size={14} className="text-[#F97316]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Oficina Certificada - Unidade São Paulo</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight uppercase italic tracking-tighter">
              Mecânica de <br />
              <span className="text-[#F97316]">Confiança</span> & Precisão.
            </h1>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
              Evite gastos desnecessários. Oferecemos diagnóstico digital completo, peças originais com 1 ano de garantia e transparência total em cada parafuso apertado.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="bg-[#F97316] text-white px-10 py-5 rounded-md font-black text-xs tracking-widest uppercase btn-turbo shadow-2xl flex items-center justify-center gap-3"
              >
                Solicitar Orçamento <ArrowRight size={18} />
              </button>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Clock size={16} className="text-[#F97316]" /> Check-up em 2 horas
                </div>
                <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Sujeito a agendamento</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in slide-in-from-bottom-10 duration-1000">
            <div className="rounded-2xl overflow-hidden border-4 border-[#1E293B] shadow-industrial relative group">
              <img 
                src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?w=1200&q=80" 
                alt="Professional Mechanic" 
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent opacity-60"></div>
              
              <div className="absolute bottom-8 left-8 right-8 bg-[#0F172A]/90 backdrop-blur-md p-6 rounded-xl border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-r border-white/10 pr-4">
                    <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1">Peças</p>
                    <p className="text-white text-xs font-bold">100% Genuínas</p>
                  </div>
                  <div className="pl-4">
                    <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1">Garantia</p>
                    <p className="text-white text-xs font-bold">12 Meses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Bar */}
      <div className="bg-[#1E293B] py-10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-slate-500 text-[9px] font-black uppercase tracking-[0.5em] mb-8">Especialistas nas Montadoras</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
             {BRANDS.map(brand => (
               <span key={brand} className="text-white font-black italic text-lg tracking-tighter uppercase">{brand}</span>
             ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section id="diferenciais" className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="bg-[#1E293B] p-8 rounded-xl border border-white/5 hover:border-[#F97316]/40 transition-all">
                <div className="text-[#F97316] mb-6">{benefit.icon}</div>
                <h4 className="text-white font-black uppercase tracking-wider text-sm mb-3">{benefit.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processo" className="py-24 bg-[#1E293B] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter mb-4">Como trabalhamos</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-medium">Nosso compromisso é com a sua segurança. Seguimos um padrão rigoroso de atendimento para garantir o melhor resultado.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {PROCESS.map((p, idx) => (
              <div key={idx} className="relative p-8 rounded-xl bg-[#0F172A]/50 border border-white/5 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#F97316] flex items-center justify-center text-white mb-6 shadow-xl shadow-[#F97316]/10">
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
      <section id="servicos" className="py-32 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-[#F97316] text-[10px] font-black tracking-[0.3em] uppercase mb-4 block">Precisão Mecânica</span>
              <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter mb-4">Nossas Especialidades</h2>
              <p className="text-slate-400 text-sm font-medium">De manutenções simples a diagnósticos complexos de motor e transmissão.</p>
            </div>
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="text-white bg-[#1E293B] px-8 py-4 rounded-md font-black text-[10px] uppercase tracking-widest border border-white/10 hover:bg-[#F97316] transition-all"
            >
              Consultar Outros Serviços
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="bg-[#1E293B] p-8 rounded-2xl border border-white/5 hover:border-[#F97316]/30 transition-all group">
                <div className="flex justify-between items-start mb-10">
                  <div className="bg-[#0F172A] p-4 rounded-xl text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-all">
                    {s.icon || <Settings size={24} />}
                  </div>
                  {s.tag && <span className="bg-[#F97316]/10 text-[#F97316] px-3 py-1 rounded text-[9px] font-black uppercase tracking-widest">{s.tag}</span>}
                </div>
                <h3 className="text-2xl font-black text-white italic uppercase mb-4">{s.title}</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">{s.description}</p>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-white font-bold text-xs uppercase tracking-widest">{s.price}</span>
                  <button className="text-[#F97316] group-hover:translate-x-2 transition-transform">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Guincho Bar */}
      <div className="bg-[#F97316] py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-[#0F172A]">
            <Truck size={40} className="animate-pulse" />
            <div>
              <p className="font-black text-xl uppercase italic leading-none">Precisa de Guincho?</p>
              <p className="font-bold text-sm uppercase opacity-70">Atendimento 24h para emergências</p>
            </div>
          </div>
          <button 
            onClick={() => window.open('tel:5511999999999')}
            className="bg-[#0F172A] text-white px-10 py-4 rounded-md font-black uppercase text-xs tracking-widest flex items-center gap-3 shadow-xl"
          >
            <Phone size={18} /> (11) 99999-9999
          </button>
        </div>
      </div>

      {/* Location Section */}
      <section id="localizacao" className="py-32 bg-[#1E293B]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-8">Onde Estamos</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#F97316] shrink-0" size={24} />
                <div>
                  <p className="text-white font-bold uppercase tracking-widest text-sm mb-1">Endereço</p>
                  <p className="text-slate-400 text-sm">Av. Engenheiro Automotivo, 1500 - Lapa<br />São Paulo - SP, 05000-000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-[#F97316] shrink-0" size={24} />
                <div>
                  <p className="text-white font-bold uppercase tracking-widest text-sm mb-1">Horário de Funcionamento</p>
                  <p className="text-slate-400 text-sm">Segunda a Sexta: 08:00 às 18:00<br />Sábados: 08:00 às 13:00</p>
                </div>
              </div>
              <div className="pt-8">
                <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-md font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#F97316] hover:border-[#F97316] transition-all flex items-center gap-3">
                  Como Chegar (Google Maps) <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
          <div className="h-[400px] bg-slate-800 rounded-2xl overflow-hidden relative border-4 border-[#0F172A] shadow-industrial">
            <div className="absolute inset-0 bg-[#0F172A]/20"></div>
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80" 
              alt="Map Placeholder" 
              className="w-full h-full object-cover grayscale opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#F97316] p-4 rounded-full shadow-2xl animate-bounce">
                <MapPin className="text-white" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="depoimentos" className="py-32 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-16">O que dizem nossos clientes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-[#1E293B] p-10 rounded-2xl border border-white/5 text-left relative">
                <div className="flex text-[#F97316] mb-6">
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
      <section id="faq" className="py-32 bg-[#1E293B]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white text-center italic uppercase mb-16 tracking-tighter">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {FAQ.map((item, idx) => (
              <div key={idx} className="bg-[#0F172A] rounded-xl border border-white/5">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center group"
                >
                  <span className="text-white font-bold tracking-tight text-sm group-hover:text-[#F97316] transition-colors">{item.question}</span>
                  <ChevronDown className={`text-[#F97316] transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} size={20} />
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
      <section className="py-40 bg-[#F97316] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <Settings size={800} className="animate-spin-slow text-white" />
        </div>
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-6xl md:text-8xl font-black text-[#0F172A] mb-10 italic uppercase tracking-tighter leading-none">Mantenha seu <br /> carro novo.</h2>
          <p className="text-[#0F172A] font-bold uppercase tracking-[0.3em] mb-12 text-sm opacity-80">Orçamento digital sem custos hoje.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-[#0F172A] text-white px-12 py-6 rounded-md font-black text-xs tracking-widest uppercase shadow-2xl flex items-center justify-center gap-3"
            >
              <MessageCircle size={20} /> Chamar no WhatsApp
            </button>
            <button 
               onClick={() => scrollToSection('localizacao')}
               className="bg-transparent border-2 border-[#0F172A] text-[#0F172A] px-12 py-6 rounded-md font-black text-xs tracking-widest uppercase flex items-center justify-center gap-3"
            >
              Ver Localização
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] pt-32 pb-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-[#F97316] p-2 rounded-lg text-white">
                  <Settings size={20} />
                </div>
                <span className="text-2xl font-black italic uppercase text-white">TURBOTECH</span>
              </div>
              <p className="text-slate-500 text-[9px] uppercase font-black tracking-widest leading-loose mb-10">
                Performance, Transparência e <br />Tecnologia em um só lugar.
              </p>
              <div className="flex gap-5">
                <a href="#" className="w-10 h-10 rounded-lg bg-[#1E293B] flex items-center justify-center text-slate-400 hover:text-[#F97316] transition-all"><Instagram size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-lg bg-[#1E293B] flex items-center justify-center text-slate-400 hover:text-[#F97316] transition-all"><MessageCircle size={20} /></a>
              </div>
            </div>

            {[
              { title: 'Serviços', links: ['Troca de Óleo', 'Freios ABS', 'Injeção', 'Suspensão'] },
              { title: 'Unidades', links: ['Lapa, SP', 'Pinheiros, SP', 'Campinas, SP'] },
              { title: 'Links Úteis', links: ['Trabalhe Conosco', 'Nossa Oficina', 'Blog Automotivo', 'Garantia'] }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="text-[#F97316] mb-8 text-[10px] font-black uppercase tracking-[0.4em]">{col.title}</h4>
                <ul className="space-y-5 text-slate-500 text-[10px] font-bold tracking-widest uppercase">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx} className="hover:text-white transition-colors cursor-pointer">{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-700">© 2024 TurboTech Performance Lab. CNPJ 00.000.000/0001-00</p>
            <div className="flex gap-8 opacity-10 text-white font-black text-[9px] uppercase tracking-widest italic">
              <span>Race Engineered</span>
              <span>Daily Maintenance</span>
              <span>Diagnosis Pro</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <button 
        onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
        className="fixed bottom-10 right-10 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center gap-3 animate-bounce-slow"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
};

export default App;
