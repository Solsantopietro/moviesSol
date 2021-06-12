import CardMedia from '../components/CardMedia'
import useFetch from '../hooks/useFetch'
import { URL_PELICULAS_TENDENCIA, URL_PELICULAS_MEJORES_CRITICAS, URL_PELICULAS_ESTRENO, URL_PELICULAS_CINES, APIKEY } from '../utils/variables'
import { cortarArray } from '../utils/helpers'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { Flex, Title, Icon, SectionMedia, Cards, Sections } from '../utils/Commons'
import { Link } from 'react-router-dom'



const Peliculas = () => {

  const peliculasTendencia = useFetch(`${URL_PELICULAS_TENDENCIA}api_key=${APIKEY}&language=es-ES`)
  const peliculasCriticas = useFetch(`${URL_PELICULAS_MEJORES_CRITICAS}api_key=${APIKEY}&language=es-ES`)
  const peliculasEstreno = useFetch(`${URL_PELICULAS_ESTRENO}api_key=${APIKEY}&language=es-ES`)
  const peliculasCines = useFetch(`${URL_PELICULAS_CINES}api_key=${APIKEY}&language=es-ES`)


  const filtradoDePeliculasTendencia = cortarArray(peliculasTendencia)
  const filtradoDePeliculasCriticas = cortarArray(peliculasCriticas)
  const filtradoDePeliculasEstreno = cortarArray(peliculasEstreno)
  const filtradoDePeliculasCines = cortarArray(peliculasCines)



  return (
    <ThemeProvider theme={theme}>

      <Sections className="Peliculas">
        <SectionMedia className="PeliculasPopulares">
          <Link to={`/movie/popular/page/1`}><Title>Peliculas populares
          <Icon xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </Icon>
          </Title></Link>
          <Flex>
            <Cards>
              {filtradoDePeliculasTendencia.map(pelicula =>
              <CardMedia
                key={pelicula.id}
                id={pelicula.id}
                type='movie'
                image={pelicula.poster_path}
                title={pelicula.title}

              />
            )}
            </Cards>
            
          </Flex>

        </SectionMedia>
        <SectionMedia className="PeliculasCriticas">
          <Link to={`/movie/top_rated/page/1`}><Title>Peliculas con mejores criticas
          <Icon xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </Icon>
          </Title></Link>
          <Flex>
            <Cards>
            {filtradoDePeliculasCriticas.map(pelicula =>
              <CardMedia
                key={pelicula.id}
                id={pelicula.id}
                type='movie'
                image={pelicula.poster_path}
                title={pelicula.title}

              />
            )}
            </Cards>
          </Flex>

        </SectionMedia>
        <SectionMedia className="PeliculasEstreno">
          <Link to={`/movie/upcoming/page/1`}><Title>Peliculas a estrenarse
          <Icon xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </Icon>
          </Title></Link>
          <Flex>
          <Cards>
            {filtradoDePeliculasEstreno.map(pelicula =>
              <CardMedia
                key={pelicula.id}
                id={pelicula.id}
                type='movie'
                image={pelicula.poster_path}
                title={pelicula.title}

              />
            )}
            </Cards>
          </Flex>

        </SectionMedia>
        <SectionMedia className="PeliculasCines">
          <Link to={`/movie/now_playing/page/1`}><Title>Peliculas en cines
          <Icon xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </Icon>
          </Title></Link>
          <Flex>
          <Cards>
            {filtradoDePeliculasCines.map(pelicula =>
              <CardMedia
                key={pelicula.id}
                id={pelicula.id}
                type='movie'
                image={pelicula.poster_path}
                title={pelicula.title}

              />
            )}
          </Cards>
          </Flex>

        </SectionMedia>

      </Sections>
    </ThemeProvider>
  )
}

export default Peliculas;