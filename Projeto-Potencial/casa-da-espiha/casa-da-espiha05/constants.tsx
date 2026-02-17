
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
  ShieldAlert,
  ThumbsUp,
  Box,
  Smile
} from 'lucide-react';
import { Service, FAQItem } from './types';

export const BENEFITS = [
  {
    title: "Massa Secreta",
    description: "Desenvolvida para ser fina e elástica, garantindo que o recheio seja o protagonista em cada mordida.",
    icon: <Wheat size={24} />
  },
  {
    title: "Forno de Alta",
    description: "Assadas em temperaturas extremas para criar aquela casquinha dourada e manter o interior borbulhando.",
    icon: <Flame size={24} />
  },
  {
    title: "Mascote Aprova",
    description: "Cada ingrediente passa por uma seleção rigorosa. Só o que é fresco e de elite entra em nossa cozinha.",
    icon: <Smile size={24} />
  }
];

export const SERVICES: Service[] = [
  {
    id: 'esfihas-fechadas-elite',
    title: 'Esfihas Fechadas',
    tag: 'O Orgulho da Casa',
    isPromo: true,
    description: 'A clássica de carne com tempero sírio original, queijo derretido ou frango cremoso. Seladas à perfeição.',
    price: 'R$ 4,50',
    icon: <Box size={24} />,
    features: [
      'Carne de primeira selecionada',
      'Tempero autoral secreto',
      'Massa que não pesa no estômago',
      'Assamento rápido e suculento'
    ]
  },
  {
    id: 'salgados-ouro',
    title: 'Salgados Artesanais',
    tag: 'Crocância Máxima',
    description: 'Coxinhas, kibes e bolinhos de queijo. Fritos com técnica que evita qualquer oleosidade.',
    price: 'R$ 5,00',
    icon: <Star size={24} />,
    features: [
      'Recheios super generosos',
      'Catupiry Original',
      'Massa de batata real',
      'Kibe com carne moída duas vezes'
    ]
  },
  {
    id: 'doces-premium',
    title: 'Doces de Forno',
    tag: 'Explosão de Sabor',
    description: 'Nossa esfiha fechada doce guarda o chocolate derretido para uma experiência inesquecível.',
    price: 'R$ 7,50',
    icon: <Heart size={24} />,
    features: [
      'Chocolate de Gramado',
      'Morango fresco da estação',
      'Doce de leite artesanal',
      'Bordas recheadas opcionais'
    ]
  },
  {
    id: 'sucos-gelados',
    title: 'Sucos de Polpa Real',
    tag: 'Refrescância',
    description: 'O par perfeito para sua esfiha. Sucos naturais batidos na hora com água mineral geladíssima.',
    price: 'Menu Fresh',
    icon: <Coffee size={24} />,
    features: [
      'Laranja espremida na hora',
      'Abacaxi com hortelã fresca',
      'Limonada suíça cremosa',
      'Maracujá concentrado'
    ]
  }
];

export const FAQ: FAQItem[] = [
  {
    question: 'Por que a esfiha fechada é melhor?',
    answer: 'O fechamento manual lacra os sucos dos ingredientes durante o assamento, criando um ambiente de vapor que mantém a carne úmida e o queijo em ponto de fusão, algo impossível na esfiha aberta.'
  },
  {
    question: 'Entrega em toda Ourinhos?',
    answer: 'Sim! Temos uma logística otimizada para cobrir todos os bairros de Ourinhos, garantindo que o salgado chegue como se tivesse acabado de sair do forno.'
  },
  {
    question: 'Quais os métodos de pagamento?',
    answer: 'Aceitamos todas as bandeiras de cartão (crédito e débito), Pix e dinheiro. No delivery, levamos a maquininha até você.'
  },
  {
    question: 'Aceitam encomendas para eventos?',
    answer: 'Com certeza! Temos pacotes especiais para aniversários, reuniões e eventos corporativos. Chame no WhatsApp com 24h de antecedência.'
  },
  {
    question: 'A esfiha é assada na hora?',
    answer: 'Trabalhamos com sistema de fluxo contínuo. Nossos fornos nunca esfriam, garantindo que você sempre receba um produto fresco.'
  }
];
