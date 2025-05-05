import React from 'react';
import Slider from 'react-slick';
import { BannerCarouselContainer, BannerItem } from './styles';

// Importe os estilos CSS do Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerCarousel = () => {
  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    adaptiveHeight: false
  };

  // Dados de banners com imagens para desktop
  const banners = [
    {
      id: 1,
      title: "Ofertas Exclusivas",
      description: "Descontos imperdíveis em produtos selecionados!",
      image: "/images/bane1.png",
      backgroundColor: "#6a3796"
    },
    {
      id: 2,
      title: "Especial Tecnologia",
      description: "Os melhores descontos em smartphones e eletrônicos",
      image: "/images/bane2.png",
      backgroundColor: "#6a3796"
    },
    {
      id: 3,
      title: "Melhores Ofertas",
      description: "Aproveite as promoções de cashback",
      image: "/images/Bane3.png",
      backgroundColor: "#6a3796"
    }
  ];

  return (
    <BannerCarouselContainer>
      <div className="container">
        <Slider {...settings}>
          {banners.map(banner => (
            <BannerItem 
              key={banner.id} 
              backgroundColor={banner.backgroundColor}
              backgroundImage={banner.image}
            >
              <button className="banner-button">Aproveite agora</button>
            </BannerItem>
          ))}
        </Slider>
      </div>
    </BannerCarouselContainer>
  );
};

export default BannerCarousel;
