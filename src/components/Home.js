import { useState, useEffect } from 'react';
import CardMovies from './CardMovies';

const Home = () => {

const [peliculas, setPeliculas] = useState([])
const apiKey = "2818dbb3f2d93463121e46fed8a11a9b";
    
  
useEffect(() => {
      
fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => { 
        setPeliculas(data.results)
          
    })
    
}, []);
    
console.log(peliculas)


    return (
        <div className="Home">
            <h2>Home</h2>
        <section>
          <h1>Películas que son tendencia</h1>
          { peliculas.map(pelicula =>
            <CardMovies 
              key={pelicula.id}
              image={pelicula.poster_path}
              title={pelicula.title}

            />
            )}
      </section>
        </div>
    )
}

export default Home;
