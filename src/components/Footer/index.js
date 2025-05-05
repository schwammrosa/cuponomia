import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FooterContainer, 
  FooterTop, 
  FooterBottom, 
  FooterSection, 
  SocialLinks, 
  SocialIcon,
  FooterTitle,
  FooterLink,
  NewsletterForm,
  NewsletterInput,
  NewsletterButton
} from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterTop>
          <FooterSection>
            <FooterTitle>Cupomista</FooterTitle>
            <p>A melhor plataforma de cupons de desconto e cashback do Brasil. Economize em suas compras online e receba dinheiro de volta.</p>
            <SocialLinks>
              <SocialIcon>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  FB
                </a>
              </SocialIcon>
              <SocialIcon>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  IG
                </a>
              </SocialIcon>
              <SocialIcon>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  TW
                </a>
              </SocialIcon>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Links Rápidos</FooterTitle>
            <FooterLink>
              <Link to="/">Home</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/lojas">Lojas</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/cashback">Cashback</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/sobre">Sobre Nós</Link>
            </FooterLink>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Ajuda</FooterTitle>
            <FooterLink>
              <Link to="/faq">Perguntas Frequentes</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/como-funciona">Como Funciona</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/contato">Contato</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/termos">Termos de Uso</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/privacidade">Política de Privacidade</Link>
            </FooterLink>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Newsletter</FooterTitle>
            <p>Cadastre-se e receba as melhores ofertas por e-mail.</p>
            <NewsletterForm>
              <NewsletterInput 
                type="email" 
                placeholder="Seu melhor e-mail" 
              />
              <NewsletterButton>Cadastrar</NewsletterButton>
            </NewsletterForm>
          </FooterSection>
        </FooterTop>

        <FooterBottom>
          <p>© {new Date().getFullYear()} Cupomista - Todos os direitos reservados</p>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
};

export default Footer;
