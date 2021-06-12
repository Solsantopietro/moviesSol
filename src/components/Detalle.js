import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import { APIKEY } from '../utils/variables'
import { Flex, Title, Icon, Backdrop } from '../utils/Commons'
import styled from 'styled-components'
import Info from './Info'
import Cast from './Cast'
import Video from './Video'
import Similar from './Similar'

const SectionResults = styled.section`
  .Info{
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .Cast {
    margin-top: 100px;
    display: flex;
    justify-content: center;
  }
  .Similar{
    margin-top: 100px;
    display: flex;
    justify-content: center;
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
  const params = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${params.type}/${params.id}?api_key=${APIKEY}&language=es-ES`)
      .then(res => res.json())
      .then(data => setDetalle(data))
  }, [params.id])


  return (
    <SectionResults>
      <div>
        <Backdrop img={detalle.backdrop_path} />
      </div>
      <StyledLink>

        {/* <a href="info">INFO</a>
        <a href="reparto">REPARTO</a>
        <a href="video">VIDEOS</a>
        <a href="similar">SIMILARES</a> */}

        {/* <Link to={`/${params.type}/${params.id}/info`}>INFO</Link>
        <Link to={`/${params.type}/${params.id}/cast`}>REPARTO</Link>
        <Link to={`/${params.type}/${params.id}/videos`}>VIDEOS</Link>
        <Link to={`/${params.type}/${params.id}/similar`}>SIMILARES</Link> */}
      </StyledLink>
      <div className="info">
        <Info
          imgUrl={detalle.poster_path}
          title={detalle.title || detalle.name}
          vote={detalle.vote_average}
          overview={detalle.overview}
          runtime={detalle.runtime || detalle.episode_run_time}
          budget={detalle.budget}
          revenue={detalle.revenue}
        />
      </div>

      <div className="Cast">
        <Cast />
      </div>
      <div className="Similar">
        <Similar />

      </div>
    </SectionResults>

  )

}

export default Detalle
