
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
  Layers,
  Sparkles,
  Wheat,
  ShieldAlert
} from 'lucide-react';
import { Service, FAQItem } from './types';

export const BENEFITS = [
  {
    title: "Massa Blindada",
    description: "Nossa massa fechada protege o recheio, mantendo a temperatura e o aroma até o momento de comer.",
    icon: <Layers size={24} />
  },
  {
    title: "Fritura Precisa",
    description: "Salgados fritos em temperatura controlada para garantir a crocância externa e zero oleosidade.",
    icon: <Zap size={24} />
  },
  {
    title: "Receita Secreta",
    description: "Tempero autoral desenvolvido ao longo de 3 décadas no coração de Ourinhos.",
    icon: <ShieldAlert size={24} />
  }
];

export const SERVICES: Service[] = [
  {
    id: 'esfihas-fechadas',
    title: 'Esfihas Fechadas',
    tag: 'O Carro-Chefe',
    description: 'Nossas icônicas esfihas fechadas. Carne, queijo e frango selados em uma massa leve e macia.',
    price: 'A partir de R$ 4,50',
    icon: <Flame size={24} />,
    features: [
      'Carne temperada à mão',
      'Mussarela de primeira',
      'Massa que derrete na boca',
      'Assadas a 300 graus'
    ]
  },
  {
    id: 'salgados-iconicos',
    title: 'Salgados de Estufa',
    tag: 'Clássicos',
    description: 'Coxinhas, kibes e enrolados. Crocância absoluta por fora e recheios generosos por dentro.',
    price: 'A partir de R$ 5,00',
    icon: <Star size={24} />,
    features: [
      'Coxinha de Catupiry real',
      'Kibe com hortelã fresca',
      'Enrolados de presunto e queijo',
      'Fritos diariamente'
    ]
  },
  {
    id: 'doces-fechados',
    title: 'Doces de Forno',
    tag: 'Sobremesa',
    description: 'Esfihas fechadas doces, mantendo o chocolate e o doce de leite em ponto de fusão perfeito.',
    price: 'A partir de R$ 7,50',
    icon: <Heart size={24} />,
    features: [
      'Chocolate cremoso',
      'Doce de leite premium',
      'Massa levemente salgada',
      'Harmonia de sabores'
    ]
  },
  {
    id: 'combos',
    title: 'Estação de Sucos',
    tag: 'Harmonização',
    description: 'Acompanhamento ideal para sua esfiha fechada. Sucos naturais feitos na hora.',
    price: 'Refresco Gelado',
    icon: <Coffee size={24} />,
    features: [
      'Laranja espremida na hora',
      'Sucos de polpa natural',
      'Refrescos refrescantes',
      'Sabor de verdade'
    ]
  }
];

export const FAQ: FAQItem[] = [
  {
    question: 'Por que a esfiha é fechada?',
    answer: 'A esfiha fechada permite que o recheio cozinhe em seu próprio suco, preservando a umidade e o sabor intenso de cada ingrediente.'
  },
  {
    question: 'Onde ficam as lojas em Ourinhos?',
    answer: 'Estamos em dois pontos estratégicos no centro: Rua Rio de Janeiro, 186 e Rua Antônio Carlos Mori, 337.'
  },
  {
    question: 'Os salgados são fritos na hora?',
    answer: 'Sim! Nossos salgados saem da fritura direto para a estufa, garantindo a crocância que você ama.'
  },
  {
    question: 'Como faço para pedir no delivery?',
    answer: 'Você pode clicar em qualquer botão de WhatsApp neste site para falar direto com nossa equipe de pedidos.'
  },
  {
    question: 'Quais os sabores mais pedidos?',
    answer: 'Nossa esfiha fechada de Carne e a Coxinha de Catupiry são campeãs absolutas de vendas em Ourinhos há décadas.'
  }
];
