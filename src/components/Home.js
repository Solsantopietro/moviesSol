import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch'
import { URL_PELICULAS_TENDENCIA, URL_SERIES_TENDENCIA, APIKEY } from '../utils/variables'
import { cortarArray } from '../utils/helpers'
import CardMedia from '../views/CardMedia';
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

const Home = () => {

  const peliculas = useFetch (`${URL_PELICULAS_TENDENCIA}api_key=${APIKEY}`)
  const series = useFetch (`${URL_SERIES_TENDENCIA}api_key=${APIKEY}`)
  const filtradoDePeliculas = cortarArray(peliculas)
  const filtradoDeSeries = cortarArray(series)

  return (
    <div className="Home">
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </div>
  )
}

export default Home;