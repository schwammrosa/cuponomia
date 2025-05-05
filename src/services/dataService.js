/**
 * Serviço centralizado para gerenciar todos os dados do aplicativo
 * Isso garante que as alterações em um lugar sejam refletidas em todo o site
 */

// Dados de melhores cashbacks
export const bestCashbacks = [
  {
    id: 1,
    store: 'Casas Bahia',
    cashback: 'até 12%',
    coupons: 40,
    logo: '/images/casas-bahia.png',
    label: 'Super Cashback',
    category: 'eletronicos'
  },
  {
    id: 2,
    store: 'Vivara',
    cashback: '10%',
    coupons: 20,
    logo: '/images/vivara.png',
    label: 'Super Cashback',
    category: 'joias'
  },
  {
    id: 3,
    store: 'Magalu',
    cashback: 'até 10%',
    coupons: 45,
    logo: '/images/magazine.png',
    label: 'Super Cashback',
    category: 'eletronicos'
  },
  {
    id: 4,
    store: 'Drogaria São Paulo',
    cashback: '3,1%',
    coupons: 40,
    note: '(era 1,7%)',
    logo: '/images/drogaria-sao-paulo.png',
    label: 'Super Cashback',
    category: 'saude'
  },
  {
    id: 5,
    store: 'Nike',
    cashback: '6%',
    coupons: 40,
    logo: '/images/nike-store.png',
    label: 'Super Cashback',
    category: 'moda'
  },
  {
    id: 6,
    store: 'Dell',
    cashback: 'até 5%',
    coupons: 20,
    logo: '/images/dell.png',
    label: 'Super Cashback',
    category: 'eletronicos'
  },
  {
    id: 7,
    store: 'Natura',
    cashback: '12%',
    coupons: 30,
    logo: '/images/natura.png',
    label: 'Super Cashback',
    category: 'beleza'
  },
  {
    id: 8,
    store: 'Netshoes',
    cashback: '8%',
    coupons: 25,
    logo: '/images/netshoes.png',
    label: 'Super Cashback',
    category: 'moda'
  },
  {
    id: 9,
    store: 'Submarino',
    cashback: '4%',
    coupons: 18,
    logo: '/images/submarino.png',
    category: 'eletronicos'
  },
  {
    id: 10,
    store: 'Centauro',
    cashback: '5%',
    coupons: 22,
    logo: '/images/centauro.png',
    category: 'esportes'
  },
  {
    id: 11,
    store: 'Booking',
    cashback: '4%',
    coupons: 15,
    logo: '/images/bookingcom.png',
    category: 'viagens'
  },
  {
    id: 12,
    store: 'iFood',
    cashback: '3%',
    coupons: 10,
    logo: '/images/ifood.png',
    category: 'alimentacao'
  },
  {
    id: 13,
    store: 'Americanas',
    cashback: '6%',
    coupons: 35,
    logo: '/images/americanas.png',
    category: 'eletronicos'
  },
  {
    id: 14,
    store: 'Shopee',
    cashback: '2%',
    coupons: 28,
    logo: '/images/shopee.png',
    category: 'geral'
  },
  {
    id: 15,
    store: 'Amazon',
    cashback: '2,5%',
    coupons: 30,
    logo: '/images/amazon.png',
    category: 'geral'
  },
  {
    id: 16,
    store: 'Mercado Livre',
    cashback: '1%',
    coupons: 12,
    logo: '/images/mercado-livre.png',
    category: 'geral'
  }
];

// Dados de cupons em destaque
export const topCoupons = [
  {
    id: 1,
    store: 'Adidas',
    title: 'Desconto imperdível de 15% em adidas',
    cashback: '4%',
    logo: '/images/Adidas.png',
    type: 'discount',
    details: 'Válido para produtos selecionados no site oficial da Adidas Brasil.',
    verification: '2 dias atrás',
    usageCount: '105',
    category: 'moda'
  },
  {
    id: 2,
    store: 'Vivara',
    title: 'Desfrute de um desconto irresistível de 10% utilizando o cupom Vivara',
    cashback: '10%',
    logo: '/images/vivara.png',
    type: 'code',
    code: 'VIVA10',
    details: 'Aproveite em compras acima de R$299 em todo o site.',
    verification: '1 dia atrás',
    usageCount: '87',
    category: 'joias'
  },
  {
    id: 3,
    store: 'LG',
    title: 'Sua chance de economizar 10% com o cupom LG exclusivo',
    cashback: '1%',
    logo: '/images/lg.png',
    type: 'code',
    code: 'LG10',
    details: 'Válido para a linha de eletrodomésticos selecionados.',
    verification: '2 dias atrás',
    usageCount: '65',
    category: 'eletronicos'
  },
  {
    id: 4,
    store: 'Casas Bahia',
    title: 'Cupom Casas Bahia exclusivo: Desconto de até 25% em suas compras',
    cashback: 'até 12%',
    logo: '/images/casas-bahia.png',
    type: 'discount',
    details: 'Promoção válida para produtos da linha marrom e eletrodomésticos.',
    verification: '1 dia atrás',
    usageCount: '123',
    category: 'eletronicos'
  },
  {
    id: 5,
    store: 'Dell',
    title: 'Notebook Dell com 10% OFF usando o cupom exclusivo',
    cashback: '5%',
    logo: '/images/dell.png',
    type: 'code',
    code: 'DELL10',
    details: 'Válido para notebooks da linha Inspiron e XPS.',
    verification: '3 dias atrás',
    usageCount: '45',
    category: 'eletronicos'
  },
  {
    id: 6,
    store: 'Nike',
    title: 'Ganhe 15% de desconto em toda linha esportiva',
    cashback: '7%',
    logo: '/images/nike-store.png',
    type: 'discount',
    details: 'Aproveite para renovar seus equipamentos esportivos com desconto.',
    verification: '2 dias atrás',
    usageCount: '98',
    category: 'moda'
  },
  {
    id: 7,
    store: 'Shopee',
    title: 'Cupom Shopee de R$10 OFF em compras acima de R$15',
    cashback: '2%',
    logo: '/images/shopee.png',
    type: 'code',
    code: 'SHOPEEBR10',
    details: 'Válido apenas para novos usuários na plataforma.',
    verification: '1 dia atrás',
    usageCount: '210',
    category: 'geral'
  },
  {
    id: 8,
    store: 'Americanas',
    title: 'Produtos selecionados com até 40% de desconto',
    cashback: '6%',
    logo: '/images/americanas.png',
    type: 'discount',
    details: 'Promoção especial para liquidação de inverno.',
    verification: '3 dias atrás',
    usageCount: '75',
    category: 'eletronicos'
  },
  {
    id: 9,
    store: 'Amazon',
    title: 'R$20 OFF em livros com o cupom Amazon exclusivo',
    cashback: '2.5%',
    logo: '/images/amazon.png',
    type: 'code',
    code: 'LIVROS20',
    details: 'Válido para compras acima de R$50 em livros físicos.',
    verification: '2 dias atrás',
    usageCount: '145',
    category: 'geral'
  },
  {
    id: 10,
    store: 'Mercado Livre',
    title: 'Frete Grátis em compras acima de R$79',
    cashback: '1%',
    logo: '/images/mercado-livre.png',
    type: 'discount',
    details: 'Válido apenas para produtos com selo Mercado Livre.',
    verification: '1 dia atrás',
    usageCount: '95',
    category: 'geral'
  },
  {
    id: 11,
    store: 'Apple',
    title: '10% OFF em acessórios para seu iPhone',
    cashback: '3%',
    logo: '/images/apple.png',
    type: 'discount',
    details: 'Aproveite os descontos em cases, fones e carregadores.',
    verification: '2 dias atrás',
    usageCount: '87',
    category: 'eletronicos'
  },
  {
    id: 12,
    store: 'Booking',
    title: 'Ganhe 15% OFF na sua próxima hospedagem',
    cashback: '4%',
    logo: '/images/bookingcom.png',
    type: 'code',
    code: 'BOOKING15',
    details: 'Válido para reservas feitas até o final do mês.',
    verification: '3 dias atrás',
    usageCount: '67',
    category: 'viagens'
  }
];

// Dados de lojas
export const stores = [
  {
    id: 1,
    store: 'Samsung',
    cashback: 'até 15%',
    coupons: 24,
    logo: '/images/samsung.png',
    category: 'eletronicos'
  },
  {
    id: 2,
    store: 'Natura',
    cashback: '12%',
    coupons: 20,
    logo: '/images/natura.png',
    category: 'beleza'
  },
  {
    id: 3,
    store: 'Dell',
    cashback: 'até 5%',
    coupons: 9,
    logo: '/images/dell.png',
    category: 'eletronicos'
  },
  {
    id: 4,
    store: 'Casas Bahia',
    cashback: 'até 11%',
    coupons: 45,
    logo: '/images/casas-bahia.png',
    category: 'eletronicos'
  },
  {
    id: 5,
    store: 'Netshoes',
    cashback: '8%',
    coupons: 60,
    logo: '/images/netshoes.png',
    category: 'moda'
  },
  {
    id: 6,
    store: 'Magazine Luiza',
    cashback: '7.1%',
    coupons: 35,
    logo: '/images/magazine.png',
    category: 'eletronicos'
  },
  {
    id: 7,
    store: 'iFood',
    cashback: '3%',
    coupons: 10,
    logo: '/images/ifood.png',
    category: 'alimentacao'
  },
  {
    id: 8,
    store: 'Americanas',
    cashback: '6%',
    coupons: 35,
    logo: '/images/americanas.png',
    category: 'eletronicos'
  },
  {
    id: 9,
    store: 'Shopee',
    cashback: '2%',
    coupons: 28,
    logo: '/images/shopee.png',
    category: 'geral'
  },
  {
    id: 10,
    store: 'Amazon',
    cashback: '2,5%',
    coupons: 30,
    logo: '/images/amazon.png',
    category: 'geral'
  },
  {
    id: 11,
    store: 'Mercado Livre',
    cashback: '1%',
    coupons: 12,
    logo: '/images/mercado-livre.png',
    category: 'geral'
  },
  {
    id: 12,
    store: 'Booking',
    cashback: '4%',
    coupons: 15,
    logo: '/images/bookingcom.png',
    category: 'viagens'
  }
];

// Categorias disponíveis
export const categories = [
  { id: 'all', name: 'Todas' },
  { id: 'eletronicos', name: 'Eletrônicos' },
  { id: 'moda', name: 'Moda e Acessórios' },
  { id: 'casa', name: 'Casa e Decoração' },
  { id: 'alimentos', name: 'Alimentos e Bebidas' },
  { id: 'beleza', name: 'Beleza e Cuidados' },
  { id: 'esportes', name: 'Esportes e Lazer' },
  { id: 'viagens', name: 'Viagens' },
  { id: 'saude', name: 'Saúde' },
  { id: 'joias', name: 'Joias' },
  { id: 'geral', name: 'Geral' }
];

// Filtros comuns de pesquisa para reutilização
export const filterByCategory = (items, category) => {
  if (!category || category === 'all') return items;
  return items.filter(item => item.category === category);
};

export const filterBySearchTerm = (items, searchTerm) => {
  if (!searchTerm) return items;
  const term = searchTerm.toLowerCase();
  return items.filter(item => {
    // Verifica diferentes campos conforme o tipo de item
    if (item.store && item.store.toLowerCase().includes(term)) return true;
    if (item.title && item.title.toLowerCase().includes(term)) return true;
    if (item.name && item.name.toLowerCase().includes(term)) return true;
    if (item.category && item.category.toLowerCase().includes(term)) return true;
    return false;
  });
};

export const filterByType = (items, type) => {
  if (!type || type === 'all') return items;
  return items.filter(item => item.type === type);
};

// Função para paginação
export const paginateItems = (items, page, itemsPerPage) => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return items.slice(startIndex, endIndex);
};
