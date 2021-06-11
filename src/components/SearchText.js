import { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import BusquedaMedia from '../views/BusquedaMedia'

const SearchBar = styled.div`
width: 100px;
display: flex;
margin-left: 10px;

 input {
  background-color: transparent;
  border: none;
  font-size: 20px;
  padding-left: 40px;
  color: ${({ theme }) => theme.colors.text};

 }
 svg {
   position: absolute;
   top: 10px;
   margin-left: 8px;
   z-index: 100;
 }
`

const SearchText = () => {

  const [search, setSearch] = useState([])
  const [valorInput, setValorInput] = useState ("")
  const [filterMedia, setFilterMedia] = useState (search)
  
 
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=2818dbb3f2d93463121e46fed8a11a9b`)
      .then(res => res.json())
      .then(data => setSearch(data.results))
  }, [])
  
  console.log(search)

 const handleChange = (e) => {
    setValorInput(e.target.value)
    console.log(e.target.value)
    
    handleSearch(e)
    
  }

  const handleSearch = (e) => {
    setFilterMedia(
      [...search].filter((media) => {
        return media.title.toLowerCase().includes(e.target.value) || media.name.toLowerCase().includes(e.target.value)
      }) )
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setFilterMedia(valorInput)
  }


  return(
    <div>

    <SearchBar>
      <form>
        <input type="text" onChange={handleChange} placeholder="Búsqueda..." />
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="sc-gqjmRU kPuMOL sc-chPdSV grDgjU"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line></svg>
        <input onClick={handleSubmit} type="submit" />
      </form>
        
    </SearchBar>
    <div>
        {filterMedia.map((search, key) =>
          <BusquedaMedia 
          key={search.id}
          title={search.title}
          />
        )}
    </div>
  </div>
  )
    
}

export default SearchText