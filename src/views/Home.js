import useFetch from '../hooks/useFetch'
import { URL_PELICULAS_TENDENCIA, URL_SERIES_TENDENCIA, APIKEY } from '../utils/variables'
import { cortarArray } from '../utils/helpers'
import CardMedia from '../components/CardMedia';
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { Flex, Title, Icon, SectionMedia, Cards, Sections } from '../utils/Commons'
import { Link } from 'react-router-dom'

const Home = () => {

  const peliculas = useFetch(`${URL_PELICULAS_TENDENCIA}api_key=${APIKEY}`)
  const series = useFetch(`${URL_SERIES_TENDENCIA}api_key=${APIKEY}`)
  const filtradoDePeliculas = cortarArray(peliculas)
  const filtradoDeSeries = cortarArray(series) 

  return (
    <Sections className="Home">
      <ThemeProvider theme={theme}>
        <SectionMedia className="sectionMovie">
          <Link to={`/movie/trending`}><Title>Películas que son tendencia
          <Icon xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </Icon></Title>
            </Link>
          <Flex>
          <Cards>
          {filtradoDePeliculas.map(pelicula =>
              <CardMedia
              className="CardMedia"
                key={pelicula.id}
                type='movie'
                catalogue='trending'
                id={pelicula.id}
                image={pelicula.poster_path}
                title={pelicula.title}
              />
            )}
            </Cards>
          </Flex>
        </SectionMedia>
        <SectionMedia className="sectionTv">
        <Link to={`/tv/trending`}><Title>Series que son tendencia
            <Icon xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </Icon>
            </Title></Link>
          <Flex>
          <Cards>

            {filtradoDeSeries.map(serie =>
              <CardMedia
                key={serie.id}
                type='tv'
                catalogue='trending'
                id={serie.id}
                image={serie.poster_path}
                title={serie.name}
              />
            )}
          </Cards>

          </Flex>
        </SectionMedia>
      </ThemeProvider>
    </Sections>
  )
}

export default Home;