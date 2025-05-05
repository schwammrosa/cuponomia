import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: var(--primary);
  color: white;
  padding: 0.8rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 992px) {
      justify-content: space-between;
    }

    @media (max-width: 576px) {
      padding: 0 1rem;
    }
  }
`;

export const Logo = styled.div`
  h1 {
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 1px;
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 1.1rem;
    }
  }
`;

export const SearchBar = styled.div`
  display: flex;
  flex: 1;
  max-width: 400px;
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    order: 3;
    width: 100%;
    max-width: 100%;
    margin-top: 1rem;
  }

  @media (max-width: 576px) {
    margin-top: 0.8rem;
    margin-bottom: 0.5rem;
  }
  
  &:focus-within {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.6rem 1rem;
  border: none;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #999;
  }
`;

export const SearchButton = styled.button`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #999;
  padding: 0.6rem;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(5px);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
  
  &:hover {
    color: var(--primary);
    
    &:before {
      opacity: 1;
    }
  }
`;

export const Nav = styled.ul`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  a {
    color: white;
    font-weight: 500;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    padding: 8px 12px;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    display: inline-block;
    z-index: 1;
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 8px;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: -1;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      
      &:before {
        opacity: 1;
      }
    }
  }
`;

export const UserArea = styled.div`
  a {
    color: white;
    font-weight: 500;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    padding: 8px 12px;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 1;
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 8px;
      opacity: 1; /* Efeito sempre visível */
      z-index: -1;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    
    span {
      margin-bottom: 3px;
    }
  }
  
  @media (max-width: 992px) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: white;
  transition: all 0.3s ease;
  padding: 8px 12px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 8px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    
    &:before {
      opacity: 1;
    }
  }
  
  @media (max-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    margin-left: auto;
  }
  
  @media (max-width: 576px) {
    width: 36px;
    height: 36px;
    font-size: 1.3rem;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: slideDown 0.3s ease forwards;
  overflow: hidden;
  
  @keyframes slideDown {
    from {
      max-height: 0;
      opacity: 0;
    }
    to {
      max-height: 500px;
      opacity: 1;
    }
  }
  
  a {
    padding: 0.8rem 0;
    color: var(--dark);
    font-weight: 500;
    border-bottom: 1px solid #eee;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    
    &:hover {
      color: var(--primary);
      padding-left: 0.5rem;
      background-color: rgba(0, 0, 0, 0.02);
    }
  }
  
  a:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 576px) {
    padding: 0.8rem 1rem;
    
    a {
      padding: 0.7rem 0;
    }
  }
`;
