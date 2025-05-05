import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Context Provider
import { AppProvider } from './context/AppContext';

// Pages
import Home from './pages/Home';
import TopCoupons from './pages/TopCoupons';
import BestCashbacks from './pages/BestCashbacks';
import AllStores from './pages/AllStores';
import Categories from './pages/Categories';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

function App() {
  return (
    <AppProvider>
      <AppContainer>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cupons" element={<TopCoupons />} />
            <Route path="/cashbacks" element={<BestCashbacks />} />
            <Route path="/lojas" element={<AllStores />} />
            <Route path="/categorias" element={<Categories />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Main>
        <Footer />
      </AppContainer>
    </AppProvider>
  );
}

export default App;
