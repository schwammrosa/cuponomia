import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  padding: 2rem 0 4rem;
  background-color: #f9f9f9;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem 0 3rem;
  }
`;

export const PageTitle = styled.div`
  margin-bottom: 2rem;
  
  h1 {
    color: #333;
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const CategorySection = styled.section`
  margin-bottom: 3rem;
  
  h2 {
    color: #555;
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }
`;

export const TopCategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const CategoryItem = styled.div`
  background-color: white;
  border-radius: 8px;
  transition: all 0.2s ease;
  
  a {
    display: flex;
    align-items: center;
    padding: 1rem;
    text-decoration: none;
    color: #333;
  }
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const CategoryIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  margin-right: 10px;
  font-size: 1.25rem;
  color: #1565c0;
`;

export const CategoryName = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;

export const PopularStoresSection = styled.section`
  margin-top: 3rem;
  
  h2 {
    color: #555;
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }
`;

export const StoresGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StoreCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  a {
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  img {
    max-width: 100%;
    max-height: 40px;
    object-fit: contain;
  }
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
