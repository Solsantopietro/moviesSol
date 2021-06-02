import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { APIKEY, BackdropPath } from '../utils/variables'
import styled, { ThemeProvider } from 'styled-components'
import { Flex, Title  } from '../utils/Commons'


const Backdrop = styled.div`
    width: auto;
    height: 600px;
      background-image: 'url("https://image.tmdb.org/t/p/original/${props => props.img}")';
      background-size: cover;
      background-position: center center; 
    
`;

const ImgPoster = styled.img`
    width: 200px;
    height: 310px;
    margin: 10px;
`


const Detalle = () => {

const [detalle, setDetalle] = useState({})
const params = useParams()

useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${params.type}/${params.id}?api_key=${APIKEY}&language=en-US`)
    .then(res => res.json())
    .then(data => setDetalle(data))
    console.log(params)
}, [])

console.log(detalle)

return(
    <div>
        <Backdrop img={detalle.backdrop_path}/>
            {/* <img src={`https://image.tmdb.org/t/p/original${detalle.backdrop_path}`}/> */}
        

    <div class="sc-cIShpX itSEAA"> 
      <a aria-current="page" class="sc-csuQGl hNWQWg active" href="/movie/337404/info">INFO</a>
      <a class="sc-csuQGl hNWQWg" href={`/${params.type}/${params.id}/cast`}>REPARTO</a>
      <a class="sc-csuQGl hNWQWg" href={`/${params.type}/${params.id}/videos`}>VIDEOS</a>
      <a class="sc-csuQGl hNWQWg" href={`/${params.type}/${params.id}/similar`}>SIMILARES</a>
    </div>
    <ImgPoster src={`https://image.tmdb.org/t/p/original${detalle.poster_path}`}/>
    <Title>{detalle.title}</Title>
    <div>
    <p>{detalle.overview}</p>

    </div>
    </div>
    

    )

}

export default Detalle
