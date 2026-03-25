import React from 'react';

const Info: React.FC = () => (
  <div className="info-page">
    <div className="info-header">
      <h1 className="hero-title">Информация</h1>
    </div>
    
    <div className="info-grid">
      <div className="info-card">
        <div className="info-icon">📧</div>
        <h3 className="info-card-title">Контакты</h3>
        <p className="info-contact">@</p>
        <a href="tel:+74951234567" className="info-phone">+7 (999) 999-99-99</a>
      </div>

      <div className="info-card">
        <div className="info-icon">🚚</div>
        <h3 className="info-card-title">Доставка</h3>
        <p className="info-text">WB, Ozon, Яндекс Маркет</p>
        <p className="info-text">1-5 дней по России</p>
      </div>

      <div className="info-card">
        <div className="info-icon">✅</div>
        <h3 className="info-card-title">Качество</h3>
        <p className="info-text">аа</p>
      </div>
    </div>
  </div>
);

export default Info;