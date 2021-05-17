import CardMedia from './CardMedia'
import useFetch from '../hooks/useFetch'
import { URL_PELICULAS_TENDENCIA, URL_PELICULAS_MEJORES_CRITICAS, URL_PELICULAS_ESTRENO, URL_PELICULAS_CINES, APIKEY } from '../utils/variables'
import { cortarArray } from '../utils/helpers'
    

const Peliculas = () => {

  // const [peliculasTendencia, setPeliculasTendencia] = useState([])
  // const [peliculasCriticas, setPeliculasCriticas] = useState([])
  // const [peliculasEstreno, setPeliculasEstreno] = useState([])
  // const [peliculasCines, setPeliculasCines] = useState([])
  // const [filtradoDePeliculas, setFiltradoDePeliculas] = useState([])

    // useEffect(() => {
    //     fetch(`${URL_PELICULAS_TENDENCIA}api_key=${APIKEY}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setPeliculasTendencia(data.results)

    //   })
    // fetch(`${URL_PELICULAS_MEJORES_CRITICAS}api_key=${APIKEY}&page=1`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setPeliculasCriticas(data.results)

    //   })
    //   fetch(`${URL_PELICULAS_ESTRENO}api_key=${APIKEY}&page=1`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setPeliculasEstreno(data.results)

    //   })
    //   fetch(`${URL_PELICULAS_CINES}api_key=${APIKEY}&page=1`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setPeliculasCines(data.results)

    //   })
    // })

  const peliculasTendencia = useFetch (`${URL_PELICULAS_TENDENCIA}api_key=${APIKEY}`)
  const peliculasCriticas = useFetch (`${URL_PELICULAS_MEJORES_CRITICAS}api_key=${APIKEY}`)
  const peliculasEstreno = useFetch (`${URL_PELICULAS_ESTRENO}api_key=${APIKEY}`)
  const peliculasCines = useFetch (`${URL_PELICULAS_CINES}api_key=${APIKEY}`)


  const filtradoDePeliculasTendencia = cortarArray(peliculasTendencia)
  const filtradoDePeliculasCriticas = cortarArray(peliculasCriticas)
  const filtradoDePeliculasEstreno = cortarArray(peliculasEstreno)
  const filtradoDePeliculasCines = cortarArray(peliculasCines)


    
    return (
        <section className="Peliculas">
          <div className="PeliculasPopulares">
            <h2>Peliculas populares</h2>
            {filtradoDePeliculasTendencia.map(pelicula =>
          <CardMedia
            key={pelicula.id}
            image={pelicula.poster_path}
            title={pelicula.title}

          />
        )}
          </div>
          <div className="PeliculasCriticas">
            <h2>Peliculas con mejores criticas</h2>
            {filtradoDePeliculasCriticas.map(pelicula =>
          <CardMedia
            key={pelicula.id}
            image={pelicula.poster_path}
            title={pelicula.title}

          />
        )}
          </div>
          <div className="PeliculasEstreno">
            <h2>Peliculas a estrenarse</h2>
            {filtradoDePeliculasEstreno.map(pelicula =>
          <CardMedia
            key={pelicula.id}
            image={pelicula.poster_path}
            title={pelicula.title}

          />
        )}
          </div>
          <div className="PeliculasCines">
            <h2>Peliculas en cines</h2>
            {filtradoDePeliculasCines.map(pelicula =>
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