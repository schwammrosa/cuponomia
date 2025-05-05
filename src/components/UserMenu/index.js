import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser as farUser } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fechar o menu quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div ref={menuRef} className="nav-item nav-sign js-nav-sign nav-sign-notlogged">
      
      <button 
        className="nav-user" 
        data-test-id="header-user-menu-button" 
        aria-label="Menu do Usuário"
        data-event="Navigation" 
        data-action="Nav-User"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={farUser} className="nav-user-icon" aria-hidden="true" />
        <span className="nav-user-sign is-anon">
          <span className="nav-user-name js-user-name">você tem</span>
          <span className="nav-user-cash js-user-cash">R$ 0,00</span>
        </span>
        <FontAwesomeIcon icon={faChevronDown} className="nav-user-arrow" aria-hidden="true" />
      </button>
      
      {isOpen && (
        <>
          <ul className="subnav subnav-sign js-subnav js-subnav-sign">
            <div className="signinCall js-signinCall--default current">
              <span className="signinCall-text js-subNav-sign-text">
                Entre para garantir <strong>cashback</strong> em suas compras. É grátis!
              </span>
              <Link to="/login">
                <button 
                  id="signup-btn" 
                  data-test-id="header-user-menu-signup-button" 
                  className="signup-btn js-signup-btn js-hide-jewel" 
                  type="button" 
                  data-url="criar-conta" 
                  data-event="Navigation" 
                  data-action="Nav-Userbar-CreateAccount"
                >
                  Entrar
                </button>
              </Link>
            </div>
          </ul>
          <div className="focus-overlay js-backdropSubnav" onClick={() => setIsOpen(false)}></div>
        </>
      )}
    </div>
  );
};

export default UserMenu;
