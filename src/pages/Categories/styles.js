import styled from 'styled-components';

export const CategoriesContainer = styled.div`
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

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const CategoryCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
  
  .category-header {
    background-color: var(--primary);
    padding: 1.5rem;
    text-align: center;
    
    h2 {
      color: white;
      font-size: 1.5rem;
      margin: 0;
    }
    
    .icon {
      font-size: 2.5rem;
      margin-bottom: 0.8rem;
      color: white;
    }
  }
  
  .category-content {
    padding: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    
    .stats {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      
      .stat {
        text-align: center;
        flex: 1;
        
        .value {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 0.3rem;
        }
        
        .label {
          font-size: 0.9rem;
          color: #666;
        }
      }
    }
    
    .stores {
      margin-bottom: 1.5rem;
      
      h3 {
        font-size: 1.1rem;
        margin-bottom: 1rem;
        color: #333;
      }
      
      .store-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem;
        
        .store-logo {
          width: 60px;
          height: 60px;
          border-radius: 8px;
          border: 1px solid #eee;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          
          img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
          }
        }
      }
    }
  }
  
  .category-footer {
    padding: 1rem 1.5rem;
    background-color: #f9f9f9;
    text-align: center;
    
    a {
      display: inline-block;
      padding: 0.7rem 1.5rem;
      background-color: var(--primary);
      color: white;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: #e64a19;
        transform: translateY(-2px);
      }
    }
  }
`;

export const SearchField = styled.div`
  display: flex;
  max-width: 500px;
  width: 100%;
  margin: 0 auto 2.5rem;
  
  input {
    flex: 1;
    padding: 0.8rem 1.2rem;
    border: 1px solid #ddd;
    border-radius: 4px 0 0 4px;
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: var(--primary);
    }
  }
  
  button {
    padding: 0.8rem 1.2rem;
    background-color: var(--primary);
    color: white;
    border: none;
    border-radius: 0 4px 4px 0;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: #e64a19;
    }
  }
`;
