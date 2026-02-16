
import React from 'react';
import { Sparkles, Heart, ShieldCheck, Clock, UserCheck, CheckCircle2, Shield, Gem } from 'lucide-react';
import { Service, Testimonial, FAQItem, Benefit } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'MD Codes™ High Definition',
    description: 'Protocolo de sustentação facial profunda utilizando o mapeamento anatômico para resultados de lifting sem cirurgia.',
    price: 'Sob Consulta',
    tag: 'Gold Standard'
  },
  {
    id: '2',
    title: 'Bioestimulação Induzida',
    description: 'Uso de hidroxiapatita de cálcio e ácido polilático para restaurar a firmeza dérmica e estimular o colágeno tipo I.',
    price: 'A partir de R$ 2.400'
  },
  {
    id: '3',
    title: 'PDRN Polinucleotídeos',
    description: 'Tratamento regenerativo de última geração que repara o DNA celular, devolvendo brilho e textura acetinada.',
    price: 'R$ 1.800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Helena Werneck',
    role: 'Diretora Executiva',
    content: 'O que mais me impressionou foi o tempo dedicado à minha análise facial. O resultado foi tão natural que ninguém percebe que fiz algo, apenas dizem que estou descansada.',
    rating: 5,
    image: 'https://picsum.photos/seed/helena/100/100'
  },
  {
    name: 'Dr. Ricardo Menezes',
    role: 'Médico',
    content: 'Como profissional da saúde, sou extremamente exigente com assepcia e técnica. A Lumière entrega um padrão de excelência clínica raro de encontrar.',
    rating: 5,
    image: 'https://picsum.photos/seed/ric/100/100'
  },
  {
    name: 'Sofia Albuquerque',
    role: 'Influencer de Luxo',
    content: 'A experiência na clínica é completa. Desde o atendimento concierge até a delicadeza dos procedimentos. Realmente um refúgio de autocuidado.',
    rating: 5,
    image: 'https://picsum.photos/seed/sofia/100/100'
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Rigor Clínico',
    description: 'Protocolos baseados em evidências científicas e anatomia avançada.',
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: 'Curadoria de Ativos',
    description: 'Utilizamos apenas as substâncias de maior pureza do mercado mundial.',
    icon: <Gem className="w-6 h-6" />
  },
  {
    title: 'Conforto Premium',
    description: 'Técnicas de anestesia local para uma experiência indolor e segura.',
    icon: <Heart className="w-6 h-6" />
  },
  {
    title: 'Ética Estética',
    description: 'Foco absoluto na preservação dos traços e naturalidade dos resultados.',
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

export const FAQ: FAQItem[] = [
  {
    question: 'Qual o diferencial dos protocolos Lumière?',
    answer: 'Nossa clínica não trabalha com "pacotes prontos". Cada paciente recebe uma prescrição única baseada em seu envelhecimento biológico e estrutura óssea.'
  },
  {
    question: 'Os procedimentos possuem tempo de recuperação (downtime)?',
    answer: 'A maioria dos nossos protocolos permite retorno imediato à rotina social, com cuidados mínimos que serão orientados em consulta.'
  },
  {
    question: 'Como é garantida a segurança dos materiais?',
    answer: 'Todos os nossos insumos possuem rastreabilidade total, lacres de segurança e certificação dupla (FDA e ANVISA).'
  },
  {
    question: 'É necessária uma consulta antes do procedimento?',
    answer: 'Sim, a consulta de avaliação é mandatória para definirmos o plano terapêutico e garantirmos a segurança do paciente.'
  }
];
