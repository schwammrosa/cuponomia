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
            <span role="img" aria-label="search">🔍</span>
          </SearchButton>
        </SearchBar>

        <Nav className="desktop-nav">
          <NavItem>
            <Link to="/premium">🔥 Prime</Link>
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
