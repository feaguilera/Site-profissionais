
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
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 bg-[#935F69] rounded-full flex items-center justify-center text-white font-serif text-xl">L</div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-[#3D2B2E]' : 'text-[#3D2B2E] sm:text-[#3D2B2E]'}`}>Lumière</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Início', 'Sobre', 'Serviços', 'Resultados', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium hover:text-[#935F69] transition-colors ${scrolled ? 'text-[#3D2B2E]/70' : 'text-[#3D2B2E]/80'}`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-[#935F69] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#7a4e57] transition-all shadow-lg hover:shadow-xl"
            >
              Agendar Agora
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-[#3D2B2E]" /> : <Menu className="text-[#3D2B2E]" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl p-4 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
            {['Início', 'Sobre', 'Serviços', 'Resultados', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 font-medium py-2 border-b border-gray-100"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-[#935F69] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} /> Agendar via WhatsApp
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Facial Aesthetic" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDF2F2]/95 via-[#FDF2F2]/40 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#935F69]/10 text-[#935F69] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Estética Avançada & Bem-estar
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-[#3D2B2E] mb-6 leading-tight">
              Realce sua <span className="italic text-[#935F69]">Beleza Natural</span> com confiança.
            </h1>
            <p className="text-xl text-[#3D2B2E]/70 mb-8 leading-relaxed">
              Tratamentos personalizados com tecnologia de ponta para quem busca resultados extraordinários e sofisticação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="bg-[#935F69] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#7a4e57] transition-all transform hover:-translate-y-1 shadow-xl"
              >
                Solicitar Orçamento <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('serviços')}
                className="bg-white text-[#935F69] border-2 border-[#935F69]/20 px-8 py-4 rounded-full font-bold text-lg hover:border-[#935F69] hover:bg-[#935F69]/5 transition-all transform hover:-translate-y-1"
              >
                Ver Serviços
              </button>
            </div>

            <div className="flex items-center gap-8 border-t border-[#935F69]/10 pt-8">
              <div className="flex items-center gap-2">
                <div className="bg-[#D49B9B]/10 p-2 rounded-full">
                  <Star className="text-[#D49B9B] w-5 h-5 fill-[#D49B9B]" />
                </div>
                <div>
                  <p className="font-bold text-[#3D2B2E] text-sm">4.9/5 Estrelas</p>
                  <p className="text-[#3D2B2E]/50 text-xs">Avaliação das Pacientes</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#D49B9B]/10 p-2 rounded-full">
                  <CheckCircle2 className="text-[#D49B9B] w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[#3D2B2E] text-sm">+2.000</p>
                  <p className="text-[#3D2B2E]/50 text-xs">Procedimentos Realizados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-4 text-[#3D2B2E]">Sente que sua autoestima <span className="text-[#935F69] italic">poderia estar melhor?</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Muitas vezes, pequenos detalhes na nossa aparência afetam como nos sentimos no dia a dia.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Linhas de Expressão', desc: 'Aquelas ruguinhas que te fazem parecer cansada mesmo após dormir bem.' },
              { title: 'Perda de Contorno', desc: 'A sensação de que o rosto está "derretendo" e perdendo a firmeza.' },
              { title: 'Pele sem Viço', desc: 'Aparência opaca, poros dilatados e falta de luminosidade natural.' },
              { title: 'Insegurança', desc: 'Evitar fotos ou usar excesso de maquiagem para esconder imperfeições.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#FDF2F2] p-8 rounded-3xl border border-[#935F69]/5 hover:border-[#D49B9B] transition-all group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#D49B9B] mb-6 shadow-sm group-hover:bg-[#935F69] group-hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#3D2B2E]">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="sobre" className="py-24 bg-[#FDF2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Clinica Interior" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#935F69] rounded-3xl -z-0 opacity-10"></div>
            
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-[#FDF2F2]">
              <p className="text-[#935F69] font-bold text-4xl mb-1">10+</p>
              <p className="text-[#3D2B2E]/40 text-sm uppercase tracking-wider font-bold">Anos de Experiência</p>
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#3D2B2E]">A Solução que sua <span className="text-[#935F69]">Pele Merece.</span></h2>
            <p className="text-[#3D2B2E]/70 text-lg mb-8 leading-relaxed">
              Na Lumière, nossa missão é entender sua anatomia única e seus desejos para criar um protocolo de rejuvenescimento que mantenha sua essência feminina.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                { step: '01', title: 'Consulta Estratégica', desc: 'Análise digital da face e mapeamento de áreas prioritárias.' },
                { step: '02', title: 'Tratamento de Precisão', desc: 'Execução técnica impecável com produtos de alta performance.' },
                { step: '03', title: 'Acompanhamento Premium', desc: 'Suporte pós-procedimento para garantir resultados duradouros.' }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <span className="text-3xl font-serif text-[#D49B9B]/40 font-bold">{step.step}</span>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-[#3D2B2E]">{step.title}</h4>
                    <p className="text-gray-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => scrollToSection('serviços')}
              className="bg-[#935F69] text-white px-8 py-4 rounded-full font-bold hover:bg-[#7a4e57] transition-all shadow-lg"
            >
              Conhecer Nossos Protocolos
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#3D2B2E]">Serviços Premium</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Tratamentos faciais e corporais focados em alta performance e bem-estar.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group relative bg-[#FDF2F2] rounded-3xl overflow-hidden border border-[#935F69]/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                {service.tag && (
                  <div className="absolute top-4 right-4 bg-[#935F69] text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    {service.tag}
                  </div>
                )}
                <div className="h-64 overflow-hidden">
                  <img src={`https://picsum.photos/seed/${service.id}/600/400`} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-[#3D2B2E]">{service.title}</h3>
                  <p className="text-[#3D2B2E]/60 mb-6 text-sm leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#935F69] font-bold">{service.price}</span>
                    <button 
                      onClick={() => window.open(`https://wa.me/5511999999999?text=Olá, gostaria de saber mais sobre ${service.title}`, '_blank')}
                      className="text-[#3D2B2E] font-bold text-sm flex items-center gap-1 hover:text-[#935F69] transition-colors"
                    >
                      Agendar <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-[#935F69] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D49B9B] rounded-full blur-[150px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Por que escolher a <span className="text-[#E8C5C8]">Lumière?</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {BENEFITS.map((benefit, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#E8C5C8]">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-white/60 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Specialist" className="rounded-3xl shadow-2xl relative z-10 border-4 border-[#935F69]" />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 text-[#3D2B2E] border border-[#FDF2F2]">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex text-[#D49B9B]">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#D49B9B" />)}
                  </div>
                  <span className="font-bold text-sm">Altíssima Satisfação</span>
                </div>
                <p className="text-[#3D2B2E]/40 text-xs font-medium uppercase tracking-widest">Atendimento Humanizado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="resultados" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#3D2B2E]">Vidas Transformadas</h2>
            <p className="text-gray-500">O que nossas pacientes dizem sobre a experiência Lumière.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-[#FDF2F2] p-10 rounded-3xl border border-[#935F69]/5 flex flex-col items-center text-center">
                <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full mb-6 ring-4 ring-white shadow-md" />
                <div className="flex text-[#D49B9B] mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="#D49B9B" />)}
                </div>
                <p className="text-[#3D2B2E]/70 italic mb-6 leading-relaxed">"{t.content}"</p>
                <div>
                  <h4 className="font-bold text-[#3D2B2E]">{t.name}</h4>
                  <p className="text-[#935F69] text-xs font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#FDF2F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#3D2B2E]">Perguntas Frequentes</h2>
            <p className="text-gray-500">Tudo o que você precisa saber antes de iniciar seu tratamento.</p>
          </div>

          <div className="space-y-4">
            {FAQ.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-[#935F69]/5 overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white transition-colors"
                >
                  <span className="font-bold text-[#3D2B2E]">{item.question}</span>
                  <ChevronDown className={`text-[#D49B9B] transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-[#3D2B2E]/60 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#935F69] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
           <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white/5 rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Sua melhor versão <br /><span className="italic text-[#E8C5C8]">começa aqui.</span></h2>
          <p className="text-white/90 text-xl mb-12">Agende sua avaliação e descubra o protocolo ideal para você.</p>
          <button 
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            className="bg-white text-[#935F69] px-12 py-5 rounded-full font-bold text-xl hover:bg-[#FDF2F2] transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 mx-auto"
          >
            <MessageCircle size={24} /> Agendar via WhatsApp
          </button>
          <p className="mt-6 text-white/40 text-sm font-medium">Atendimento prioritário</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-[#FDF2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-[#935F69] rounded-full flex items-center justify-center text-white font-serif text-xl">L</div>
                <span className="text-2xl font-bold tracking-tight text-[#3D2B2E]">Lumière</span>
              </div>
              <p className="text-[#3D2B2E]/50 text-sm leading-relaxed mb-6">
                Clínica de estética avançada dedicada a realçar a beleza natural através de ciência, tecnologia e cuidado humanizado.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-[#FDF2F2] rounded-full flex items-center justify-center text-[#935F69] hover:bg-[#935F69] hover:text-white transition-all"><Instagram size={20} /></a>
                <a href="#" className="w-10 h-10 bg-[#FDF2F2] rounded-full flex items-center justify-center text-[#935F69] hover:bg-[#935F69] hover:text-white transition-all"><Facebook size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-[#3D2B2E] mb-6 text-sm uppercase tracking-widest">Links</h4>
              <ul className="space-y-4 text-[#3D2B2E]/50 text-sm">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-[#935F69]">Início</button></li>
                <li><button onClick={() => scrollToSection('sobre')} className="hover:text-[#935F69]">Sobre</button></li>
                <li><button onClick={() => scrollToSection('serviços')} className="hover:text-[#935F69]">Tratamentos</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#3D2B2E] mb-6 text-sm uppercase tracking-widest">Contato</h4>
              <ul className="space-y-4 text-[#3D2B2E]/50 text-sm">
                <li className="flex items-start gap-3"><Phone size={18} className="text-[#935F69]" /> <span>(11) 99999-9999</span></li>
                <li className="flex items-start gap-3"><Mail size={18} className="text-[#935F69]" /> <span>contato@lumiereestetica.com.br</span></li>
                <li className="flex items-start gap-3"><MapPin size={18} className="text-[#935F69]" /> <span>Av. Paulista, 1000 - Bela Vista, SP</span></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#3D2B2E] mb-6 text-sm uppercase tracking-widest">Horário</h4>
              <ul className="space-y-4 text-[#3D2B2E]/50 text-sm">
                <li className="flex justify-between"><span>Seg - Sex</span> <span>08:00 - 20:00</span></li>
                <li className="flex justify-between"><span>Sábado</span> <span>09:00 - 14:00</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#FDF2F2] pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#3D2B2E]/30 text-xs">© 2024 Lumière Estética Avançada.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button 
        onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 shadow-[#25D366]/20"
      >
        <MessageCircle size={32} />
      </button>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-[#FDF2F2] p-3 z-40 flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase text-[#935F69]">Agendamento Prioritário</span>
        <button 
          onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
          className="bg-[#935F69] text-white px-6 py-2 rounded-full text-xs font-bold"
        >
          Avaliação Grátis
        </button>
      </div>
    </div>
  );
};

export default App;
