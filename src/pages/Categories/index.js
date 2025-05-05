import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

import {
  CategoriesContainer,
  PageTitle,
  CategorySection,
  TopCategoriesGrid,
  CategoryItem,
  CategoryIcon,
  CategoryName,
  PopularStoresSection,
  StoresGrid,
  StoreCard
} from './styles';

// Dados das categorias com ícones SVG
const categoryData = [
  { id: 'alimentos', name: 'Alimentos e Bebidas', icon: '🍷' },
  { id: 'animais', name: 'Animais e Pet', icon: '🦴' },
  { id: 'bebe', name: 'Bebê e Criança', icon: '🧸' },
  { id: 'eletrodomesticos', name: 'Eletrodomésticos', icon: '📱' },
  { id: 'esportes', name: 'Esportes e Fitness', icon: '⚽' },
  { id: 'games', name: 'Games', icon: '🎮' },
  { id: 'informatica', name: 'Informática', icon: '🚀' },
  { id: 'livros', name: 'Livros e Revistas', icon: '📚' },
  { id: 'passagem', name: 'Passagem Aérea', icon: '✈️' },
  { id: 'tv', name: 'TV', icon: '📺' },
  { id: 'moda', name: 'Moda e Acessórios', icon: '👕' },
  { id: 'moveis', name: 'Móveis e Decoração', icon: '🛋️' },
  { id: 'farmacia', name: 'Farmácia', icon: '💊' },
  { id: 'cursos', name: 'Cursos e Aulas', icon: '📝' },
  { id: 'moda-esportiva', name: 'Moda Esportiva', icon: '🏃' },
  { id: 'perfumes', name: 'Perfumes e Beleza', icon: '🧴' },
  { id: 'viagem', name: 'Viagem e Turismo', icon: '🏝️' },
  { id: 'smartphones', name: 'Smartphones', icon: '📱' },
  { id: 'taxi', name: 'Táxi', icon: '🚕' },
  { id: 'utilidades', name: 'Utilidades Domésticas', icon: '🧹' }
];

// Dados das lojas populares
const popularStores = [
  { id: 'samsung', name: 'Samsung', logo: '/images/samsung.png' },
  { id: 'natura', name: 'Natura', logo: '/images/natura-638803271921503623.png' },
  { id: 'dell', name: 'Dell', logo: '/images/dell-637956577304666141.png' },
  { id: 'casas-bahia', name: 'Casas Bahia', logo: '/images/casas-bahia-637628912275644345.png' },
  { id: 'netshoes', name: 'Netshoes', logo: '/images/netshoes-638803272305429697.png' },
  { id: 'kabum', name: 'KaBuM!', logo: '/images/kabum-637721671567340182.png' },
  { id: 'aliexpress', name: 'AliExpress', logo: '/images/aliexpress-638803272105563962.png' },
  { id: 'vivara', name: 'Vivara', logo: '/images/vivara.png' },
  { id: 'shein', name: 'SHEIN', logo: '/images/shein-637062346874444192.png' },
  { id: 'magalu', name: 'Magazine Luiza', logo: '/images/magazine-637302245484776317.png' },
  { id: 'carrefour', name: 'Carrefour', logo: '/images/carrefour-636994872825696000.png' },
  { id: 'booking', name: 'Booking.com', logo: '/images/bookingcom.png' }
];

const Categories = () => {
  const { featuredStores } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filtrar categorias com base no termo de pesquisa
  const filteredCategories = categoryData.filter(category => 
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <CategoriesContainer>
      <div className="container">
        <PageTitle>
          <h1>Encontre cupons de desconto em nossas principais categorias</h1>
        </PageTitle>
        
        <CategorySection>
          <h2>Top 20 Categorias</h2>
          
          <TopCategoriesGrid>
            {filteredCategories.map(category => (
              <CategoryItem key={category.id}>
                <Link to={`/categoria/${category.id}`}>
                  <CategoryIcon>{category.icon}</CategoryIcon>
                  <CategoryName>{category.name}</CategoryName>
                </Link>
              </CategoryItem>
            ))}
          </TopCategoriesGrid>
        </CategorySection>
        
        <PopularStoresSection>
          <h2>Lojas mais populares</h2>
          
          <StoresGrid>
            {popularStores.map(store => (
              <StoreCard key={store.id}>
                <Link to={`/loja/${store.id}`}>
                  <img src={store.logo} alt={store.name} />
                </Link>
              </StoreCard>
            ))}
          </StoresGrid>
        </PopularStoresSection>
      </div>
    </CategoriesContainer>
  );
};

export default Categories;
