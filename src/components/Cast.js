import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cortarArray } from '../utils/helpers'
import { APIKEY } from '../utils/variables'
import { Flex, Title, Icon, Backdrop} from '../utils/Commons'


import styled, { ThemeProvider } from 'styled-components'


const SectionCast = styled.section`
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
`

const ImageProfile = styled.img`
    width: 230px;
    height: 350px;
    &:hover {
    transform: scale(1.05);
    transition: bottom 0.3s;
  }
`

const Reparto = () => {
    const params = useParams()
    const [reparto, setReparto] = useState([])
 


useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${params.type}/${params.id}/credits?api_key=${APIKEY}&language=es-ES`)
    .then(res => res.json())
    .then(data => setReparto(data.cast))
    console.log(params)
}, [])



    return(
        <SectionCast>
           <Backdrop/>
            <article>
                {/* <ImageProfile src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${persona.profile_path}`} /> */}
                <Title  font-size="">aaaaaaaaaaa</Title>
            </article>
            
        </SectionCast>
    )
}

export default Reparto