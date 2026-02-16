
import React from 'react';
import { 
  Shield, 
  Gauge, 
  Tool, 
  ClipboardCheck, 
  Search, 
  FileText, 
  Settings, 
  Truck,
  Car,
  Wind,
  Zap,
  Disc
} from 'lucide-react';
import { Service, Testimonial, FAQItem, Benefit } from './types';

export const BRANDS = [
  "Volkswagen", "Toyota", "Honda", "Hyundai", "BMW", "Mercedes", "Audi", "Fiat", "Chevrolet", "Ford"
];

export const PROCESS = [
  {
    title: "Diagnóstico Digital",
    description: "Utilizamos scanners de última geração para ler todos os sensores do veículo.",
    icon: <Search className="w-6 h-6" />
  },
  {
    title: "Orçamento Real",
    description: "Você recebe um link com fotos das peças e valores detalhados antes de qualquer reparo.",
    icon: <FileText className="w-6 h-6" />
  },
  {
    title: "Execução Técnica",
    description: "Nossos mecânicos certificados realizam a troca usando ferramentas de torque preciso.",
    icon: <Settings className="w-6 h-6" />
  },
  {
    title: "Check de Qualidade",
    description: "Teste de rodagem e limpeza do motor antes da entrega final.",
    icon: <ClipboardCheck className="w-6 h-6" />
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Revisão Preventiva',
    description: 'Troca de óleo, filtros, velas e checklist de 50 itens de segurança.',
    price: 'A partir de R$ 249',
    tag: 'Essencial'
  },
  {
    id: '2',
    title: 'Injeção Eletrônica',
    description: 'Diagnóstico de falhas, limpeza de bicos e reset de parâmetros de fábrica.',
    price: 'Sob Consulta'
  },
  {
    id: '3',
    title: 'Suspensão e Freios',
    description: 'Amortecedores, pastilhas, discos e alinhamento computadorizado 3D.',
    price: 'Orçamento na Hora'
  },
  {
    id: '4',
    title: 'Ar Condicionado',
    description: 'Higienização com ozônio e recarga de gás refrigerante R134a.',
    icon: <Wind className="w-5 h-5" />
  },
  {
    id: '5',
    title: 'Câmbio Automático',
    description: 'Troca de fluido por máquina de diálise para maior vida útil.',
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: '6',
    title: 'Embreagem e Transmissão',
    description: 'Substituição de kits de embreagem e reparo de diferenciais.',
    icon: <Disc className="w-5 h-5" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Roberto Alencar',
    role: 'Proprietário Corolla',
    content: 'Oficina extremamente limpa. O diagnóstico via tablet me deu muita segurança para autorizar o serviço.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
  },
  {
    name: 'Mariana Costa',
    role: 'Proprietária Renegade',
    content: 'O melhor atendimento que já tive em mecânica. Explicam tudo de forma simples e honesta.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  },
  {
    name: 'Fernando Souza',
    role: 'Motorista Uber',
    content: 'Preço justo e rapidez. Como dependo do carro, a agilidade deles em resolver o problema foi fundamental.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=100&h=100&fit=crop'
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Peças Genuínas',
    description: 'Trabalhamos apenas com marcas líderes como Bosch, Mahle e Cofap.',
    icon: <Car className="w-6 h-6" />
  },
  {
    title: 'Garantia de 1 Ano',
    description: 'Certificado de garantia em todos os serviços de motor e suspensão.',
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: 'Leve e Traz',
    description: 'Buscamos seu veículo em casa ou no trabalho (sob agendamento).',
    icon: <Truck className="w-6 h-6" />
  },
  {
    title: 'Scanner Avançado',
    description: 'Tecnologia de ponta para veículos nacionais e importados.',
    icon: <Gauge className="w-6 h-6" />
  }
];

export const FAQ: FAQItem[] = [
  {
    question: 'Vocês atendem carros importados?',
    answer: 'Sim, somos especialistas em marcas premium como BMW, Audi e Mercedes, com scanners específicos para estas montadoras.'
  },
  {
    question: 'Quanto tempo demora uma troca de óleo?',
    answer: 'Nossa troca rápida com check-up de 20 itens leva em média 45 a 60 minutos.'
  },
  {
    question: 'Posso levar minhas próprias peças?',
    answer: 'Para garantir a validade da nossa garantia de 1 ano, trabalhamos apenas com peças fornecidas por nossos distribuidores homologados.'
  },
  {
    question: 'O orçamento é cobrado?',
    answer: 'O diagnóstico visual simples é gratuito. Testes com scanner de profundidade podem ter uma taxa de diagnóstico, que é abatida caso o serviço seja realizado conosco.'
  }
];
