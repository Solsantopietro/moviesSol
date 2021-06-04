import useFetch from '../hooks/useFetch'
import { URL_PELICULAS_TENDENCIA, URL_SERIES_TENDENCIA, APIKEY } from '../utils/variables'
import { cortarArray } from '../utils/helpers'
import CardMedia from '../views/CardMedia';
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { Flex, Title, Icon } from '../utils/Commons'
import { Link } from 'react-router-dom'


const SectionMedia = styled.section`
`



const Home = () => {

  const peliculas = useFetch(`${URL_PELICULAS_TENDENCIA}api_key=${APIKEY}`)
  const series = useFetch(`${URL_SERIES_TENDENCIA}api_key=${APIKEY}`)
  const filtradoDePeliculas = cortarArray(peliculas)
  const filtradoDeSeries = cortarArray(series)

  return (
    <div className="Home">
      <ThemeProvider theme={theme}>
        <SectionMedia className="sectionMovie">
          <Link to={`/${type}/${catalogue}`}><Title>Películas que son tendencia
          <Icon xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </Icon>
            </Title></Link>
          <Flex>
          {filtradoDePeliculas.map(pelicula =>
              <CardMedia
                key={pelicula.id}
                type='movie'
                id={pelicula.id}
                image={pelicula.poster_path}
                title={pelicula.title}
              />
            )}
          </Flex>
        </SectionMedia>
        <SectionMedia className="sectionTv">
        <Link to={`/${type}/${catalogue}`}><Title>Series que son tendencia
            <Icon xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </Icon>
            </Title></Link>
          <Flex>
            {filtradoDeSeries.map(serie =>
              <CardMedia
                key={serie.id}
                type='tv'
                id={serie.id}
                image={serie.poster_path}
                title={serie.name}
              />
            )}
          </Flex>
        </SectionMedia>
      </ThemeProvider>
    </div>
  )
}

export default Home;