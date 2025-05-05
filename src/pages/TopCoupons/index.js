import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { 
  TopCouponsContainer, 
  PageHeader, 
  Filters, 
  FilterGroup, 
  FilterButton, 
  SearchField, 
  CouponsGrid, 
  CouponCard, 
  PaginationContainer
} from './styles';

const TopCoupons = () => {
  // Usar o contexto global em vez de estados locais
  const {
    activeCouponFilter,
    setActiveCouponFilter,
    searchTerm,
    setSearchTerm,
    couponPage,
    setCouponPage,
    getCurrentPageCoupons,
    getCouponsTotalPages
  } = useAppContext();

  // Obter os cupons da página atual e o total de páginas do contexto
  const currentPageCoupons = getCurrentPageCoupons();
  const totalPages = getCouponsTotalPages();

  // Função para filtrar cupons através do contexto
  const filterCoupons = (filter) => {
    setActiveCouponFilter(filter);
  };

  // Função para mudar de página
  const changePage = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCouponPage(pageNumber);
    }
  };
  
  // Função para lidar com a pesquisa
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCouponPage(1); // Volta para a primeira página ao buscar
  };

  return (
    <TopCouponsContainer>
      <div className="container">
        <PageHeader>
          <div className="header-content">
            <h1>Top Cupons de Desconto</h1>
            <p>Economize em suas compras com os melhores cupons selecionados pela nossa equipe.</p>
          </div>
        </PageHeader>

        <Filters>
          <FilterGroup>
            <FilterButton 
              isActive={activeCouponFilter === 'all'} 
              onClick={() => filterCoupons('all')}
            >
              Todos os Cupons
            </FilterButton>
            <FilterButton 
              isActive={activeCouponFilter === 'code'} 
              onClick={() => filterCoupons('code')}
            >
              Cupons com Código
            </FilterButton>
            <FilterButton 
              isActive={activeCouponFilter === 'discount'} 
              onClick={() => filterCoupons('discount')}
            >
              Ofertas e Descontos
            </FilterButton>
          </FilterGroup>
          <SearchField>
            <input 
              type="text" 
              placeholder="Buscar cupons..." 
              value={searchTerm}
              onChange={handleSearch}
            />
            <button>🔍</button>
          </SearchField>
        </Filters>

        <CouponsGrid>
          {currentPageCoupons.map(coupon => (
            <CouponCard key={coupon.id}>
              <div className="store-logo">
                <img src={coupon.logo} alt={coupon.store} />
              </div>
              <div className="coupon-content">
                <h3>{coupon.title}</h3>
                <div className="cashback-info">
                  <span className="cashback-icon">%</span>
                  <span className="cashback-text">{coupon.cashback} de cashback</span>
                </div>
                <div className="coupon-details">{coupon.details}</div>
                <div className="coupon-verification">
                  <span>Verificado {coupon.verification}</span> • <span>{coupon.usageCount} usuários hoje</span>
                </div>
              </div>
              <div className="coupon-action">
                {coupon.type === 'code' ? (
                  <button className="coupon-button">
                    Ver Cupom
                    <span className="coupon-code">{coupon.code}</span>
                  </button>
                ) : (
                  <button className="discount-button">Ver Desconto</button>
                )}
              </div>
            </CouponCard>
          ))}
        </CouponsGrid>

        <PaginationContainer>
          <button 
            className="pagination-button prev" 
            disabled={couponPage === 1}
            onClick={() => changePage(couponPage - 1)}
          >
            &laquo; Anterior
          </button>
          
          <div className="pagination-numbers">
            {Array.from({ length: totalPages }, (_, i) => (
              <button 
                key={i+1} 
                className={`page-number ${couponPage === i+1 ? 'active' : ''}`}
                onClick={() => changePage(i+1)}
              >
                {i+1}
              </button>
            ))}
          </div>
          
          <button 
            className="pagination-button next"
            disabled={couponPage === totalPages}
            onClick={() => changePage(couponPage + 1)}
          >
            Próximo &raquo;
          </button>
        </PaginationContainer>
      </div>
    </TopCouponsContainer>
  );
};

export default TopCoupons;
