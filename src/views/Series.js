import useFetch from '../hooks/useFetch'

import { URL_SERIES_TENDENCIA, URL_SERIES_MEJORES_CRITICAS, URL_SERIES_AIRE, APIKEY } from '../utils/variables'
import { cortarArray } from '../utils/helpers'
import CardMedia from './CardMedia'
    

const Series = () => {

    const seriesTendencia = useFetch (`${URL_SERIES_TENDENCIA}api_key=${APIKEY}`)
  const seriesCriticas = useFetch (`${URL_SERIES_MEJORES_CRITICAS}api_key=${APIKEY}`)
  const seriesAire = useFetch (`${URL_SERIES_AIRE}api_key=${APIKEY}`)


  const filtradoDeSeriesTendencia = cortarArray(seriesTendencia)
  const filtradoDeSeriesCriticas = cortarArray(seriesCriticas)
  const filtradoDeSeriesEstreno = cortarArray(seriesAire)
    return (
        <section className="Series">
          <div className="SeriesPopulares">
            <h2>Series populares</h2>
            {filtradoDeSeriesTendencia.map(serie =>
          <CardMedia
            key={serie.id}
            image={serie.poster_path}
            name={serie.name}

            />
            )}
            </div>
            <div className="SeriesCriticas">
                <h2>Series con mejores criticas</h2>
                {filtradoDeSeriesCriticas.map(serie =>
            <CardMedia
                key={serie.id}
                image={serie.poster_path}
                name={serie.name}

            />
            )}
            </div>
            <div className="SeriesEstreno">
                <h2>Series a estrenarse</h2>
                {filtradoDeSeriesEstreno.map(serie =>
            <CardMedia
                key={serie.id}
                image={serie.poster_path}
                name={serie.name}

            />
            )}
          </div>
        </section>
    )
}

export default Series;