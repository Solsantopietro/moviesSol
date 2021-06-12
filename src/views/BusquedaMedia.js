import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import CardMedia from "../components/CardMedia"
import { APIKEY } from '../utils/variables'
import styled, { ThemeProvider } from 'styled-components'
import { CardsResults, SectionResults } from '../utils/Commons'


// const SectionResults = styled.section`
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `

const BusquedaMedia = () => {
    const [search, setSearch] = useState([])
    const params = useParams()
    const history = useHistory()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=${APIKEY}&query=${params.search}&page=${params.page}`)
            .then(res => res.json())
            .then(data => {
                setSearch(data.results)

                if (data.results.length === 0) {
                    history.push(`/not-found`)
                }
            })


    }, [])
    const filterMedia = (search)

    return (
        <SectionResults>
            <CardsResults>

                {filterMedia.map(media =>
                    <CardMedia
                        key={media.id}
                        type={media.media_type}
                        catalogue='trending'
                        image={media.poster_path}
                        title={media.title}
                        id={media.id}
                    />
                )}
            </CardsResults>
        </SectionResults>


    )
}

export default BusquedaMedia