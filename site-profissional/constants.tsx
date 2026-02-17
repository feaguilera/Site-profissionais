import React from 'react';
import { 
  Shield, 
  Zap, 
  Cpu, 
  Globe2, 
  Search, 
  MessageSquare,
  TrendingUp,
  BarChart3,
  Terminal,
  Code2,
  Lock,
  Target,
  Layers,
  PieChart,
  MousePointer2,
  Database
} from 'lucide-react';
import { Service, FAQItem } from './types';

export const BENEFITS = [
  {
    title: "Performance Nativa",
    description: "Desenvolvimento utilizando Stack de ponta (React/Node) para garantir carregamento instantâneo e fluidez absoluta.",
    icon: <Zap size={24} />
  },
  {
    title: "Infraestrutura Blindada",
    description: "Aplicação de protocolos OWASP e auditoria de vulnerabilidades em cada deploy, garantindo total integridade de dados.",
    icon: <Shield size={24} />
  },
  {
    title: "Arquitetura Conversiva",
    description: "Design orientado a dados e psicologia cognitiva para guiar o usuário até o objetivo comercial da empresa.",
    icon: <Target size={24} />
  },
  {
    title: "Autoridade Técnica",
    description: "Design minimalista e sofisticado que transmite o profissionalismo necessário para fechar contratos de alto ticket.",
    icon: <Code2 size={24} />
  },
  {
    title: "SEO On-Page Avançado",
    description: "Otimização de Web Vitals para garantir que seu site seja priorizado pelos algoritmos de busca do Google.",
    icon: <Search size={24} />
  },
  {
    title: "Gestão Consultiva",
    description: "Fale diretamente com o engenheiro responsável. Sem intermediários, sem ruídos, apenas soluções técnicas precisas.",
    icon: <MessageSquare size={24} />
  }
];

export const ADS_METHOD = [
  {
    step: "01",
    title: "Mapeamento Estratégico",
    description: "Análise de público-alvo, jornada de compra e benchmarks de mercado para definição do ativo digital ideal.",
  },
  {
    step: "02",
    title: "Desenvolvimento de Ativos",
    description: "Engenharia de software focada em escala, utilizando código limpo e infraestrutura de nuvem resiliente.",
  },
  {
    step: "03",
    title: "Otimização de Tração",
    description: "Gestão de tráfego pago baseada em ROI, integrando métricas de performance ao funil de conversão do site.",
  }
];

export const SERVICES: Service[] = [
  {
    id: 'lp',
    title: 'Landing Page (Página Única)',
    tag: 'Oportunidade Digital',
    description: 'Foco total em conversão. Ideal para profissionais e campanhas de anúncios.',
    price: 'R$ 1.000',
    originalPrice: 'R$ 1.500',
    isPromo: true,
    icon: <Target size={24} />,
    features: [
      'Site em código puro (Leve e Seguro)',
      'Design focado em vendas',
      'Análise de Cliques (Heatmap Incluso)',
      'Disponível 24h (Contrato 12 meses)'
    ]
  },
  {
    id: 'inst',
    title: 'Site Institucional',
    tag: 'Estrutura Completa',
    description: 'Múltiplas páginas. Ideal para empresas estabelecidas que querem autoridade máxima.',
    price: 'A partir de R$ 2.000',
    icon: <Globe2 size={24} />,
    features: [
      'Até 5 páginas (Sobre, Serviços...)',
      'Painel de Gestão (Edite sem código)',
      'SEO Avançado para Google',
      'Disponível 24h (Contrato 12 meses)'
    ]
  },
  {
    id: 'ads-ind',
    title: 'Tráfego Pago Especializado',
    tag: 'Setup & Gestão Single-Channel',
    description: 'Campanhas de alta performance focadas em Google Ads ou Meta Ads.',
    price: 'R$ 400/mês',
    icon: <TrendingUp size={24} />,
    features: [
      'Configuração de Business Manager',
      'Mapeamento de Público-Alvo',
      'Criação de Copy para Anúncios',
      'Relatório de Performance Mensal',
      'Otimização Diária de Lances'
    ]
  },
  {
    id: 'ads-combo',
    title: 'Gestão Full-Funnel (Omni)',
    tag: 'Domínio de Mercado Total',
    description: 'Estratégia integrada entre Google, Meta e Campanhas de Remarketing.',
    price: 'R$ 600/mês',
    icon: <Layers size={24} />,
    features: [
      'Estratégia Cross-Platform',
      'Setup de Remarketing Inteligente',
      'Dashboards em Tempo Real (Looker)',
      'Análise de Atribuição de Vendas',
      'Reunião Estratégica Quinzenal'
    ]
  }
];

export const FAQ: FAQItem[] = [
  {
    question: 'Quanto tempo leva para o site ficar pronto?',
    answer: 'O prazo médio para uma Landing Page de alta performance é de 7 a 10 dias úteis. Para Ecossistemas Institucionais complexos, o prazo varia entre 15 a 20 dias, dependendo da arquitetura de informações e integrações necessárias.'
  },
  {
    question: 'O que está incluído nos R$ 100/mês do site?',
    answer: 'Este valor cobre o Suporte Premium VIP: Hospedagem em servidores de alta disponibilidade (AWS/Vercel), Certificado SSL (Cadeado de Segurança), monitoramento de integridade 24/7 contra invasões, atualizações técnicas de performance e suporte prioritário via WhatsApp para pequenas alterações.'
  },
  {
    question: 'Nos anúncios (Tráfego Pago), eu pago só o valor da gestão?',
    answer: 'Não. O valor da gestão (R$ 400 ou R$ 600) refere-se ao meu trabalho técnico de estratégia, criação de anúncios, análise de dados e otimização. O valor que será investido nas plataformas (Google/Meta) é decidido por você e pago diretamente a elas via cartão ou boleto.'
  },
  {
    question: 'Quanto preciso investir no Facebook/Instagram Ads?',
    answer: 'Para resultados consistentes, recomendamos um investimento mínimo inicial entre R$ 20,00 e R$ 30,00 por dia (aprox. R$ 600 a R$ 900 mensais). Isso permite que o algoritmo da Meta colete dados suficientes para encontrar seu público comprador.'
  },
  {
    question: 'Quanto preciso investir no Google Ads?',
    answer: 'No Google Ads, o investimento depende da competitividade do seu nicho (valor do clique). Recomendamos iniciar com pelo menos R$ 30,00 a R$ 50,00 por dia para garantir que sua empresa apareça nas primeiras posições nas buscas mais relevantes.'
  },
  {
    question: 'E se eu contratar o Combo (Google + Meta)?',
    answer: 'O Combo é a estratégia mais poderosa, pois criamos um cerco digital. O cliente te encontra no Google (intenção) e é impactado pelo seu remarketing no Instagram (desejo). Essa sinergia costuma reduzir o custo por cliente e aumentar a autoridade da marca.'
  },
  {
    question: 'Em quanto tempo tenho resultados?',
    answer: 'Com anúncios, o tráfego qualificado é imediato (em até 24h após a aprovação). A maturação do funil e a otimização máxima do ROI costumam ocorrer entre os primeiros 30 a 60 dias de campanha, onde refinamos os públicos e criativos baseados em dados reais.'
  },
  {
    question: 'O domínio (nome do site) fica em meu nome?',
    answer: 'Com certeza. Transparência é um pilar da minha consultoria. O domínio (.com.br ou .com) é registrado em seu CPF/CNPJ. Você detém 100% da propriedade do seu ativo digital.'
  },
  {
    question: 'O site é seguro contra invasões?',
    answer: 'Sim. Diferente do WordPress, que sofre com plugins vulneráveis, nossos sites são desenvolvidos em Código Puro (React). Isso elimina as portas de entrada mais comuns para hackers. Além disso, utilizamos headers de segurança e protocolos de blindagem de infraestrutura.'
  },
  {
    question: 'Como funciona o contrato?',
    answer: 'Trabalhamos com transparência total. Para o desenvolvimento do site, é um contrato por projeto com entrega definida. Para a gestão de tráfego, o contrato é mensal, sem fidelidade abusiva: permanecemos juntos enquanto o resultado for lucrativo para sua empresa.'
  }
];