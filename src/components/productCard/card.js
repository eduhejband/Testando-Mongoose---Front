import React, { useState, useEffect } from 'react';
import './card.css';
import axios from 'axios';

const Card = ({ id,imageSrc, description, price }) => {
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    if (isRemoving) {
      const timeoutId = setTimeout(() => {
        setIsRemoving(false);
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [isRemoving]);

  const handleAddClick = async () => {
    const newCard = { id: id,name: description, price };

    try {
      await axios.post('http://localhost:3001/carrinhos', newCard);
      alert('Card adicionado ao carrinho');
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`card ${isRemoving ? 'slide-out' : ''}`}>
      <img src={imageSrc} alt="Product" className="card-image" />
      <div className="card-content">
        <p className="card-description">{description}</p>
        <p className="card-price">R${price.toFixed(2)}</p>
        <button className="card-button" onClick={handleAddClick}>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default Card;
