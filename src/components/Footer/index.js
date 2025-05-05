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
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </SocialIcon>
              <SocialIcon>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </SocialIcon>
              <SocialIcon>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </SocialIcon>
              <SocialIcon>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
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
