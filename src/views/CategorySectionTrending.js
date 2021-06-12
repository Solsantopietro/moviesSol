import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { APIKEY } from '../utils/variables'
import CardMedia from '../components/CardMedia'
import { SectionMedia, Title, Cards } from '../utils/Commons'
import styled from 'styled-components'
import Paginado from '../components/Paginado'

const SectionCategory = styled.section`
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 1400px;
  margin-left: 200px;
  .arrows{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1600px) {
    margin-left: 50px;
  }
  @media (max-width: 1200px) {
    margin-left: 0;
  }
`

const CardsCategory = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const CategorySection = () => {

  const params = useParams()
  const [category, setCategory] = useState([])
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${params.media_type}/${params.category}?api_key=${APIKEY}&page=${params.page}`)
      .then(res => res.json())
      .then(data => {
        setCategory(data.results)
        setTotalPages(data.total_pages)
      })
  }, [params.page])
  const filterCategory = (category)

  const titulo = () => {
    if (params.category === "popular") {
      return ' populares'
    } else if (params.category === "top_rated") {
      return ' con mejores criticas'
    } else if (params.category === "upcoming") {
      return ' a estrenarse'
    } else if (params.category === "now_playing") {
      return ' en cines'
    } else {
      return ' al aire'
    }
  }



  return (
    <SectionCategory>

      {params.media_type === 'tv' ?

        <Title>Series {titulo()}</Title>
        : <Title>Peliculas{titulo()}</Title>
      }
      <CardsCategory>
        {filterCategory.map(media =>{
          return <CardMedia
            key={media.id}
            id={media.id}
            type={params.media_type}
            image={media.poster_path}
            title={media.title}
            name={media.name}
          />}
        )}
      </CardsCategory>
      <div className="arrows">
        <Paginado totalPages={totalPages} />
      </div>


    </SectionCategory>
  )
}

export default CategorySection