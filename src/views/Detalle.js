import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { APIKEY } from '../utils/variables'
import styled from 'styled-components'
import Info from '../components/Info'
import Cast from '../components/Cast'
import Video from '../components/Video'
import Similar from '../components/Similar'

const SectionDetail = styled.section`
/* div{
    width: auto;
    height: 600px;
position: absolute;
} */
`

const Backdrop = styled.div`
    width: auto;
    height: 600px;
    /* background: linear-gradient(90deg, rgb(0, 0, 0) 0px, transparent 50%, transparent); */

    background-image: linear-gradient(90deg, rgb(0, 0, 0) 0px, transparent 50%, transparent), url("https://image.tmdb.org/t/p/original${props => props.img}");
    background-size: cover;
    background-position: center center; 

`;


const Detalle = () => {

const [detalle, setDetalle] = useState({})
const [click, setClick] = useState(0)

const params = useParams()

const handleClick = () => {
    setClick = setClick + 1;
    if(click !== 0) {

    }
}

useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${params.type}/${params.id}?api_key=${APIKEY}&language=es-ES`)
    .then(res => res.json())
    .then(data => setDetalle(data))
    console.log(params)
}, [])

console.log(detalle)

return(
    <SectionDetail>
        <div>

        <Backdrop img={detalle.backdrop_path}/>
        </div>
        
    <div> 
      <a href={`/${params.type}/${params.id}/info`}>INFO</a>
      <a href={`/${params.type}/${params.id}/cast`}>REPARTO</a>
      <a href={`/${params.type}/${params.id}/videos`}>VIDEOS</a>
      <a href={`/${params.type}/${params.id}/similar`}>SIMILARES</a>
    </div>

    <Info 
        imgUrl={detalle.poster_path}
        title={detalle.title}
        overview={detalle.overview}
        runtime={detalle.runtime || detalle.episode_run_time}
        budget={detalle.budget}
        revenue={detalle.revenue}
        onclick={handleClick}
    />
    <Cast onclick={handleClick}/>
    <Video onclick={handleClick}/>
    <Similar onclick={handleClick} />


    

    
    </SectionDetail>
    

    )

}

export default Detalle
