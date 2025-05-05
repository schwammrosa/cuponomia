import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { 
  AllStoresContainer, 
  PageHeader, 
  StoresGrid, 
  StoreCard,
  StoreSearch,
  AlphabetFilter,
  FilterSection
} from './styles';

const AllStores = () => {
  // Usar o contexto global
  const {
    featuredStores,
    categories
  } = useAppContext();
  
  // Estados locais para esta página específica
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLetter, setActiveLetter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Gerar array com todas as letras do alfabeto
  const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  
  // Filtrar lojas
  const filterStoresByCategory = (stores, category) => {
    if (category === 'all') return stores;
    return stores.filter(store => store.category === category);
  };
  
  const filterStoresByLetter = (stores, letter) => {
    if (letter === 'all') return stores;
    return stores.filter(store => store.store.toUpperCase().startsWith(letter));
  };
  
  const filterStoresBySearch = (stores, term) => {
    if (!term.trim()) return stores;
    const searchLower = term.toLowerCase();
    return stores.filter(store => 
      store.store.toLowerCase().includes(searchLower) || 
      store.category.toLowerCase().includes(searchLower)
    );
  };
  
  // Aplicar todos os filtros
  const getFilteredStores = () => {
    let filtered = [...featuredStores];
    filtered = filterStoresByCategory(filtered, activeCategory);
    filtered = filterStoresByLetter(filtered, activeLetter);
    filtered = filterStoresBySearch(filtered, searchTerm);
    
    // Ordenar alfabeticamente
    return filtered.sort((a, b) => a.store.localeCompare(b.store));
  };
  
  const filteredStores = getFilteredStores();
  
  // Handlers
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    // Resetar filtro de letra quando mudar categoria
    if (activeLetter !== 'all') setActiveLetter('all');
  };
  
  const handleLetterFilter = (letter) => {
    setActiveLetter(letter);
  };
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Resetar filtros quando pesquisar
    if (activeCategory !== 'all') setActiveCategory('all');
    if (activeLetter !== 'all') setActiveLetter('all');
  };
  
  return (
    <AllStoresContainer>
      <PageHeader>
        <h1>Todas as Lojas</h1>
        <p>Encontre as melhores ofertas e cashback nas suas lojas favoritas</p>
      </PageHeader>
      
      <FilterSection>
        <div className="filters">
          <StoreSearch>
            <input 
              type="text" 
              placeholder="Buscar lojas..." 
              value={searchTerm}
              onChange={handleSearch}
            />
            <button>🔍</button>
          </StoreSearch>
          
          <AlphabetFilter>
            <span 
              className={activeLetter === 'all' ? 'active' : ''}
              onClick={() => handleLetterFilter('all')}
            >
              Todas
            </span>
            {alphabet.map(letter => (
              <span 
                key={letter} 
                className={activeLetter === letter ? 'active' : ''}
                onClick={() => handleLetterFilter(letter)}
              >
                {letter}
              </span>
            ))}
          </AlphabetFilter>
        </div>
      </FilterSection>
      
      <StoresGrid>
        {filteredStores.length > 0 ? (
          filteredStores.map(store => (
            <Link to={`/loja/${store.id}`} key={store.id}>
              <StoreCard>
                <div className="store-logo">
                  <img src={store.logo} alt={store.store} />
                </div>
                <div className="store-info">
                  <h3>{store.store}</h3>
                  <div className="cashback">
                    <span className="badge">%</span>
                    <span>{store.cashback} de cashback</span>
                  </div>
                  <div className="coupons">{store.coupons} cupons disponíveis</div>
                </div>
              </StoreCard>
            </Link>
          ))
        ) : (
          <div className="no-results">
            <h3>Nenhuma loja encontrada com os filtros selecionados</h3>
            <p>Tente outros filtros ou busque por outra loja</p>
          </div>
        )}
      </StoresGrid>
    </AllStoresContainer>
  );
};

export default AllStores;
