import styled from 'styled-components';

export const BestCashbacksContainer = styled.div`
  margin: 2rem 0;
  
  .carousel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    
    h2 {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--dark);
    }
    
    .see-all {
      color: var(--primary);
      font-size: 0.9rem;
      font-weight: 500;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
  
  .slick-slide {
    padding: 0 10px;
  }
  
  .slick-prev, .slick-next {
    z-index: 10;
    
    &:before {
      color: var(--primary);
      font-size: 24px;
    }
  }
  
  .slick-prev {
    left: -5px;
  }
  
  .slick-next {
    right: -5px;
  }
`;

export const CashbackCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px 15px;
  position: relative;
  border: 1px solid #eee;
  transition: transform 0.2s, box-shadow 0.2s;
  height: 200px;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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
  }
  
  .logo {
    width: 70px;
    height: 70px;
    margin: 0 auto 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
  
  .cashback-info {
    text-align: center;
    
    .amount {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 5px;
      
      .badge {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: var(--primary);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 5px;
        
        .badge-icon {
          color: white;
          font-size: 10px;
          font-weight: bold;
        }
      }
      
      .text {
        color: var(--dark);
        font-size: 0.9rem;
        font-weight: 600;
      }
    }
    
    .note {
      color: #999;
      font-size: 0.75rem;
      margin-bottom: 5px;
    }
    
    .coupons {
      color: #777;
      font-size: 0.8rem;
    }
  }
`;
