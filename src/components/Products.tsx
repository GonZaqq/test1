import React, { useState } from 'react';

const products = [
  {
    id: 1, 
    name: 'Баллончики CO₂ 8.6г (30 шт)', 
    img: 'ballons.webp',
    shortDesc: 'Баллончик для современных классических сифонов. Пищевой CO₂... ',
    fullDesc: 'Баллончик для современных классических сифонов. Пищевой CO₂. Из одного баллончика можно приготовить до 1 литра готового напитка. Максимальная газация воды 8,5 - 8,7 гр CO₂. Заправлен в январе 2026 г. Пищевой CO₂. Для современных классических сифонов. НЕ подходят к советским сифонам.',
    wb: 'https://www.wildberries.ru/catalog/384650473/detail.aspx',
    ozon: 'https://www.ozon.ru/product/ballonchiki-dlya-sifona-30-sht-2096634942/',
    yam: 'https://market.yandex.ru/product/4479344203'
  },
  {
    id: 2, 
    name: 'Баллон CO₂ 425 гр', 
    img: 'ballon.webp',
    shortDesc: 'Баллон для сифона. Пищевой CO₂... ',
    fullDesc: 'Баллон для сифона. Пищевой CO₂. Из одного баллона можно приготовить до 60 литров готового напитка. Доступ к пище для сифона. Готов к использованию, заправлен в России в феврале 2026 г. Пищевой CO₂, степень очистки 99,99%. Хватит до 60 литров газированной воды. Подходит для современных классических сифонов.',
    wb: 'https://www.wildberries.ru/catalog/211023592/detail.aspx',
    ozon: 'https://www.ozon.ru/product/zapchast-dlya-sifona-1611972475/',
    yam: ''
  }
];

const Products: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <h1 className="hero-title">Наши товары</h1>
        <p className="products-subtitle">
          Лучшие предложения Kochford на маркетплейсах
        </p>
      </div>
      
      <div className="products-container">
        {products.map((product) => {
          const isExpanded = expandedId === product.id;
          const displayDesc = isExpanded ? product.fullDesc : product.shortDesc;
          const hasMore = product.fullDesc.length > product.shortDesc.length;
          
          return (
            <div key={product.id} className="product-card">
              <h3 className="product-title">{product.name}</h3>
              
              <div className="product-image-wrapper">
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="product-image"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400x400/0066cc/ffffff?text=Kochford';
                  }}
                />
              </div>
              
              <div className="product-description-wrapper">
                <p className="product-description">
                  {displayDesc}
                  {!isExpanded && hasMore && (
                    <span className="expand-text" onClick={() => toggleExpand(product.id)}>
                       раскрыть
                    </span>
                  )}
                </p>
                {isExpanded && hasMore && (
                  <span className="collapse-text" onClick={() => toggleExpand(product.id)}>
                    свернуть
                  </span>
                )}
              </div>
              
              <div className="product-buttons">
                <a 
                  href={product.wb} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="market-btn wb-btn"
                >
                  Wildberries
                </a>
                <a 
                  href={product.ozon} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="market-btn ozon-btn"
                >
                  Ozon
                </a>
                <a 
                  href={product.yam} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="market-btn yam-btn"
                >
                  Яндекс Маркет
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;