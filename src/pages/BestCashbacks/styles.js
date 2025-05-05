import styled from 'styled-components';

export const BestCashbacksContainer = styled.div`
  padding: 2rem 0 4rem;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem 0 3rem;
  }
`;

export const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  h1 {
    color: var(--primary);
    font-size: 2.5rem;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background-color: var(--primary);
    }
  }
  
  p {
    font-size: 1.1rem;
    color: #666;
    max-width: 700px;
    margin: 0 auto;
    margin-top: 1.5rem;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    
    h1 {
      font-size: 1.8rem;
    }
    
    p {
      font-size: 1rem;
      margin-top: 1.2rem;
    }
  }
`;

export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: 0.5rem;
    
    &::-webkit-scrollbar {
      height: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 4px;
    }
  }
`;

export const FilterButton = styled.button`
  padding: 0.7rem 1.2rem;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  background-color: ${props => props.isActive ? 'var(--primary)' : '#f5f5f5'};
  color: ${props => props.isActive ? 'white' : '#333'};
  border: none;
  white-space: nowrap;
  
  &:hover {
    background-color: ${props => props.isActive ? 'var(--primary)' : '#e9e9e9'};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

export const SearchField = styled.div`
  display: flex;
  max-width: 300px;
  width: 100%;
  
  input {
    flex: 1;
    padding: 0.7rem 1rem;
    border: 1px solid #ddd;
    border-radius: 4px 0 0 4px;
    font-size: 0.95rem;
    
    &:focus {
      outline: none;
      border-color: var(--primary);
    }
  }
  
  button {
    padding: 0.7rem 1rem;
    background-color: var(--primary);
    color: white;
    border: none;
    border-radius: 0 4px 4px 0;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: #e64a19;
    }
  }
  
  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

export const CashbacksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const CashbackCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid #eee;
  transition: all 0.3s ease;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-color: var(--primary);
  }
  
  .label {
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--primary);
    color: white;
    font-size: 0.7rem;
    padding: 4px 8px;
    border-radius: 8px 0 8px 0;
    font-weight: 500;
  }
  
  .logo {
    width: 90px;
    height: 90px;
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
  
  .store-name {
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.8rem;
  }
  
  .cashback-info {
    margin-top: auto;
    
    .amount {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.5rem;
      
      .badge {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: var(--primary);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
        
        .badge-icon {
          color: white;
          font-size: 12px;
          font-weight: bold;
        }
      }
      
      .text {
        color: var(--dark);
        font-size: 1rem;
        font-weight: 600;
      }
    }
    
    .note {
      color: #999;
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
    }
    
    .coupons {
      color: #777;
      font-size: 0.85rem;
      margin-top: 0.5rem;
    }
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem;
    
    .logo {
      width: 80px;
      height: 80px;
      margin-bottom: 0.8rem;
    }
    
    .store-name {
      font-size: 1rem;
    }
    
    .cashback-info {
      .amount {
        .badge {
          width: 20px;
          height: 20px;
          
          .badge-icon {
            font-size: 10px;
          }
        }
        
        .text {
          font-size: 0.9rem;
        }
      }
      
      .coupons {
        font-size: 0.8rem;
      }
    }
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  
  .pagination-button {
    padding: 0.7rem 1.2rem;
    border: 1px solid #ddd;
    background-color: white;
    border-radius: 4px;
    color: #666;
    font-weight: 500;
    transition: all 0.2s ease;
    
    &:hover:not(:disabled) {
      background-color: #f5f5f5;
      color: var(--primary);
      border-color: var(--primary);
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  
  .pagination-numbers {
    display: flex;
    gap: 0.5rem;
    
    .page-number {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      border: 1px solid #ddd;
      background-color: white;
      color: #666;
      transition: all 0.2s ease;
      
      &:hover:not(.active) {
        background-color: #f5f5f5;
        color: var(--primary);
        border-color: var(--primary);
      }
      
      &.active {
        background-color: var(--primary);
        color: white;
        border-color: var(--primary);
      }
    }
  }
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    
    .pagination-button {
      padding: 0.6rem 1rem;
      font-size: 0.9rem;
    }
    
    .pagination-numbers {
      order: 3;
      width: 100%;
      justify-content: center;
      margin-top: 0.5rem;
      flex-wrap: wrap;
      
      .page-number {
        width: 36px;
        height: 36px;
        font-size: 0.9rem;
      }
    }
  }
`;
