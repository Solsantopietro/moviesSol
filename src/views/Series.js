import useFetch from '../hooks/useFetch'
import { URL_SERIES_TENDENCIA, URL_SERIES_MEJORES_CRITICAS, URL_SERIES_AIRE, APIKEY } from '../utils/variables'
import { cortarArray } from '../utils/helpers'
import { Flex, Title, Icon, SectionMedia, Cards, Sections } from '../utils/Commons'
import { Link } from 'react-router-dom'
import CardMedia from '../components/CardMedia'


const Series = () => {

  const seriesTendencia = useFetch(`${URL_SERIES_TENDENCIA}api_key=${APIKEY}&language=es-ES`)
  const seriesCriticas = useFetch(`${URL_SERIES_MEJORES_CRITICAS}api_key=${APIKEY}&language=es-ES`)
  const seriesAire = useFetch(`${URL_SERIES_AIRE}api_key=${APIKEY}&language=es-ES`)


  const filtradoDeSeriesTendencia = cortarArray(seriesTendencia)
  const filtradoDeSeriesCriticas = cortarArray(seriesCriticas)
  const filtradoDeSeriesEstreno = cortarArray(seriesAire)
  return (
    <Sections className="Series">
      <SectionMedia className="SeriesPopulares">
        <Link to={`/tv/popular/page/1`}><Title>Series populares
          <Icon xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </Icon>
        </Title></Link>
        <Flex>
          <Cards>
           {filtradoDeSeriesTendencia.map(serie =>
            <CardMedia
              key={serie.id}
              id={serie.id}
              type='tv'
              image={serie.poster_path}
              name={serie.name}
            />
          )} 
          </Cards>
          
        </Flex>
      </SectionMedia>
      <SectionMedia className="SeriesCriticas">
        <Link to={`/tv/top_rated/page/1`}><Title>Series con mejores criticas
          <Icon xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </Icon>
        </Title></Link>
        <Flex>
          <Cards>
{filtradoDeSeriesCriticas.map(serie =>
            <CardMedia
              key={serie.id}
              id={serie.id}
              type='tv'
              image={serie.poster_path}
              name={serie.name}
            />
          )}
          </Cards>
          
        </Flex>
      </SectionMedia>
      <SectionMedia className="SeriesEstreno">
        <Link to={`/tv/on_the_air/page/1`}><Title>Series al aire
          <Icon xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </Icon>
        </Title></Link>
        <Flex>
          <Cards>
          {filtradoDeSeriesEstreno.map(serie =>
            <CardMedia
              key={serie.id}
              id={serie.id}
              type='tv'
              image={serie.poster_path}
              name={serie.name}
            />
          )}
          </Cards>
        </Flex>
      </SectionMedia>
    </Sections>
  )
}

export default Series;