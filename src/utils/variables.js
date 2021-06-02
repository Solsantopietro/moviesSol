//apy key
export const APIKEY = '2818dbb3f2d93463121e46fed8a11a9b';

//peliculas
export const URL_PELICULAS_TENDENCIA = 'https://api.themoviedb.org/3/movie/popular?'
export const URL_PELICULAS_MEJORES_CRITICAS = 'https://api.themoviedb.org/3/movie/top_rated?'
export const URL_PELICULAS_ESTRENO = 'https://api.themoviedb.org/3/movie/upcoming?'
export const URL_PELICULAS_CINES = 'https://api.themoviedb.org/3/movie/now_playing?'

//series
export const URL_SERIES_TENDENCIA = 'https://api.themoviedb.org/3/tv/popular?'
export const URL_SERIES_AIRE = 'https://api.themoviedb.org/3/tv/on_the_air?'
export const URL_SERIES_MEJORES_CRITICAS = 'https://api.themoviedb.org/3/tv/top_rated?'

//letras

export const convertirAMayusculas = string => {
    return string.toUpperCase()
}

//image

export const BackdropPath= 'https://image.tmdb.org/t/p/original${detalle.backdrop_path}'