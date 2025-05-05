import styled from 'styled-components';

export const TopCouponsCarouselContainer = styled.div`
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

export const CouponItem = styled.div`
  background-color: white;
  border-radius: 8px;
  border: 1px solid #eee;
  overflow: hidden;
  padding: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .coupon-logo {
    width: 60px;
    height: 60px;
    margin: 0 auto 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  
  .coupon-content {
    flex: 1;
    margin-bottom: 15px;
    
    h3 {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--dark);
      margin-bottom: 10px;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .cashback {
      display: flex;
      align-items: center;
      
      .cashback-icon {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: var(--primary);
        color: white;
        font-size: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 5px;
      }
      
      .cashback-text {
        font-size: 0.8rem;
        color: var(--primary);
      }
    }
  }
  
  .coupon-action {
    margin-top: auto;
    
    button {
      width: 100%;
      padding: 8px;
      border-radius: 4px;
      font-size: 0.85rem;
      font-weight: 500;
      transition: opacity 0.2s;
      
      &:hover {
        opacity: 0.9;
      }
    }
    
    .coupon-code {
      background-color: #4CAF50;
      color: white;
    }
    
    .coupon-discount {
      background-color: var(--primary);
      color: white;
    }
  }
`;
