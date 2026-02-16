
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
            <div className="w-10 h-10 bg-[#FF85A2] rounded-full flex items-center justify-center text-white font-serif text-xl shadow-lg">L</div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-[#590D22]' : 'text-[#590D22]'}`}>Lumière</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Início', 'Sobre', 'Serviços', 'Resultados', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium hover:text-[#C9184A] transition-colors ${scrolled ? 'text-[#590D22]/70' : 'text-[#590D22]/80'}`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-[#C9184A] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#A4133C] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Agendar Agora
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-[#590D22]" /> : <Menu className="text-[#590D22]" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl p-4 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
            {['Início', 'Sobre', 'Serviços', 'Resultados', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[#590D22] font-medium py-2 border-b border-[#FFF0F3]"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-[#C9184A] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2"
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFF0F3]/95 via-[#FFF0F3]/40 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#FF85A2]/20 text-[#C9184A] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Estética Avançada & Feminilidade
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-[#590D22] mb-6 leading-tight">
              Realce sua <span className="italic text-[#FF85A2]">Beleza Única</span> com suavidade.
            </h1>
            <p className="text-xl text-[#590D22]/70 mb-8 leading-relaxed">
              Tratamentos exclusivos pensados para a mulher moderna que valoriza resultados naturais e um toque extra de cuidado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="bg-[#C9184A] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#A4133C] transition-all transform hover:-translate-y-1 shadow-xl"
              >
                Solicitar Orçamento <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('serviços')}
                className="bg-white text-[#C9184A] border-2 border-[#FF85A2]/30 px-8 py-4 rounded-full font-bold text-lg hover:border-[#C9184A] hover:bg-[#FFF0F3] transition-all transform hover:-translate-y-1"
              >
                Ver Serviços
              </button>
            </div>

            <div className="flex items-center gap-8 border-t border-[#FF85A2]/10 pt-8">
              <div className="flex items-center gap-2">
                <div className="bg-[#FF85A2]/10 p-2 rounded-full">
                  <Star className="text-[#FF85A2] w-5 h-5 fill-[#FF85A2]" />
                </div>
                <div>
                  <p className="font-bold text-[#590D22] text-sm">4.9/5 Estrelas</p>
                  <p className="text-[#590D22]/50 text-xs">Amado por nossas pacientes</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#FF85A2]/10 p-2 rounded-full">
                  <CheckCircle2 className="text-[#FF85A2] w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[#590D22] text-sm">+2.000</p>
                  <p className="text-[#590D22]/50 text-xs">Transformações Reais</p>
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
            <h2 className="text-3xl md:text-5xl font-serif mb-4 text-[#590D22]">Sente que seu brilho <span className="text-[#FF85A2] italic">merece ser resgatado?</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto italic">O cuidado com você mesma é o maior investimento em sua confiança.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Linhas de Expressão', desc: 'Aqueles sinais de cansaço que escondem sua verdadeira vitalidade.' },
              { title: 'Falta de Hidratação', desc: 'Uma pele que perdeu o viço e o brilho característico da saúde.' },
              { title: 'Volume e Contorno', desc: 'O desejo de recuperar a moldura natural do seu rosto com delicadeza.' },
              { title: 'Autoestima em Baixa', desc: 'Quando você olha no espelho e sente que sua imagem não reflete quem você é.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#FFF0F3] p-8 rounded-3xl border border-[#FF85A2]/10 hover:border-[#FF85A2] transition-all group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#FF85A2] mb-6 shadow-sm group-hover:bg-[#C9184A] group-hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#590D22]">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="sobre" className="py-24 bg-[#FFF0F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Clinica Interior" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#FF85A2] rounded-3xl -z-0 opacity-20"></div>
            
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-[#FFF0F3]">
              <p className="text-[#C9184A] font-bold text-4xl mb-1">10+</p>
              <p className="text-[#590D22]/40 text-sm uppercase tracking-wider font-bold">Anos Cuidando de Você</p>
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#590D22]">O Cuidado que seu <span className="text-[#C9184A]">Corpo e Alma pedem.</span></h2>
            <p className="text-[#590D22]/70 text-lg mb-8 leading-relaxed">
              Na Lumière, acreditamos no rosa como símbolo de força e autocuidado. Nossos protocolos são desenhados para realçar o que você já tem de mais belo.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                { step: '01', title: 'Análise Sensível', desc: 'Entendemos suas queixas e sonhos antes de qualquer procedimento.' },
                { step: '02', title: 'Toque Especialista', desc: 'Técnicas modernas aplicadas com a delicadeza que sua pele exige.' },
                { step: '03', title: 'Suporte Continuado', desc: 'Estamos ao seu lado em cada etapa da sua nova jornada de beleza.' }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <span className="text-3xl font-serif text-[#FF85A2]/50 font-bold">{step.step}</span>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-[#590D22]">{step.title}</h4>
                    <p className="text-gray-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => scrollToSection('serviços')}
              className="bg-[#C9184A] text-white px-8 py-4 rounded-full font-bold hover:bg-[#A4133C] transition-all shadow-lg"
            >
              Ver Menu de Tratamentos
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#590D22]">Protocolos Exclusivos</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Excelência em cada detalhe para sua melhor versão.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group relative bg-[#FFF0F3] rounded-3xl overflow-hidden border border-[#FF85A2]/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                {service.tag && (
                  <div className="absolute top-4 right-4 bg-[#C9184A] text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-md">
                    {service.tag}
                  </div>
                )}
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#C9184A]/10 group-hover:bg-transparent transition-colors duration-300"></div>
                  <img src={`https://picsum.photos/seed/${service.id}/600/400`} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-[#590D22]">{service.title}</h3>
                  <p className="text-[#590D22]/60 mb-6 text-sm leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#C9184A] font-bold">{service.price}</span>
                    <button 
                      onClick={() => window.open(`https://wa.me/5511999999999?text=Olá, gostaria de saber mais sobre ${service.title}`, '_blank')}
                      className="text-[#590D22] font-bold text-sm flex items-center gap-1 hover:text-[#C9184A] transition-colors"
                    >
                      Reservar <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-[#C9184A] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF85A2] rounded-full blur-[150px] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Por que somos <br /><span className="text-[#FFB3C1]">Referência?</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {BENEFITS.map((benefit, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white border border-white/20">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-white/70 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Specialist" className="rounded-3xl shadow-2xl relative z-10 border-8 border-white/10" />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 text-[#590D22] border border-[#FFF0F3]">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex text-[#FF85A2]">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FF85A2" />)}
                  </div>
                  <span className="font-bold text-sm">Satisfação Máxima</span>
                </div>
                <p className="text-[#590D22]/40 text-xs font-medium uppercase tracking-widest">Protocolos de Segurança Ouro</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="resultados" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#590D22]">Voz das Pacientes</h2>
            <p className="text-gray-500">Histórias reais de quem confiou na Lumière.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-[#FFF0F3] p-10 rounded-3xl border border-[#FF85A2]/10 flex flex-col items-center text-center hover:border-[#FF85A2] transition-colors">
                <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full mb-6 ring-4 ring-[#FF85A2]/30 shadow-md" />
                <div className="flex text-[#FF85A2] mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="#FF85A2" />)}
                </div>
                <p className="text-[#590D22]/70 italic mb-6 leading-relaxed">"{t.content}"</p>
                <div>
                  <h4 className="font-bold text-[#590D22]">{t.name}</h4>
                  <p className="text-[#C9184A] text-xs font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#FFF0F3]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#590D22]">Dúvidas Frequentes</h2>
            <p className="text-gray-500">Esclarecemos tudo para você agendar com tranquilidade.</p>
          </div>

          <div className="space-y-4">
            {FAQ.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-[#FF85A2]/10 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[#FFF0F3]/30 transition-colors"
                >
                  <span className="font-bold text-[#590D22]">{item.question}</span>
                  <ChevronDown className={`text-[#FF85A2] transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-[#590D22]/60 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#FF85A2] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
           <div className="absolute top-10 left-10 w-64 h-64 border-8 border-white rounded-full"></div>
           <div className="absolute bottom-20 right-20 w-48 h-48 border-8 border-white rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Dê o primeiro passo para sua <br /><span className="italic text-[#590D22]">Nova Versão.</span></h2>
          <p className="text-white/90 text-xl mb-12">Estamos ansiosas para receber você e cuidar de cada detalhe da sua beleza.</p>
          <button 
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            className="bg-[#C9184A] text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-[#A4133C] transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 mx-auto"
          >
            <MessageCircle size={24} /> Conversar no WhatsApp
          </button>
          <p className="mt-6 text-white/60 text-sm font-medium">Resposta carinhosa e rápida</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-[#FFF0F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-[#FF85A2] rounded-full flex items-center justify-center text-white font-serif text-xl shadow-md">L</div>
                <span className="text-2xl font-bold tracking-tight text-[#590D22]">Lumière</span>
              </div>
              <p className="text-[#590D22]/50 text-sm leading-relaxed mb-6">
                Estética avançada com alma feminina. Unimos ciência e carinho para realçar sua beleza natural.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-[#FFF0F3] rounded-full flex items-center justify-center text-[#FF85A2] hover:bg-[#C9184A] hover:text-white transition-all shadow-sm"><Instagram size={20} /></a>
                <a href="#" className="w-10 h-10 bg-[#FFF0F3] rounded-full flex items-center justify-center text-[#FF85A2] hover:bg-[#C9184A] hover:text-white transition-all shadow-sm"><Facebook size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-[#590D22] mb-6 text-sm uppercase tracking-widest">Navegação</h4>
              <ul className="space-y-4 text-[#590D22]/50 text-sm">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-[#C9184A]">Início</button></li>
                <li><button onClick={() => scrollToSection('sobre')} className="hover:text-[#C9184A]">Sobre Nós</button></li>
                <li><button onClick={() => scrollToSection('serviços')} className="hover:text-[#C9184A]">Serviços</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#590D22] mb-6 text-sm uppercase tracking-widest">Contato</h4>
              <ul className="space-y-4 text-[#590D22]/50 text-sm">
                <li className="flex items-start gap-3"><Phone size={18} className="text-[#FF85A2]" /> <span>(11) 99999-9999</span></li>
                <li className="flex items-start gap-3"><Mail size={18} className="text-[#FF85A2]" /> <span>oi@lumiereestetica.com.br</span></li>
                <li className="flex items-start gap-3"><MapPin size={18} className="text-[#FF85A2]" /> <span>Av. Paulista, 1000, São Paulo</span></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#590D22] mb-6 text-sm uppercase tracking-widest">Abertura</h4>
              <ul className="space-y-4 text-[#590D22]/50 text-sm">
                <li className="flex justify-between"><span>Segunda - Sexta</span> <span>08:00 - 20:00</span></li>
                <li className="flex justify-between"><span>Sábado</span> <span>09:00 - 14:00</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#FFF0F3] pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#590D22]/30 text-xs">© 2024 Lumière Estética Avançada. Feito com amor.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button 
        onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 shadow-[#25D366]/40"
      >
        <MessageCircle size={32} />
      </button>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-[#FFF0F3] p-3 z-40 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
           <span className="text-[10px] font-bold uppercase text-[#C9184A]">Atendimento Online</span>
        </div>
        <button 
          onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
          className="bg-[#C9184A] text-white px-6 py-2 rounded-full text-xs font-bold shadow-md"
        >
          Garantir Avaliação
        </button>
      </div>
    </div>
  );
};

export default App;
