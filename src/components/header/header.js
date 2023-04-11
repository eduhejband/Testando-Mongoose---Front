import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import './header.css';
import Logo from '../../images/logo.png';
import CartIcon from '../../images/cart-icon.png';

function Header({ onSearch, onCartClick }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header>
      <div className="header-container">
        <img src={Logo} alt="Logo" className="logo-img" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Buscar produtos, marcas e muito mais"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button type="submit">
            <AiOutlineSearch />
          </button>
        </form>
        <button className="myCart" onClick={onCartClick}>
          <img src={CartIcon} alt="Cart Icon" className="cart-icon" />
          <span>Carrinho</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
