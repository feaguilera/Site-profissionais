
import React from 'react';
import { 
  Utensils, 
  Flame, 
  Clock, 
  Star, 
  Heart,
  Coffee,
  CheckCircle2,
  MapPin,
  Phone,
  Award,
  Zap,
  Target,
  Sparkles
} from 'lucide-react';
import { Service, FAQItem } from './types';

export const BENEFITS = [
  {
    title: "Massa Contemporânea",
    description: "Nossa técnica de fermentação lenta cria uma massa aerada, leve e incrivelmente crocante por fora.",
    icon: <Sparkles size={24} />
  },
  {
    title: "Curadoria de Insumos",
    description: "Selecionamos produtores locais e ingredientes de alta gama para garantir um sabor autêntico e superior.",
    icon: <Target size={24} />
  },
  {
    title: "Legado Moderno",
    description: "Três décadas de história em Ourinhos, agora com um toque moderno de excelência gastronômica.",
    icon: <Award size={24} />
  }
];

export const SERVICES: Service[] = [
  {
    id: 'tradicional',
    title: 'Clássicos Urbanos',
    tag: 'Os Favoritos',
    description: 'Nossa icônica carne temperada, queijos selecionados e combinações que definiram gerações.',
    price: 'A partir de R$ 4,50',
    icon: <Utensils size={24} />,
    features: [
      'Carne com especiarias',
      'Mussarela Premium',
      'Frango Cremoso',
      'Catupiry Original'
    ]
  },
  {
    id: 'gourmet',
    title: 'Seleção Gourmet',
    tag: 'Edições Especiais',
    description: 'Sabores complexos como Escarola com Bacon, Quatro Queijos Real e Carne Seca Premium.',
    price: 'A partir de R$ 6,90',
    icon: <Star size={24} />,
    features: [
      'Queijos Nobres',
      'Vegetais Frescos',
      'Cortes Especiais',
      'Montagem Manual'
    ]
  },
  {
    id: 'doces',
    title: 'Dolce Artisan',
    tag: 'A Sobremesa',
    description: 'O contraste perfeito entre nossa massa e recheios de chocolate suíço, frutas e doces caseiros.',
    price: 'A partir de R$ 7,50',
    icon: <Heart size={24} />,
    features: [
      'Chocolate de Grife',
      'Morango & Nutella',
      'Doce de Leite Mineiro',
      'Banana com Canela'
    ]
  },
  {
    id: 'acompanhamentos',
    title: 'Sides & Brews',
    tag: 'Para Harmonizar',
    description: 'Kibes crocantes, coxinhas douradas e sucos naturais extraídos na hora da fruta.',
    price: 'Menu de Vitrine',
    icon: <Coffee size={24} />,
    features: [
      'Kibe com Hortelã',
      'Coxinha de Catupiry',
      'Sucos Prensados',
      'Bebidas Geladas'
    ]
  }
];

export const FAQ: FAQItem[] = [
  {
    question: 'Qual o endereço das unidades?',
    answer: 'Nossas casas estão localizadas na Rua Rio de Janeiro, 186 e na Rua Antônio Carlos Mori, 337, centro de Ourinhos-SP.'
  },
  {
    question: 'Vocês abrem todos os dias?',
    answer: 'Sim! Nossas unidades operam diariamente das 17:00 às 23:30, com horário estendido nos fins de semana.'
  },
  {
    question: 'As esfihas são assadas na hora?',
    answer: 'Com certeza. Valorizamos o frescor absoluto. Cada esfiha sai do forno diretamente para sua mesa ou embalagem.'
  },
  {
    question: 'Posso retirar nas lojas?',
    answer: 'Sim! Nossas vitrines físicas estão sempre prontas para sua visita rápida e retirada imediata.'
  },
  {
    question: 'Quais os métodos de pagamento?',
    answer: 'Aceitamos Pix, cartões de crédito, débito e dinheiro em ambas as unidades.'
  }
];
