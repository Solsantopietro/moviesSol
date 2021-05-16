import { useEffect } from "react"

const URL_PELICULAS_TENDENCIA = 'https://api.themoviedb.org/3/movie/popular?'
const URL_PELICULAS_MEJORES_CRITICAS = 'https://api.themoviedb.org/3/top_rated/tv/week?'
const URL_PELICULAS_ESTRENO = 'https://api.themoviedb.org/3/up_coming/tv/week?'
const URL_PELICULAS_CINES = 'https://api.themoviedb.org/3/movie/now_playing?'

const URL_BASE = "https://api.themoviedb.org/3/movie/"

const Peliculas = () => {
    useEffect(() => {
        fetch(`${URL_PELICULAS_TENDENCIA}api_key=${APIKEY}`)
      .then(res => res.json())
      .then(data => {
        setPeliculas(data.results)

      })
    fetch(`${URL_PELICULAS_MEJORES_CRITICAS}api_key=${APIKEY}&page=1`)
      .then(res => res.json())
      .then(data => {
        setSeries(data.results)

      })
      fetch(`${URL_PELICULAS_ESTRENO}api_key=${APIKEY}&page=1`)
      .then(res => res.json())
      .then(data => {
        setSeries(data.results)

      })
      fetch(`${URL_PELICULAS_CINES}api_key=${APIKEY}&page=1`)
      .then(res => res.json())
      .then(data => {
        setSeries(data.results)

      })
    })
    
    return (
        <div className="Peliculas">
            <h2>Peliculas populares</h2>
            {filtradoDePeliculas.map(pelicula =>
          <CardMovies
            key={pelicula.id}
            image={pelicula.poster_path}
            title={pelicula.title}

          />
        )}

        </div>
    )
}

export default Peliculas;