import './App.scss';
import Home from './components/Home';
import Peliculas from './components/Peliculas';
import Series from './components/Series';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';



const App = () => {
  
  return (
    <div className="App">
      <>
      <BrowserRouter>
      <nav className="navegation">
        <p><Link exact to="/">Home</Link></p>
        <p><Link to="/peliculas">peliculas</Link></p>
        <p><Link to="/series">series</Link></p>
        <input type="text" placeholder="Búsqueda..."/>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/peliculas" component={Peliculas} />
        <Route exact path="/series" component={Series} />
      </Switch>
      </BrowserRouter>
      
      </>

      
    </div>
  );
}

export default App;
