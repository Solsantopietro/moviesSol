import './App.scss';
import Home from './components/Home';
import Peliculas from './views/Peliculas';
import Series from './views/Series';
import Detalle from './views/Detalle';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

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
  background-color: #1e1f38 ;
  a {
    padding: 10px;
  }
  
`

const Icon = styled.div`
    color: ${({ theme }) => theme.colors.primary};
    width: 30px;
    margin: 10px;
  &:active{
    color: ${({ theme }) => theme.colors.secondary};

  }
`

const InputText = styled.input`
  background-color: transparent;
  border: none;
  font-size: 20px;
  margin-left: 20px;
`



const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <ContenedorApp className="App">
          <div className="App">
            <>
              <BrowserRouter>
                <NavBar className="navegation">
                    <Icon>
                    <Link exact to="/">
                      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="sc-gqjmRU kPuMOL sc-VigVT btmZHd"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    </Link>
                  </Icon>
                  <Icon>
                    <Link to="/peliculas">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="sc-gqjmRU kPuMOL sc-jTzLTM eAmRoN"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect width="15" height="14" x="1" y="5" rx="2" ry="2"></rect></svg>
                  </Link>
                  </Icon>
                  <Icon>
                    <Link to="/series"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="sc-gqjmRU kPuMOL sc-fjdhpX clRTYt"><rect width="20" height="15" x="2" y="7" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg></Link>
                  </Icon>
                  
                  <InputText type="text" placeholder="Búsqueda..." /> 
                  <Icon>
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="sc-gqjmRU kPuMOL sc-chPdSV grDgjU"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line></svg>
                  </Icon>
                </NavBar>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/peliculas" component={Peliculas} />
                  <Route exact path="/series" component={Series} />
                  <Route exact path="/detalle/:id/:type" component={Detalle} />

                </Switch>
              </BrowserRouter>
            </>
          </div>
      </ContenedorApp>
    </ThemeProvider>
  );
}

export default App;
