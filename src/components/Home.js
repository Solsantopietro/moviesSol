
import { useState, useEffect } from 'react';
import CardMovies from './CardMovies';
import CardTv from './CardTv';

const APIKEY = "2818dbb3f2d93463121e46fed8a11a9b";

const URL_PELICULAS_TENDENCIA = 'https://api.themoviedb.org/3/movie/now_playing?'
const URL_SERIES_TENDENCIA = 'https://api.themoviedb.org/3/trending/tv/week?'


const Home = () => {

  const [peliculas, setPeliculas] = useState([])
  const [series, setSeries] = useState([])


  useEffect(() => {

    fetch(`${URL_PELICULAS_TENDENCIA}api_key=${APIKEY}`)
      .then(res => res.json())
      .then(data => {
        setPeliculas(data.results)

      })
    fetch(`${URL_SERIES_TENDENCIA}api_key=${APIKEY}&page=1`)
      .then(res => res.json())
      .then(data => {
        setSeries(data.results)

      })

  }, []);

  console.log(peliculas)
  const filtradoDePeliculas = peliculas.slice(0, 5)
  const filtradoDeSeries = series.slice(0, 5)



  return (
    <div className="Home">
      <h2>Home</h2>
      <section className="sectionTv">
        <h1>Películas que son tendencia</h1>
        {filtradoDePeliculas.map(pelicula =>
          <CardMovies
            key={pelicula.id}
            image={pelicula.poster_path}
            title={pelicula.title}

          />
        )}
      </section>
      <section className="sectionTv">
        <h1>Series que son tendencia</h1>
        {filtradoDeSeries.map(serie =>
          <CardTv
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