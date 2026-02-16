
import React from 'react';
import { Sparkles, Heart, ShieldCheck, Clock, UserCheck, CheckCircle2 } from 'lucide-react';
import { Service, Testimonial, FAQItem, Benefit } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Harmonização Facial',
    description: 'Protocolo personalizado para equilibrar seus traços naturais com preenchimento e bioestimuladores.',
    price: 'A partir de R$ 1.400',
    tag: 'Mais Procurado'
  },
  {
    id: '2',
    title: 'Bioestimuladores',
    description: 'Aumente a produção natural de colágeno, combatendo a flacidez e devolvendo o viço à pele.',
    price: 'A partir de R$ 1.800'
  },
  {
    id: '3',
    title: 'Limpeza de Pele Diamond',
    description: 'Remoção profunda de impurezas aliada a peeling de diamante e hidratação com ativos premium.',
    price: 'R$ 250'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Mariana Silva',
    role: 'Empresária',
    content: 'O atendimento é impecável. Fiz a harmonização e o resultado ficou super natural, exatamente como eu queria.',
    rating: 5,
    image: 'https://picsum.photos/seed/mari/100/100'
  },
  {
    name: 'Cláudia Ramos',
    role: 'Advogada',
    content: 'Minha pele mudou completamente após o protocolo de bioestimuladores. Sinto-me muito mais confiante.',
    rating: 5,
    image: 'https://picsum.photos/seed/clau/100/100'
  },
  {
    name: 'Beatriz Costa',
    role: 'Arquiteta',
    content: 'Equipe extremamente técnica e ambiente acolhedor. Não troco a Lumière por nada!',
    rating: 5,
    image: 'https://picsum.photos/seed/bea/100/100'
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Tecnologia de Ponta',
    description: 'Equipamentos de última geração certificados pela ANVISA.',
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: 'Profissionais Especialistas',
    description: 'Corpo clínico com pós-graduação e anos de experiência.',
    icon: <UserCheck className="w-6 h-6" />
  },
  {
    title: 'Resultados Naturais',
    description: 'Foco em realçar sua beleza, sem exageros ou artificialismos.',
    icon: <Heart className="w-6 h-6" />
  },
  {
    title: 'Protocolos Exclusivos',
    description: 'Cada pele é única. Criamos planos sob medida para suas necessidades.',
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    title: 'Ambiente Seguro',
    description: 'Rigorosos padrões de higiene e biossegurança.',
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

export const FAQ: FAQItem[] = [
  {
    question: 'Quanto tempo dura o procedimento de Botox?',
    answer: 'Em média, os resultados do Botox duram de 4 a 6 meses, variando conforme o metabolismo de cada paciente.'
  },
  {
    question: 'Os procedimentos são dolorosos?',
    answer: 'Utilizamos anestésicos tópicos e técnicas minimamente invasivas para garantir o máximo de conforto durante as sessões.'
  },
  {
    question: 'Quanto tempo após a harmonização posso voltar ao trabalho?',
    answer: 'A maioria dos nossos procedimentos permite retorno imediato às atividades, exigindo apenas cuidados básicos com sol e esforço físico intenso.'
  },
  {
    question: 'Quais as formas de pagamento?',
    answer: 'Aceitamos todos os cartões de crédito (parcelamento em até 10x sem juros), PIX com desconto e boleto sob consulta.'
  },
  {
    question: 'Como funciona a primeira avaliação?',
    answer: 'Realizamos uma análise facial completa para entender suas queixas e propor o melhor plano de tratamento personalizado.'
  },
  {
    question: 'A clínica possui estacionamento?',
    answer: 'Sim, oferecemos valet cortesia para nossos pacientes em atendimento.'
  }
];
