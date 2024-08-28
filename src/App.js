import { Link } from 'react-router-dom';
import MODULE_ROUTES from './routes';

import './app.css';

function App() {
  return (
    <div className="app">
      <h1 className="header"> List of Projects </h1>
      <div className="menu">
        <Link to={MODULE_ROUTES.accordion}>Accordion</Link>
        <Link to={MODULE_ROUTES.randomColor}>Random Color</Link>
        <Link to={MODULE_ROUTES.starRating}>Star Rating</Link>
        <Link to={MODULE_ROUTES.imageSlider}>Image Slider</Link>
        <Link to={MODULE_ROUTES.productsLoader}>Products Loader</Link>
        <Link to={MODULE_ROUTES.nestedMenu}>Nested Menu</Link>
        <Link to={MODULE_ROUTES.qrCode}>QR Generator</Link>
      </div>
    </div>
  );
}

export default App;
