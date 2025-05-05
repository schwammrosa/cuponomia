import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #212121;
  color: white;
  padding: 3rem 0 1.5rem;
  
  @media (max-width: 576px) {
    padding: 2rem 0 1rem;
  }
`;

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const FooterSection = styled.div`
  p {
    margin: 1rem 0;
    color: #bdbdbd;
    line-height: 1.6;
  }
  
  @media (max-width: 576px) {
    p {
      font-size: 0.95rem;
      margin: 0.8rem 0;
    }
  }
`;

export const FooterTitle = styled.h3`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
  position: relative;
  padding-bottom: 0.7rem;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40px;
    height: 2px;
    background-color: var(--primary);
  }
  
  @media (max-width: 576px) {
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
  }
`;

export const FooterLink = styled.div`
  margin-bottom: 0.8rem;
  
  a {
    color: #bdbdbd;
    transition: all 0.3s ease;
    display: inline-block;
    
    &:hover {
      color: var(--primary);
      transform: translateX(5px);
    }
  }
  
  @media (max-width: 576px) {
    margin-bottom: 0.7rem;
    
    a {
      font-size: 0.95rem;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  
  @media (max-width: 576px) {
    margin-top: 1.2rem;
  }
`;

export const SocialIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  margin-right: 12px;
  
  a {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  
  svg {
    transition: all 0.3s ease;
  }
  
  &:hover {
    background: linear-gradient(145deg, #1565c0, #2196f3);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(33, 150, 243, 0.3);
    
    svg {
      transform: scale(1.2);
    }
  }
  
  @media (max-width: 576px) {
    width: 38px;
    height: 38px;
    margin-right: 10px;
  }
`;

export const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.5rem;
  
  @media (max-width: 576px) {
    margin-top: 1.2rem;
    max-width: 100%;
  }
`;

export const NewsletterInput = styled.input`
  padding: 0.8rem 1rem;
  border-radius: 4px;
  border: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  &:focus {
    outline: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
  
  @media (max-width: 576px) {
    padding: 0.7rem 0.9rem;
  }
`;

export const NewsletterButton = styled.button`
  background-color: var(--primary);
  color: white;
  padding: 0.8rem;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #e64a19;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 576px) {
    padding: 0.7rem;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #424242;
  
  p {
    color: #bdbdbd;
    font-size: 0.9rem;
  }
  
  @media (max-width: 576px) {
    padding-top: 1.5rem;
    margin-top: 1.5rem;
    
    p {
      font-size: 0.85rem;
    }
  }
`;
