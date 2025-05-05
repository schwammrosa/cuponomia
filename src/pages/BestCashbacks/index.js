import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import { 
  BestCashbacksContainer, 
  PageHeader, 
  Filters, 
  SearchField, 
  CashbacksGrid, 
  CashbackCard, 
  PaginationContainer
} from './styles';

const BestCashbacks = () => {
  // Usar o contexto global em vez de estados locais
  const {
    activeCashbackFilter,
    setActiveCashbackFilter,
    searchTerm,
    setSearchTerm,
    cashbackPage,
    setCashbackPage,
    getCurrentPageCashbacks,
    getCashbacksTotalPages,
    categories
  } = useAppContext();

  // Obter os cashbacks da página atual e o total de páginas do contexto
  const currentPageCashbacks = getCurrentPageCashbacks();
  const totalPages = getCashbacksTotalPages();

  // Filtrar por categorias e pesquisa
  const filterCashbacks = (categoryId) => {
    setActiveCashbackFilter(categoryId);
    setCashbackPage(1); // Resetar para a primeira página quando mudar filtro
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCashbackPage(1); // Resetar para a primeira página quando pesquisar
  };
  
  // Função para mudar de página
  const changePage = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCashbackPage(pageNumber);
    }
  };

  return (
    <BestCashbacksContainer>
      <div className="container">
        <PageHeader>
          <div className="header-content">
            <h1>Melhores Cashbacks</h1>
            <p>Ganhe dinheiro de volta em suas compras com os melhores cashbacks do mercado.</p>
          </div>
        </PageHeader>

        <Filters>
          <SearchField>
            <input 
              type="text" 
              placeholder="Buscar lojas..." 
              value={searchTerm}
              onChange={handleSearch}
            />
            <button>🔍</button>
          </SearchField>
        </Filters>

        <CashbacksGrid>
          {currentPageCashbacks.map(cashback => (
            <Link to={`/loja/${cashback.id}`} key={cashback.id}>
              <CashbackCard>
                {cashback.label && <div className="label">{cashback.label}</div>}
                <div className="logo">
                  <img src={cashback.logo} alt={cashback.store} />
                </div>
                <div className="store-name">{cashback.store}</div>
                <div className="cashback-info">
                  <div className="amount">
                    <div className="badge">
                      <span className="badge-icon">%</span>
                    </div>
                    <div className="text">{cashback.cashback} de cashback</div>
                  </div>
                  {cashback.note && <div className="note">{cashback.note}</div>}
                  <div className="coupons">{cashback.coupons} cupons disponíveis</div>
                </div>
              </CashbackCard>
            </Link>
          ))}
        </CashbacksGrid>

        {totalPages > 1 && (
          <PaginationContainer>
            <button 
              className="pagination-button prev" 
              disabled={cashbackPage === 1}
              onClick={() => changePage(cashbackPage - 1)}
            >
              &laquo; Anterior
            </button>
            
            <div className="pagination-numbers">
              {Array.from({ length: totalPages }, (_, i) => (
                <button 
                  key={i+1} 
                  className={`page-number ${cashbackPage === i+1 ? 'active' : ''}`}
                  onClick={() => changePage(i+1)}
                >
                  {i+1}
                </button>
              ))}
            </div>
            
            <button 
              className="pagination-button next"
              disabled={cashbackPage === totalPages}
              onClick={() => changePage(cashbackPage + 1)}
            >
              Próximo &raquo;
            </button>
          </PaginationContainer>
        )}
      </div>
    </BestCashbacksContainer>
  );
};

export default BestCashbacks;
