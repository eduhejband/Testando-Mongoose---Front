
import Card from '../productCard/card.js';
import './productList.css';
import racaoBarata from '../../images/racaoBarata.png';
import racaoMedia from '../../images/racaoMedia.png';
import racaoCara from '../../images/racaoCara.png';
import caminhaBarata from '../../images/caminhaBarata.png';
import caminhaMedia from '../../images/caminhaMedia.png';
import caminhaCara from '../../images/caminhaCara.png';
import shampooBarato from '../../images/shampooBarato.png';
import shampooMedio from '../../images/shampooMedio.png';
import shampooCaro from '../../images/shampooCaro.png';
import brinquedoBarato from '../../images/brinquedoBarato.png';
import brinquedoMedio from '../../images/brinquedoMedio.png';
import brinquedoCaro from '../../images/brinquedoCaro.png';

const products = [
  { id: 1, imageSrc:racaoBarata, name: 'Ração Pedigree', description: 'Ração Pedigree', price: 20.00,category:'Comida' },
  { id: 2,imageSrc: racaoMedia, name: 'Ração Premier', description: 'Ração Premier', price: 70.00,category:'Comida' },
  { id: 3,imageSrc: caminhaMedia, name: 'Cama de dormir branca', description: 'Cama de dormir branca', price: 60.00,category:'Caminha' },
  { id: 4, imageSrc: racaoCara, name: 'Ração Origins', description: 'Ração Origins', price: 90.00, category:'Comida' },
  { id: 5, imageSrc: brinquedoCaro, name: 'Bolas de rugby e basquete', description: 'Bolas de rugby e basquete', price: 120.00, category:'Brinquedo' },
  { id: 6, imageSrc: shampooBarato, name: 'Shampoo adulto', description: 'Shampoo adulto', price: 15.00, category:'Produto para banho' },
  { id: 7, imageSrc: brinquedoBarato, name: 'Bolinhas coloridas', description: 'Bolinhas coloridas', price: 25.00, category:'Brinquedo'},
  { id: 8,imageSrc: caminhaCara, name: 'Caminha gourmet', description: 'Caminha gourmet', price: 95.00, category:'Caminha' },
  { id: 9, imageSrc: shampooMedio,name: 'Shampoo infantil', description: 'Shampoo infantil', price: 45.00, category:'Produto para banho' },
  { id: 10, imageSrc: brinquedoMedio, name: 'Arremessador com corda', description: 'Arremessador com corda', price: 55.00, category:'Brinquedo' },
  { id: 11,imageSrc: caminhaBarata, name: 'Caminha cinza', description: 'Caminha cinza', price: 75.00, category:'Caminha' },
  { id: 12,imageSrc: shampooCaro, name: 'Shampoo filhotes gourmet', description: 'Shampoo filhotes gourmet', price: 110.00, category:'Produto para banho' },

];
const CardList = ({ searchTerm, onAddToCart }) => {

  const filteredProducts = products.filter((product) => {
    const name = product.name.toLowerCase();
    const description = product.description.toLowerCase();
    const term = searchTerm.toLowerCase();
    return name.includes(term) || description.includes(term);
  });

  return (
    <div className="card-list">
      <div className="container">
        {filteredProducts.map(product => (
        <Card
          key={product.id}
          imageSrc={product.imageSrc}
          description={product.name}
          price={product.price}
        />
        ))}
      </div>
    </div>
  );
};

export default CardList;