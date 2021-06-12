import './App.scss';
import Home from './views/Home';
import Peliculas from './views/Peliculas';
import Series from './views/Series';
import Detalle from './components/Detalle';
import CategorySectionTrending from './views/CategorySectionTrending';
import Info from './components/Info'
import Cast from './components/Cast'
import Video from './components/Video'
import Similar from './components/Similar'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import SearchText from './components/SearchText';
import BusquedaMedia from './views/BusquedaMedia';
import NotFound from './components/NotFound';

const ContenedorApp = styled.div`
  background-color: ${({ theme }) => theme.colors.background} ;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary} ;
    &:active {
    color: ${({ theme }) => theme.colors.primary} ;
    }
  }
`

const NavBar = styled.nav`
  display: flex;
  height: 53px;
  background-color: #1e1f38 ;
  a {
    padding: 10px;
  }
  
`
const IconsNav = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
 svg {
  width: 30px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-left: 5px;
  &:active {
  color: ${({ theme }) => theme.colors.primary};
  }
 }
`




const InputText = styled.input`
  
`

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <ContenedorApp className="App">
        <div className="App">
          <>
            <BrowserRouter>
              <NavBar className="navegation">
                <IconsNav>
                  <Link activeClassName="active" exact to="/">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="sc-gqjmRU kPuMOL sc-VigVT btmZHd"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  </Link>
                  <Link activeClassName="active" to="/peliculas">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="sc-gqjmRU kPuMOL sc-jTzLTM eAmRoN"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect width="15" height="14" x="1" y="5" rx="2" ry="2"></rect></svg>
                  </Link>
                  <Link activeClassName="active" to="/series">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="sc-gqjmRU kPuMOL sc-fjdhpX clRTYt"><rect width="20" height="15" x="2" y="7" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
                  </Link>
                  <SearchText />
                </IconsNav>
              </NavBar>

              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/peliculas" component={Peliculas} />
                <Route exact path="/series" component={Series} />
                <Route exact path="/detalle/:id/:type" component={Detalle} />
                <Route exact path="/:media_type/:category/page/:page" component={CategorySectionTrending} />
                <Route exact path="/:type/:id/info" component={Info} />
                <Route exact path="/:type/:id/cast" component={Cast} />
                <Route exact path="/:type/:id/video" component={Video} />
                <Route exact path="/:type/:id/similar" component={Similar} />
                <Route exact path="/multi/search/:search/page/:page" component={BusquedaMedia} />
                <Route exact path="/not-found" component={NotFound} />

              </Switch>
            </BrowserRouter>
          </>
        </div>
      </ContenedorApp>
    </ThemeProvider>
  );
}

export default App;
