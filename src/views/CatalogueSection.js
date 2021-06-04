import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { APIKEY } from '../utils/variables'

const CatalogueSection = () => {

    const params = useParams()
    const [catalogue, setCatalogue] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${params.type}/${params.catalogue}/Catalogue?api_key=${APIKEY}&language=es-ES`)
            .then(res => res.json())
            .then(data => setCatalogue(data.results))
        }, [])
        console.log(catalogue)

    return(
        <h1>apa</h1>
    )
}

export default CatalogueSection