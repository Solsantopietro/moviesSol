import useFetch from '../hooks/useFetch'
import { URL_SERIES_TENDENCIA, URL_SERIES_MEJORES_CRITICAS, URL_SERIES_AIRE, APIKEY } from '../utils/variables'
import { cortarArray } from '../utils/helpers'
import { Flex, Title, Icon } from '../utils/Commons'
import { Link } from 'react-router-dom'
import CardMedia from './CardMedia'


const Series = () => {

  const seriesTendencia = useFetch(`${URL_SERIES_TENDENCIA}api_key=${APIKEY}`)
  const seriesCriticas = useFetch(`${URL_SERIES_MEJORES_CRITICAS}api_key=${APIKEY}`)
  const seriesAire = useFetch(`${URL_SERIES_AIRE}api_key=${APIKEY}`)


  const filtradoDeSeriesTendencia = cortarArray(seriesTendencia)
  const filtradoDeSeriesCriticas = cortarArray(seriesCriticas)
  const filtradoDeSeriesEstreno = cortarArray(seriesAire)
  return (
    <section className="Series">
      <div className="SeriesPopulares">
        <Link><Title>Series populares
          <Icon xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </Icon>
        </Title></Link>
        <Flex>
          {filtradoDeSeriesTendencia.map(serie =>
            <CardMedia
              key={serie.id}
              id={serie.id}
              type='tv'
              image={serie.poster_path}
              name={serie.name}
            />
          )}
        </Flex>
      </div>
      <div className="SeriesCriticas">
        <Link><Title>Series con mejores criticas
          <Icon xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </Icon>
        </Title></Link>
        <Flex>
          {filtradoDeSeriesCriticas.map(serie =>
            <CardMedia
              key={serie.id}
              id={serie.id}
              type='tv'
              image={serie.poster_path}
              name={serie.name}
            />
          )}
        </Flex>
      </div>
      <div className="SeriesEstreno">
        <Link><Title>Series a estrenarse
          <Icon xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </Icon>
        </Title></Link>
        <Flex>
          {filtradoDeSeriesEstreno.map(serie =>
            <CardMedia
              key={serie.id}
              id={serie.id}
              type='tv'
              image={serie.poster_path}
              name={serie.name}
            />
          )}
        </Flex>
      </div>
    </section>
  )
}

export default Series;