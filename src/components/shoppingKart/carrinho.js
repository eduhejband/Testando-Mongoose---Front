import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './carrinho.css';

const Carrinho = () => {
  const [carrinho, setCarrinho] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCarrinho = async () => {
      const response = await axios.get('http://localhost:3001/carrinhos');
      setCarrinho(response.data);
    };

    fetchCarrinho();
  }, []);

  useEffect(() => {
    const totalPrice = carrinho.reduce(
      (accumulator, current) => accumulator + current.price,
      0
    );
    setTotal(totalPrice);
  }, [carrinho]);

  const handleRemoveClick = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/carrinhos/${id}`);
      setCarrinho(carrinho.filter((produto) => produto._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="carrinho-container">
      <div className='title'><h2>Meu carrinho</h2></div>
      
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {carrinho.map((produto) => (
            <tr key={produto._id}>
              <td>{produto.name}</td>
              <td>R${produto.price.toFixed(2)}</td>
              <td>
                <button className='remover' onClick={() => handleRemoveClick(produto._id)}>
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total:</th>
            <td>R${total.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Carrinho;
