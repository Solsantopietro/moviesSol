import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cortarArray } from '../utils/helpers'
import { APIKEY } from '../utils/variables'
import { Flex, Icon, Backdrop, Cards, SectionResults, CardsResults } from '../utils/Commons'


import styled, { ThemeProvider } from 'styled-components'
import CardMedia from './CardMedia'



const ImageProfile = styled.img`
    width: 230px;
    height: 350px;
    &:hover {
        transform: scale(1.05);
    transition:  0.3s;
  }
`
const Title = styled.h2`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.families.h2};
    font-weight: ${({ theme }) => theme.fonts.weight.min};
    font-size: ${({ theme }) => theme.fonts.size.h2};
    &:hover {
        color: white;
  }`


const Reparto = () => {
    const params = useParams()
    const [reparto, setReparto] = useState([])


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${params.type}/${params.id}/credits?api_key=${APIKEY}`)
            .then(res => res.json())
            .then(data => setReparto(data.cast))
    }, [])

    console.log(params.id)
    console.log(reparto)

    const filterCast = (reparto)


    return (
        <SectionResults>
            <h1>Reparto</h1>
            <CardsResults>
                {filterCast.map(persona =>
                    <CardMedia
                    image={persona.profile_path}
                    title={persona.name}
                    />
                       
                )}

            </CardsResults>
        </SectionResults>

    )
}

export default Reparto