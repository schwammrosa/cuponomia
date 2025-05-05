import styled from 'styled-components';

export const BannerCarouselContainer = styled.div`
  margin-bottom: 2rem;
  
  .slick-dots {
    bottom: 15px;
    
    li button:before {
      color: white;
      opacity: 0.7;
      font-size: 10px;
    }
    
    li.slick-active button:before {
      color: white;
      opacity: 1;
    }
  }
  
  .slick-prev, .slick-next {
    z-index: 10;
    width: 30px;
    height: 30px;
    
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 15px;
  }
  
  .slick-next {
    right: 15px;
  }
`;

export const BannerItem = styled.div`
  position: relative;
  height: 350px;
  background-color: ${props => props.backgroundColor || 'var(--primary)'};
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  overflow: hidden;
  display: flex !important;
  align-items: flex-end;
  justify-content: flex-start;
  padding-bottom: 60px;
  padding-left: 50px;
  
  /* Gradiente em toda a área do banner para garantir visibilidade do botão sobre a imagem */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7), rgba(106, 55, 150, 0.3));
    z-index: 1;
  }
  
  @media (max-width: 1200px) {
    background-size: cover;
  }
  
  @media (max-width: 992px) {
    height: 300px;
    background-size: cover;
    background-position: center;
    padding: 0 0 40px 0;
    align-items: flex-end;
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    height: 250px;
  }
  

    
  .banner-button {
    background-color: white;
    color: var(--primary);
    border: none;
    border-radius: 4px;
    padding: 0.8rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s;
    max-width: 200px;
    position: relative;
    z-index: 2;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      background-color: #fff;
    }
    
    @media (max-width: 992px) {
      margin: 0 auto;
      padding: 0.7rem 1.3rem;
    }
    
    @media (max-width: 576px) {
      padding: 0.6rem 1.2rem;
      font-size: 0.9rem;
    }
  }
`;
