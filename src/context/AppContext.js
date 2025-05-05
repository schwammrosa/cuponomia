import React, { createContext, useContext, useState } from 'react';
import { 
  bestCashbacks, 
  topCoupons, 
  stores, 
  categories,
  filterByCategory,
  filterBySearchTerm,
  filterByType,
  paginateItems
} from '../services/dataService';

// Criar o contexto da aplicação
const AppContext = createContext();

// Hook personalizado para usar o contexto
export const useAppContext = () => useContext(AppContext);

// Provedor do contexto
export const AppProvider = ({ children }) => {
  // Estados globais
  const [activeCouponFilter, setActiveCouponFilter] = useState('all');
  const [activeCashbackFilter, setActiveCashbackFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [couponPage, setCouponPage] = useState(1);
  const [cashbackPage, setCashbackPage] = useState(1);
  
  // Constantes
  const couponsPerPage = 8;
  const cashbacksPerPage = 12;
  
  // Funções para filtrar e paginar cupons
  const getFilteredCoupons = () => {
    let filtered = [...topCoupons];
    filtered = filterByType(filtered, activeCouponFilter);
    filtered = filterBySearchTerm(filtered, searchTerm);
    return filtered;
  };
  
  const getCurrentPageCoupons = () => {
    const filtered = getFilteredCoupons();
    return paginateItems(filtered, couponPage, couponsPerPage);
  };
  
  const getCouponsTotalPages = () => {
    return Math.ceil(getFilteredCoupons().length / couponsPerPage);
  };
  
  // Funções para filtrar e paginar cashbacks
  const getFilteredCashbacks = () => {
    let filtered = [...bestCashbacks];
    filtered = filterByCategory(filtered, activeCashbackFilter);
    filtered = filterBySearchTerm(filtered, searchTerm);
    return filtered;
  };
  
  const getCurrentPageCashbacks = () => {
    const filtered = getFilteredCashbacks();
    return paginateItems(filtered, cashbackPage, cashbacksPerPage);
  };
  
  const getCashbacksTotalPages = () => {
    return Math.ceil(getFilteredCashbacks().length / cashbacksPerPage);
  };
  
  // Funções para os carrosséis (obter apenas uma parte dos dados)
  const getCarouselCoupons = () => {
    return topCoupons.slice(0, 6);
  };
  
  const getCarouselCashbacks = () => {
    return bestCashbacks.slice(0, 8);
  };
  
  // Valor do contexto a ser fornecido
  const contextValue = {
    // Dados
    allCoupons: topCoupons,
    allCashbacks: bestCashbacks,
    featuredStores: stores,
    categories,
    
    // Estados
    activeCouponFilter,
    setActiveCouponFilter,
    activeCashbackFilter,
    setActiveCashbackFilter,
    searchTerm,
    setSearchTerm,
    couponPage,
    setCouponPage,
    cashbackPage,
    setCashbackPage,
    
    // Funções de utilidade
    getFilteredCoupons,
    getCurrentPageCoupons,
    getCouponsTotalPages,
    getFilteredCashbacks,
    getCurrentPageCashbacks,
    getCashbacksTotalPages,
    getCarouselCoupons,
    getCarouselCashbacks
  };
  
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
