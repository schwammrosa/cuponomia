import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserMenu from '../UserMenu';
import { 
  HeaderContainer, 
  Logo, 
  Nav, 
  NavItem, 
  SearchBar, 
  SearchInput, 
  SearchButton, 
  UserArea,
  MobileMenuButton,
  MobileMenu
} from './styles';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <div className="container">
        <Logo>
          <Link to="/">
            <h1>CUPONOMIA</h1>
          </Link>
        </Logo>

        <SearchBar>
          <SearchInput 
            type="text" 
            placeholder="Pesquisar loja" 
          />
          <SearchButton>
            <span role="img" aria-label="search" data-component-name="Header">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
          </SearchButton>
        </SearchBar>

        <Nav className="desktop-nav">
          <NavItem>
            <Link to="/premium">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '4px', verticalAlign: 'middle'}}>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              Prime
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/lojas">Lojas</Link>
          </NavItem>
          <NavItem>
            <Link to="/categorias">Categorias</Link>
          </NavItem>
          <NavItem>
            <Link to="/ajuda">Ajuda</Link>
          </NavItem>
        </Nav>

        <UserArea>
          {isLoggedIn ? (
            <Link to="/perfil">Minha Conta</Link>
          ) : (
            <UserMenu />
          )}
        </UserArea>

        <MobileMenuButton onClick={toggleMobileMenu}>
          {mobileMenuOpen ? 'X' : '☰'}
        </MobileMenuButton>
      </div>

      {mobileMenuOpen && (
        <MobileMenu>
          <Link to="/" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/lojas" onClick={toggleMobileMenu}>Lojas</Link>
          <Link to="/cashbacks" onClick={toggleMobileMenu}>Cashback</Link>
          <Link to="/categorias" onClick={toggleMobileMenu}>Categorias</Link>
          {isLoggedIn ? (
            <Link to="/perfil" onClick={toggleMobileMenu}>Minha Conta</Link>
          ) : (
            <>
              <Link to="/login" onClick={toggleMobileMenu}>Entrar</Link>
              <Link to="/cadastro" onClick={toggleMobileMenu}>Cadastrar</Link>
            </>
          )}
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;
