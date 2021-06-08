import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cortarArray } from '../utils/helpers'
import { APIKEY } from '../utils/variables'
import { Flex, Title, Icon, Backdrop} from '../utils/Commons'

import styled, { ThemeProvider } from 'styled-components'

const Videos = () => {

    const params = useParams()
    const [video, setVideo] = useState([])
 
useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${params.type}/${params.id}/video?api_key=${APIKEY}&language=es-ES`)
    .then(res => res.json())
    .then(data => setVideo(data.cast))
    console.log(params)
}, [])

console.log()

    return(
        <section>
            <h1>SOY VIDEOS</h1>
        </section>
    )
}

export default Videos