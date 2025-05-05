import styled from 'styled-components';

export const AllStoresContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  
  .no-results {
    grid-column: 1 / -1;
    text-align: center;
    padding: 4rem 0;
    background-color: #f9f9f9;
    border-radius: 10px;
    color: #666;
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const PageHeader = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  
  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.1rem;
    color: #666;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

export const FilterSection = styled.div`
  display: flex;
  margin-bottom: 2rem;
  gap: 2rem;
  
  .right-filters {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const CategoryFilter = styled.div`
  width: 250px;
  
  h3 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #f0f0f0;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      padding: 0.5rem 0;
      cursor: pointer;
      transition: all 0.2s ease;
      
      &:hover {
        color: #ff6b6b;
      }
      
      &.active {
        color: #ff6b6b;
        font-weight: bold;
      }
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      
      li {
        padding: 0.5rem 1rem;
        background-color: #f0f0f0;
        border-radius: 20px;
        
        &.active {
          background-color: #ff6b6b;
          color: white;
        }
      }
    }
  }
`;

export const StoreSearch = styled.div`
  display: flex;
  height: 50px;
  border-radius: 25px;
  overflow: hidden;
  border: 2px solid #f0f0f0;
  margin-bottom: 1rem;
  
  input {
    flex: 1;
    border: none;
    padding: 0 1.5rem;
    font-size: 1rem;
    outline: none;
  }
  
  button {
    width: 50px;
    background-color: #ff6b6b;
    border: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
    
    &:hover {
      background-color: #ff5252;
    }
  }
`;

export const AlphabetFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  
  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #f0f0f0;
    cursor: pointer;
    transition: all 0.2s ease;
    font-weight: 500;
    
    &:hover {
      background-color: #e0e0e0;
    }
    
    &.active {
      background-color: #ff6b6b;
      color: white;
    }
    
    &:first-child {
      width: auto;
      padding: 0 15px;
      border-radius: 20px;
    }
  }
  
  @media (max-width: 768px) {
    justify-content: center;
    
    span {
      width: 30px;
      height: 30px;
      font-size: 0.9rem;
    }
  }
`;

export const StoresGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const StoreCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background-color: white;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .store-logo {
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    background-color: #f9f9f9;
    
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
  
  .store-info {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    
    h3 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: #333;
    }
    
    .cashback {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      font-weight: 500;
      
      .badge {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #ff6b6b;
        color: white;
        margin-right: 0.5rem;
        font-size: 0.9rem;
      }
    }
    
    .coupons {
      color: #666;
      font-size: 0.9rem;
      margin-top: auto;
    }
  }
`;
