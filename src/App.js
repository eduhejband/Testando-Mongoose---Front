import React, { useState } from 'react';
import Header from './components/header/header.js';
import CardList from './components/productList/productList.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carrinho from './components/shoppingKart/carrinho';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="App">
      <Router>
        <Header onSearch={(term) => setSearchTerm(term)} onCartClick={handleCartClick} />
        <Routes>
          {showCart && <Route path="/carrinho" exact element={<Carrinho />} />}
        </Routes>
      </Router>

      <div className="content">
        <CardList searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;
