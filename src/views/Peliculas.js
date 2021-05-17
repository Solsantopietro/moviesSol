import { useState, useEffect } from "react"
import { URL_PELICULAS_TENDENCIA, URL_PELICULAS_MEJORES_CRITICAS, URL_PELICULAS_ESTRENO, URL_PELICULAS_CINES, APIKEY } from '../utils/variables'
import CardMedia from './CardMedia'
    

const Peliculas = () => {

  const [peliculasTendencia, setPeliculasTendencia] = useState([])
  const [peliculasCriticas, setPeliculasCriticas] = useState([])
  const [peliculasEstreno, setPeliculasEstreno] = useState([])
  const [peliculasCines, setPeliculasCines] = useState([])
  const [filtradoDePeliculas, setFiltradoDePeliculas] = useState([])




    useEffect(() => {
        fetch(`${URL_PELICULAS_TENDENCIA}api_key=${APIKEY}`)
      .then(res => res.json())
      .then(data => {
        setPeliculasTendencia(data.results)

      })
    fetch(`${URL_PELICULAS_MEJORES_CRITICAS}api_key=${APIKEY}&page=1`)
      .then(res => res.json())
      .then(data => {
        setPeliculasCriticas(data.results)

      })
      fetch(`${URL_PELICULAS_ESTRENO}api_key=${APIKEY}&page=1`)
      .then(res => res.json())
      .then(data => {
        setPeliculasEstreno(data.results)

      })
      fetch(`${URL_PELICULAS_CINES}api_key=${APIKEY}&page=1`)
      .then(res => res.json())
      .then(data => {
        setPeliculasCines(data.results)

      })
    })
    
    return (
        <section className="Peliculas">
          <div className="PeliculasPopulares">
            <h2>Peliculas populares</h2>
            {filtradoDePeliculas.map(pelicula =>
          <CardMedia
            key={pelicula.id}
            image={pelicula.poster_path}
            title={pelicula.title}

          />
        )}
          </div>
         

        </section>
    )
}

export default Peliculas;