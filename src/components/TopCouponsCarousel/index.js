import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import Slider from 'react-slick';
import { TopCouponsCarouselContainer, CouponItem } from './styles';

// Importe os estilos CSS do Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopCouponsCarousel = () => {
  // Usar o contexto para obter os dados do carrossel
  const { getCarouselCoupons } = useAppContext();
  
  // Obter os dados do carrossel do contexto
  const topCoupons = getCarouselCoupons();

  // Configurações do carrossel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <TopCouponsCarouselContainer>
      <div className="container">
        <div className="carousel-header">
          <h2>Top Cupons</h2>
          <a href="/cupons" className="see-all">Ver todos</a>
        </div>
        <Slider {...settings}>
          {topCoupons.map(coupon => (
            <CouponItem key={coupon.id}>
              <div className="coupon-logo">
                <img src={coupon.logo} alt={coupon.store} />
              </div>
              <div className="coupon-content">
                <h3>{coupon.title}</h3>
                <div className="cashback">
                  <span className="cashback-icon">%</span>
                  <span className="cashback-text">{coupon.cashback} de cashback</span>
                </div>
              </div>
              <div className="coupon-action">
                {coupon.type === 'code' ? (
                  <button className="coupon-code">{coupon.code}</button>
                ) : (
                  <button className="coupon-discount">Ver Desconto</button>
                )}
              </div>
            </CouponItem>
          ))}
        </Slider>
      </div>
    </TopCouponsCarouselContainer>
  );
};

export default TopCouponsCarousel;
