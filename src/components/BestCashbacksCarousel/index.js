import React from 'react';
import { useAppContext } from '../../context/AppContext';
import Slider from 'react-slick';
import { BestCashbacksContainer, CashbackCard } from './styles';

// Importe os estilos CSS do Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestCashbacksCarousel = () => {
  // Usar o contexto para obter os dados do carrossel
  const { getCarouselCashbacks } = useAppContext();
  
  // Obter os dados do carrossel do contexto
  const bestCashbacks = getCarouselCashbacks();

  // Configurações do carrossel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Estamos usando o contexto para obter os dados

  return (
    <BestCashbacksContainer>
      <div className="container">
        <div className="carousel-header">
          <h2>Melhores cashbacks</h2>
          <a href="/cashbacks" className="see-all">Ver todos</a>
        </div>
        <Slider {...settings}>
          {bestCashbacks.map(cashback => (
            <CashbackCard key={cashback.id}>
              {cashback.label && <div className="label">{cashback.label}</div>}
              <div className="logo">
                <img src={cashback.logo} alt={cashback.store} />
              </div>
              <div className="cashback-info">
                <div className="amount">
                  <div className="badge">
                    <span className="badge-icon">%</span>
                  </div>
                  <div className="text">{cashback.cashback} de cashback</div>
                </div>
                {cashback.note && <div className="note">{cashback.note}</div>}
                <div className="coupons">{cashback.coupons} cupons</div>
              </div>
            </CashbackCard>
          ))}
        </Slider>
      </div>
    </BestCashbacksContainer>
  );
};

export default BestCashbacksCarousel;
