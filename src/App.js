import { Link } from 'react-router-dom';
import MODULE_ROUTES from './routes';

function App() {
  return (
    <div className="App">
      <h1> List of Projects </h1>
      <Link to={MODULE_ROUTES.accordion}>Accordion</Link>
    </div>
  );
}

export default App;
