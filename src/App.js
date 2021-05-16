import './App.scss';
import Home from './components/Home';
import Peliculas from './components/Peliculas';
import Tv from './components/Tv';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';



const App = () => {
  
  return (
    <div className="App">
      <>
      <BrowserRouter>
      <nav className="navegation">
        <p><Link exact to="/">Home</Link></p>
        <p><Link to="/peliculas">peliculas</Link></p>
        <p><Link to="/tv">tv</Link></p>
        <input type="text" placeholder="Búsqueda..."/>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/peliculas" component={Peliculas} />
        <Route exact path="/tv" component={Tv} />
      </Switch>
      </BrowserRouter>
      
      </>

      
    </div>
  );
}

export default App;
