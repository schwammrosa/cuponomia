import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HomeContainer, 
  HeroBanner, 
  FeaturedStores, 
  StoreCard,
  TopCoupons,
  CouponCard,
  HowItWorks,
  Step,
  Categories,
  CategoryCard,
  Newsletter,
  NewsletterForm,
  NewsletterInput,
  NewsletterButton,
  SectionTitle,
  SectionSubtitle
} from './styles';
import BannerCarousel from '../../components/BannerCarousel';
import TopCouponsCarousel from '../../components/TopCouponsCarousel';
import BestCashbacksCarousel from '../../components/BestCashbacksCarousel';

const Home = () => {
  // Dados simulados para lojas em destaque
  const featuredStores = [
    { id: 1, name: 'Samsung', cashback: 'até 15%', couponCount: '24', logo: '/images/samsung.png' },
    { id: 2, name: 'Natura', cashback: '12%', couponCount: '20', logo: '/images/natura.png' },
    { id: 3, name: 'Dell', cashback: 'até 5%', couponCount: '9', logo: '/images/dell.png' },
    { id: 4, name: 'Casas Bahia', cashback: 'até 11%', couponCount: '45', logo: '/images/casas-bahia.png' },
    { id: 5, name: 'Netshoes', cashback: '8%', couponCount: '60', logo: '/images/netshoes.png' },
    { id: 6, name: 'Magazine Luiza', cashback: '7.1%', couponCount: '35', logo: '/images/magazine.png' }
  ];

  // Dados simulados para cupons em destaque
  const topCoupons = [
    { 
      id: 1, 
      store: 'Magalu', 
      title: 'Dia das Mães com até 60% OFF',
      cashback: '10%',
      details: 'Aproveite o tema selecionado ou não.',
      verification: '3 dias atrás',
      usageCount: '20',
      code: '',
      type: 'discount',
      logo: '/images/magazine.png' 
    },
    { 
      id: 2, 
      store: 'Shein', 
      title: 'Festival fashion com desconto garantido de R$12 com cupom Shein',
      cashback: '1%',
      details: 'Aproveite em sua primeira pedido acima de R$45. Válido apenas para produtos 5.',
      verification: '3 dias atrás',
      usageCount: '50',
      code: '511',
      type: 'code',
      logo: '/images/shein.png' 
    },
    { 
      id: 3, 
      store: 'KaBuM', 
      title: 'KaBuM e Cuponomia: Lista exclusiva com os melhores produtos e desconto de até 55%',
      cashback: '1,1%',
      details: 'Corra e aproveite para economizar com essa parceria incrível. Promoção válida p...',
      verification: '3 dias atrás',
      usageCount: '4',
      code: '',
      type: 'discount',
      logo: '/images/kabum.png' 
    },
    { 
      id: 4, 
      store: 'Fast Shop', 
      title: 'Itens imperdíveis com 10% OFF aplicando o cupom Fast Shop',
      cashback: '1,5%',
      details: 'Seja Membro 10% OFF',
      verification: '3 dias atrás',
      usageCount: '8',
      code: 'X10',
      type: 'code',
      logo: '/images/fast-shop.png' 
    }
  ];

  // Dados simulados para categorias
  const categories = [
    { id: 1, name: 'Eletrônicos', icon: '📱' },
    { id: 2, name: 'Moda', icon: '👕' },
    { id: 3, name: 'Casa e Decoração', icon: '🏠' },
    { id: 4, name: 'Viagens', icon: '✈️' },
    { id: 5, name: 'Alimentação', icon: '🍔' },
    { id: 6, name: 'Beleza', icon: '💄' }
  ];

  return (
    <HomeContainer>
      <HeroBanner>
        <div className="container">
          <div className="hero-content">
            <h1>Cupons e cashback em 2.000 lojas</h1>
            <h2>Economize na sua compra usando os melhores Cupons de Desconto e Cashback!</h2>
          </div>
        </div>
      </HeroBanner>
      
      <BannerCarousel />

      <div className="container">
        <FeaturedStores>
          <div className="stores-grid">
            {featuredStores.map(store => (
              <StoreCard key={store.id}>
                <Link to={`/loja/${store.id}`}>
                  <img src={store.logo} alt={store.name} />
                  <div className="cashback-info">
                    <div className="cashback-badge">
                      <span className="cashback-icon">%</span>
                    </div>
                    <span className="cashback-text">{store.cashback} de cashback</span>
                  </div>
                  <div className="coupon-count">{store.couponCount} cupons</div>
                </Link>
              </StoreCard>
            ))}
          </div>
        </FeaturedStores>
        
        <TopCouponsCarousel />
        
        <BestCashbacksCarousel />

        <TopCoupons>
          <SectionTitle>Os 25 melhores Cupons de Desconto da semana!</SectionTitle>
          
          <div className="coupons-grid">
            {topCoupons.map(coupon => (
              <CouponCard key={coupon.id}>
                <div className="store-logo">
                  <img src={coupon.logo} alt={coupon.store} />
                </div>
                <div className="coupon-content">
                  <h3>{coupon.title}</h3>
                  <div className="cashback-info">+ até {coupon.cashback} de cashback</div>
                  <div className="coupon-details">{coupon.details}</div>
                  <div className="coupon-verification">
                    <span>Verificado {coupon.verification}</span> • <span>{coupon.usageCount} usuários hoje</span>
                  </div>
                </div>
                <div className="coupon-action">
                  {coupon.type === 'code' ? (
                    <button className="coupon-button">
                      Ver Cupom
                      <span className="coupon-code">{coupon.code}</span>
                    </button>
                  ) : (
                    <button className="discount-button">Ver Desconto</button>
                  )}
                </div>
              </CouponCard>
            ))}
          </div>
        </TopCoupons>

        <div className="categories-row">
          <h2>As categorias mais populares</h2>
          <div className="categories-buttons">
            <button className="category-button">Alimentos e Bebidas</button>
            <button className="category-button">Celulares e Smartphones</button>
            <button className="category-button">Eletrodomésticos</button>
            <button className="category-button">Games</button>
            <button className="category-button">Móveis e Decoração</button>
            <button className="category-button">Passagem Aérea</button>
            <button className="category-button">Táxi</button>
            <button className="category-button">TV</button>
          </div>
        </div>

        <HowItWorks>
          <div className="how-title">
            <span className="how-icon">?</span>
            <h2>Como usar cashback?</h2>
          </div>
          
          <div className="steps-container">
            <Step>
              <div className="step-number">1.</div>
              <h3>Ative seu cashback</h3>
              <p>Cadastre-se no Cuponomia, torne-se uma loja participante e ative seu cashback clicando em nossos cupons de ofertas.</p>
            </Step>
            <Step>
              <div className="step-number">2.</div>
              <h3>Compre normalmente</h3>
              <p>Quando ativar seu cashback, você é direcionado para a loja onde você poderá comprar normalmente.</p>
            </Step>
            <Step>
              <div className="step-number">3.</div>
              <h3>Resgate seu cashback</h3>
              <p>Parte do valor das suas compras é adicionado ao seu saldo no Cuponomia. Ao completar R$ 20, você pode resgatar para sua conta bancária, sem custo algum.</p>
            </Step>
          </div>
        </HowItWorks>
        
        <div className="how-coupons">
          <div className="how-title">
            <span className="how-icon">?</span>
            <h2>Como usar cupons de desconto?</h2>
          </div>
          
          <div className="coupon-types">
            <div className="coupon-type">
              <h3>Código de Desconto</h3>
              <p>Você receberá um código (ex: CUPONOMIA5OFF) que deverá ser digitado antes de finalizar a sua compra (normalmente na tela de Pagamento) no campo identificado como "Código Promocional", "Vale-Desconto", "Cupom" etc. Clique "Ativar cupom" ou digite o código para conseguir à redução de preço.</p>
            </div>
            <div className="coupon-type">
              <h3>Link de Desconto</h3>
              <p>Muitas vezes não será necessário um código - o desconto será aplicado automaticamente nos produtos da promoção quando você entrar na loja através do nosso link. As lojas podem ter 2 comportamentos diferentes: (A) aplicam o desconto na página do produto, ou (B) você pode ver o "desconto" apenas na página do carrinho. É importante que cliente pule for certeza que o desconto foi aplicado conforme anunciado. Além</p>
            </div>
            <div className="coupon-type">
              <h3>Ofertas</h3>
              <p>No Cuponomia você também encontra as melhores ofertas que são divulgadas todos os dias por todas as lojas. Por isso, é importante acessar o site diariamente para não perder nenhuma oportunidade. Ofertas excelentes tendem a esgotar rapidamente por causa das ações de vários usuários. Muitos casos são ofertas com preços tão baixos que foram resultados por causa destes erros.</p>
            </div>
          </div>
        </div>

        <Categories>
          <SectionTitle>Categorias</SectionTitle>
          <SectionSubtitle>Encontre cupons por categoria</SectionSubtitle>
          
          <div className="categories-grid">
            {categories.map(category => (
              <CategoryCard key={category.id}>
                <Link to={`/categoria/${category.id}`}>
                  <div className="category-icon">{category.icon}</div>
                  <h3>{category.name}</h3>
                </Link>
              </CategoryCard>
            ))}
          </div>
        </Categories>

        <Newsletter>
          <div className="newsletter-content">
            <SectionTitle>Fique por dentro das melhores ofertas</SectionTitle>
            <SectionSubtitle>Cadastre-se para receber cupons exclusivos por e-mail</SectionSubtitle>
            
            <NewsletterForm>
              <NewsletterInput type="email" placeholder="Seu melhor e-mail" />
              <NewsletterButton>Cadastrar</NewsletterButton>
            </NewsletterForm>
          </div>
        </Newsletter>
      </div>
    </HomeContainer>
  );
};

export default Home;
