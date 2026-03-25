import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import About from './components/About';
import Info from './components/Info';
import Products from './components/Products';
import './App.css';

function App() {
  return (
    <Router>
      {/* Множество реалистичных пузырьков */}
      <div className="bubble-big-left"></div>
      <div className="bubble-big-left-2"></div>
      <div className="bubble-big-right"></div>
      <div className="bubble-big-right-2"></div>
      <div className="bubble-medium-1"></div>
      <div className="bubble-medium-2"></div>
      <div className="bubble-medium-3"></div>
      <div className="bubble-medium-4"></div>
      <div className="bubble-small-1"></div>
      <div className="bubble-small-2"></div>
      <div className="bubble-small-3"></div>
      <div className="bubble-small-4"></div>
      <div className="bubble-small-5"></div>

      <header className="glass-header">
        <div className="header-container">
          <div className="logo-container">
            <img 
              src="/koch.webp" 
              alt="Kochford" 
              className="logo-img"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/50x50/0066cc/ffffff?text=KF';
              }}
            />
            <span className="logo-text"></span>
          </div>

          <nav className="nav-menu">
            <NavLink to="/info" className={({ isActive }) => `nav-link ${isActive ? 'nav-active' : ''}`}>
              Информация
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'nav-active' : ''}`}>
              Товары
            </NavLink>
          </nav>
          
          <div style={{ width: '120px', visibility: 'hidden' }}></div>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/about" element={<About />} />
          <Route path="/info" element={<Info />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>

      <footer className="glass-footer">
        <div className="footer-container">
          <p className="footer-copyright">© 2026 Kochford. Все права защищены.</p>
          <p className="footer-phone">📞 +7 (999) 999-99-99</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;