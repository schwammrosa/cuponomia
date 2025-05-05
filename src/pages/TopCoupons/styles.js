import styled from 'styled-components';

export const TopCouponsContainer = styled.div`
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
  
  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
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

export const CouponsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  
  @media (max-width: 1024px) {
    gap: 1.2rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const CouponCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .store-logo {
    padding: 1.5rem;
    background-color: #f9f9f9;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    
    img {
      max-width: 100px;
      max-height: 60px;
      object-fit: contain;
    }
  }
  
  .coupon-content {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    
    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #333;
      line-height: 1.4;
    }
    
    .cashback-info {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0.2rem 0;
      
      .cashback-icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: var(--primary);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        font-weight: 600;
      }
      
      .cashback-text {
        color: var(--primary);
        font-weight: 500;
        font-size: 0.95rem;
      }
    }
    
    .coupon-details {
      font-size: 0.9rem;
      color: #666;
      line-height: 1.5;
    }
    
    .coupon-verification {
      margin-top: auto;
      font-size: 0.8rem;
      color: #888;
      display: flex;
      gap: 0.5rem;
    }
  }
  
  .coupon-action {
    padding: 1rem 1.5rem;
    border-top: 1px solid #eee;
    
    button {
      width: 100%;
      padding: 0.8rem;
      border-radius: 4px;
      font-weight: 600;
      font-size: 0.95rem;
      transition: all 0.2s ease;
      text-align: center;
      
      &:hover {
        transform: translateY(-2px);
      }
      
      &:active {
        transform: translateY(0);
      }
    }
    
    .coupon-button {
      background-color: #f8f8f8;
      color: #333;
      border: 2px dashed #ddd;
      position: relative;
      overflow: hidden;
      
      .coupon-code {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--primary);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateY(100%);
        transition: transform 0.3s ease;
      }
      
      &:hover .coupon-code {
        transform: translateY(0);
      }
    }
    
    .discount-button {
      background-color: var(--primary);
      color: white;
      border: none;
      
      &:hover {
        background-color: #e64a19;
        box-shadow: 0 4px 8px rgba(230, 74, 25, 0.3);
      }
    }
  }
  
  @media (max-width: 768px) {
    .store-logo {
      height: 100px;
      padding: 1rem;
      
      img {
        max-width: 80px;
        max-height: 50px;
      }
    }
    
    .coupon-content {
      padding: 1rem;
      gap: 0.6rem;
      
      h3 {
        font-size: 1rem;
      }
    }
    
    .coupon-action {
      padding: 0.8rem 1rem;
      
      button {
        padding: 0.7rem;
        font-size: 0.9rem;
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
      
      .page-number {
        width: 36px;
        height: 36px;
        font-size: 0.9rem;
      }
    }
  }
`;
