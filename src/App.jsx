import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // Asegúrate de que la ruta sea correcta
import { Rutas } from './Components/Rutas';
import Registro from './Components/Registro';

function App() {
  return (
    <Provider store={store}> 
      <Router>
        <Rutas />
      </Router>
    </Provider>
  );
}

export default App;

