import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShoppingBag, 
  faLaptop, 
  faTshirt, 
  faHome, 
  faUtensils, 
  faSprayCan, 
  faRunning, 
  faPlane, 
  faHeartbeat, 
  faGem, 
  faGlobe 
} from '@fortawesome/free-solid-svg-icons';

import {
  CategoriesContainer,
  PageHeader,
  SearchField,
  CategoriesGrid,
  CategoryCard
} from './styles';

// Mapeamento de ícones para categorias
const categoryIcons = {
  'all': faShoppingBag,
  'eletronicos': faLaptop,
  'moda': faTshirt,
  'casa': faHome,
  'alimentos': faUtensils,
  'beleza': faSprayCan,
  'esportes': faRunning,
  'viagens': faPlane,
  'saude': faHeartbeat,
  'joias': faGem,
  'geral': faGlobe
};

const Categories = () => {
  const { categories, allCashbacks, allCoupons, featuredStores } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Função para filtrar categorias com base no termo de pesquisa
  const filteredCategories = categories.filter(category => 
    category.id !== 'all' && // Exclui a categoria "Todas"
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Função para obter lojas por categoria
  const getStoresByCategory = (categoryId) => {
    return featuredStores.filter(store => store.category === categoryId);
  };
  
  // Função para contar cupons por categoria
  const getCouponCountByCategory = (categoryId) => {
    return allCoupons.filter(coupon => coupon.category === categoryId).length;
  };
  
  // Função para contar cashbacks por categoria
  const getCashbackCountByCategory = (categoryId) => {
    return allCashbacks.filter(cashback => cashback.category === categoryId).length;
  };
  
  // Função para obter a média de cashback por categoria
  const getAverageCashbackByCategory = (categoryId) => {
    const categoryStores = featuredStores.filter(store => store.category === categoryId);
    if (categoryStores.length === 0) return '0%';
    
    // Simplificação: retorna uma faixa de cashback para a categoria
    return 'até 12%';
  };
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  return (
    <CategoriesContainer>
      <div className="container">
        <PageHeader>
          <h1>Categorias</h1>
          <p>Encontre as melhores ofertas e cashbacks organizados por categoria</p>
        </PageHeader>
        
        <SearchField>
          <input 
            type="text" 
            placeholder="Buscar categorias..." 
            value={searchTerm}
            onChange={handleSearch}
          />
          <button>🔍</button>
        </SearchField>
        
        <CategoriesGrid>
          {filteredCategories.map(category => {
            const storesByCategory = getStoresByCategory(category.id);
            const couponCount = getCouponCountByCategory(category.id);
            const cashbackCount = getCashbackCountByCategory(category.id);
            const averageCashback = getAverageCashbackByCategory(category.id);
            
            return (
              <CategoryCard key={category.id}>
                <div className="category-header">
                  <div className="icon">
                    <FontAwesomeIcon icon={categoryIcons[category.id] || faShoppingBag} />
                  </div>
                  <h2>{category.name}</h2>
                </div>
                
                <div className="category-content">
                  <div className="stats">
                    <div className="stat">
                      <div className="value">{couponCount}</div>
                      <div className="label">Cupons</div>
                    </div>
                    <div className="stat">
                      <div className="value">{cashbackCount}</div>
                      <div className="label">Cashbacks</div>
                    </div>
                    <div className="stat">
                      <div className="value">{averageCashback}</div>
                      <div className="label">Cashback</div>
                    </div>
                  </div>
                  
                  <div className="stores">
                    <h3>Lojas em destaque</h3>
                    <div className="store-list">
                      {storesByCategory.slice(0, 4).map(store => (
                        <div className="store-logo" key={store.id}>
                          <img src={store.logo} alt={store.store} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="category-footer">
                  <Link to={`/categoria/${category.id}`}>Ver Ofertas</Link>
                </div>
              </CategoryCard>
            );
          })}
        </CategoriesGrid>
      </div>
    </CategoriesContainer>
  );
};

export default Categories;
