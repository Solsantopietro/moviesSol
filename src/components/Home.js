import { useState, useEffect } from 'react';
import CardMedia from '../views/CardMedia';

import { URL_PELICULAS_TENDENCIA, URL_SERIES_TENDENCIA, APIKEY, cortarArray } from '../utils/variables'
import useFetch from '../hooks/useFetch'

const Home = () => {

  // const [peliculas, setPeliculas] = useState([])
  // const [series, setSeries] = useState([])


  // useEffect(() => {

  //   fetch(`${URL_PELICULAS_TENDENCIA}api_key=${APIKEY}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setPeliculas(data.results)

  //     })
  //   fetch(`${URL_SERIES_TENDENCIA}api_key=${APIKEY}&page=1`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setSeries(data.results)

  //     })

  // }, []);

  const peliculas = useFetch (`${URL_PELICULAS_TENDENCIA}api_key=${APIKEY}`)
  const series = useFetch (`${URL_SERIES_TENDENCIA}api_key=${APIKEY}`)

  console.log(peliculas)
  const filtradoDePeliculas = peliculas.slice(0, 5)
  const filtradoDeSeries = series.slice(0, 5)



  return (
    <div className="Home">
      <h2>Home</h2>
      <section className="sectionMovie">
        <h1>Películas que son tendencia</h1>
        {filtradoDePeliculas.map(pelicula =>
          <CardMedia
            key={pelicula.id}
            image={pelicula.poster_path}
            title={pelicula.title}

          />
        )}
      </section>
      <section className="sectionTv">
        <h1>Series que son tendencia</h1>
        {filtradoDeSeries.map(serie =>
          <CardMedia
            key={serie.id}
            image={serie.poster_path}
            title={serie.name}
          />
        )}
      </section>
    </div>
  )
}

export default Home;