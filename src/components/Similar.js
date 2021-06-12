import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cortarArray } from '../utils/helpers'
import { APIKEY } from '../utils/variables'
import { Flex, Title, Icon, Backdrop, SectionResults, CardsResults} from '../utils/Commons'

import styled, { ThemeProvider } from 'styled-components'
import CardMedia from './CardMedia'

const Similares = () => {

    const params = useParams()
    const [similar, setSimilar] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${params.type}/${params.id}/similar?api_key=${APIKEY}&language=es-ES`)
            .then(res => res.json())
            .then(data => setSimilar(data.results))
    }, [params.id])


    return (
        <SectionResults>
            <h1>Similares</h1>
            <CardsResults>
            {similar.map(pelicula =>
            <CardMedia 
               key={pelicula.id}
                id={pelicula.id}
                type={params.type}
                image={pelicula.poster_path}
                title={pelicula.title}/>
            )}
            </CardsResults>
        </SectionResults>
    )
}

export default Similares