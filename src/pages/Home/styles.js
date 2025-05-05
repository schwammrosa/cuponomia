import styled, { css } from 'styled-components';

// Estilos para a linha de categorias
const categoriesRowStyles = css`
  .categories-row {
    margin-bottom: 2rem;
    
    h2 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1rem;
      text-align: center;
    }
    
    .categories-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: center;
    }
    
    .category-button {
      background-color: white;
      border: 1px solid #e0e0e0;
      border-radius: 50px;
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
      color: var(--dark);
      transition: all 0.2s;
      
      &:hover {
        border-color: var(--primary);
        color: var(--primary);
      }
    }
  }
`;

// Estilos para a seção de como usar cupons
const howCouponsStyles = css`
  .how-coupons {
    margin-bottom: 3rem;
    background-color: white;
    padding: 1.5rem;
    border-radius: 4px;
    
    .how-title {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
      
      .how-icon {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: var(--primary);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: bold;
        margin-right: 10px;
      }
      
      h2 {
        color: var(--dark);
        font-size: 1.2rem;
        font-weight: 600;
      }
    }
    
    .coupon-types {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
      
      .coupon-type {
        h3 {
          font-size: 1.1rem;
          margin-bottom: 0.8rem;
          color: var(--dark);
        }
        
        p {
          font-size: 0.9rem;
          color: #555;
          line-height: 1.5;
        }
      }
    }
  }
`;

export const HomeContainer = styled.div`
  width: 100%;
  
  ${categoriesRowStyles}
  ${howCouponsStyles}
`;

export const HeroBanner = styled.section`
  background-color: var(--purple-light);
  color: var(--dark);
  padding: 2rem 0;
  margin-bottom: 2rem;
  text-align: center;
  
  .hero-content {
    max-width: 800px;
    margin: 0 auto;
    
    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      text-align: center;
    }
    
    h2 {
      font-size: 1.2rem;
      font-weight: 400;
      margin-bottom: 2rem;
      opacity: 0.9;
      text-align: center;
    }
    
    .cta-button {
      display: inline-block;
      background-color: white;
      color: var(--primary);
      padding: 1rem 2rem;
      border-radius: 4px;
      font-weight: 500;
      transition: all 0.3s;
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }
    }
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0;
    
    .hero-content {
      h1 {
        font-size: 2rem;
      }
      
      h2 {
        font-size: 1rem;
      }
    }
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--dark);
  text-align: center;
`;

export const SectionSubtitle = styled.p`
  font-size: 1rem;
  color: var(--gray);
  text-align: center;
  margin-bottom: 2rem;
`;

export const FeaturedStores = styled.section`
  margin-bottom: 3rem;
  
  .stores-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
    margin-bottom: 1.5rem;
    
    @media (max-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
    
    @media (max-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  .see-all {
    display: block;
    text-align: center;
    color: var(--primary);
    font-weight: 500;
    margin-top: 1.5rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StoreCard = styled.div`
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  
  img {
    width: 100%;
    height: 70px;
    object-fit: contain;
    margin: 15px auto;
    padding: 0 10px;
  }
  
  .cashback-info {
    display: flex;
    align-items: center;
    border-top: 1px solid #f0f0f0;
    padding: 8px 10px;
    background-color: #fafafa;
  }
  
  .cashback-badge {
    width: 18px;
    height: 18px;
    background-color: var(--primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
  }
  
  .cashback-icon {
    color: white;
    font-size: 10px;
    font-weight: bold;
  }
  
  .cashback-text {
    font-size: 13px;
    color: var(--dark);
  }
  
  .coupon-count {
    font-size: 12px;
    color: #777;
    padding: 5px 10px 10px;
    background-color: #fafafa;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const TopCoupons = styled.section`
  margin-bottom: 3rem;
  
  .coupons-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const CouponCard = styled.div`
  background-color: white;
  border-radius: 4px;
  display: flex;
  overflow: hidden;
  border: 1px solid #eee;
  
  .store-logo {
    width: 100px;
    min-width: 100px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #eee;
    
    img {
      width: 100%;
      max-width: 80px;
      height: auto;
      object-fit: contain;
    }
    
    @media (max-width: 576px) {
      width: 80px;
      min-width: 80px;
      padding: 10px;
    }
  }
  
  .coupon-content {
    flex: 1;
    padding: 15px;
    overflow: hidden;
    
    h3 {
      font-size: 0.95rem;
      font-weight: 600;
      margin-bottom: 6px;
      color: var(--dark);
    }
    
    .cashback-info {
      color: var(--primary);
      font-size: 0.8rem;
      margin-bottom: 6px;
    }
    
    .coupon-details {
      font-size: 0.85rem;
      color: #555;
      margin-bottom: 10px;
    }
    
    .coupon-verification {
      font-size: 0.75rem;
      color: #777;
    }
  }
  
  .coupon-action {
    width: 140px;
    min-width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-left: 1px solid #eee;
    
    .coupon-button, .discount-button {
      width: 100%;
      background-color: #4CAF50;
      color: white;
      border-radius: 4px;
      padding: 10px;
      font-size: 0.85rem;
      font-weight: 500;
      text-align: center;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .discount-button {
      background-color: var(--primary);
    }
    
    .coupon-code {
      background-color: #429444;
      width: 100%;
      text-align: center;
      margin-top: 5px;
      padding: 3px 0;
      font-size: 0.75rem;
      font-weight: bold;
    }
    
    @media (max-width: 768px) {
      width: 120px;
      min-width: 120px;
      padding: 10px;
    }
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    
    .store-logo {
      width: 100%;
      border-right: none;
      border-bottom: 1px solid #eee;
    }
    
    .coupon-action {
      width: 100%;
      border-left: none;
      border-top: 1px solid #eee;
    }
  }
`;

export const HowItWorks = styled.section`
  margin-bottom: 3rem;
  background-color: white;
  padding: 1.5rem;
  border-radius: 4px;
  
  .how-title {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    
    .how-icon {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background-color: var(--primary);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: bold;
      margin-right: 10px;
    }
    
    h2 {
      color: var(--dark);
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
  
  .steps-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const Step = styled.div`
  text-align: left;
  
  .step-number {
    color: var(--primary);
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: var(--dark);
  }
  
  p {
    color: #555;
    line-height: 1.5;
    font-size: 0.9rem;
  }
`;

export const Categories = styled.section`
  margin-bottom: 4rem;
  
  .categories-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const CategoryCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
  padding: 2rem;
  
  .category-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.1rem;
    color: var(--dark);
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

export const Newsletter = styled.section`
  background-color: #F5F5F5;
  border-radius: 8px;
  padding: 3rem;
  margin-bottom: 4rem;
  text-align: center;
  
  .newsletter-content {
    max-width: 600px;
    margin: 0 auto;
  }
`;





export const NewsletterForm = styled.form`
  display: flex;
  max-width: 500px;
  margin: 2rem auto 0;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const NewsletterInput = styled.input`
  flex: 1;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
  
  @media (max-width: 576px) {
    border-radius: 4px;
    margin-bottom: 0.5rem;
  }
`;

export const NewsletterButton = styled.button`
  background-color: var(--primary);
  color: white;
  padding: 1rem 2rem;
  border-radius: 0 4px 4px 0;
  font-weight: 500;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #e64a19;
  }
  
  @media (max-width: 576px) {
    border-radius: 4px;
  }
`;
