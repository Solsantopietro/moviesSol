import Home from '../components/Home';
import PeliculasSection from '../components/PeliculasSection';
import Tv from './Tv';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';



const Nav = () => {
  
  return (
    <div className="Nav">
      <>
      <BrowserRouter>
      <nav className="navegation">
        <p><Link exact to="/">Home</Link></p>
        <p><Link to="/peliculas">Peliculas</Link></p>
        <p><Link to="/tv">tv</Link></p>
        <input type="text" placeholder="Búsqueda..."/>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/peliculas" component={PeliculasSection} />
        <Route exact path="/tv" component={Tv} />
      </Switch>
      </BrowserRouter>
      
      </>

      
    </div>
  );
}

export default Nav;