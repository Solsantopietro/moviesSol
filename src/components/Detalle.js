import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { APIKEY } from '../utils/variables'
import { Flex, Title, Icon, Backdrop} from '../utils/Commons'
import styled from 'styled-components'
import Info from './Info'
import Cast from './Cast'
import Video from './Video'
import Similar from './Similar'

const SectionDetail = styled.section`
  .Info{
    display: flex;
    justify-content: start;
    align-items: center;
  }
`
const StyledLink = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    a{
      margin: 10px;
      font-weight: 500;
      font-size: 20px;
      &:active{
        border-bottom: 3px solid;
      }
    }
`



const Detalle = () => {

const [detalle, setDetalle] = useState({})
const [click, setClick] = useState(0)

const params = useParams()

const handleClick = () => {
    // if(){}
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
      <StyledLink> 
        <Link to={`/${params.type}/${params.id}/info`}>INFO</Link>
        <Link to={`/${params.type}/${params.id}/cast`}>REPARTO</Link>
        <Link to={`/${params.type}/${params.id}/videos`}>VIDEOS</Link>
        <Link to={`/${params.type}/${params.id}/similar`}>SIMILARES</Link>
      </StyledLink>
<div className="Info">
    <Info 
        imgUrl={detalle.poster_path}
        title={detalle.title || detalle.name}
        overview={detalle.overview}
        runtime={detalle.runtime || detalle.episode_run_time}
        budget={detalle.budget}
        revenue={detalle.revenue}
        onclick={handleClick}
    />
  </div>


    

    
    </SectionDetail>
    

    )

}

export default Detalle
