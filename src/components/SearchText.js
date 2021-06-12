import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import BusquedaMedia from '../views/BusquedaMedia'
import { APIKEY } from '../utils/variables'

import CardMedia from './CardMedia'

const SearchBar = styled.div`
width: 100px;
display: flex;
margin-left: 10px;
margin-top: 10px;

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

const Button = styled.button`
  display: none;
`

const SearchText = () => {

  const [valorInput, setValorInput] = useState("")
  const history = useHistory()
  const params = useParams()


  const handleChange = (e) => {
    setValorInput(e.target.value)

  }


  const handlerSubmit = (e) => {
    handleChange(e)
    history.push(`/multi/search/${valorInput}/page/1`)
  }

  return (
    <div>

      <SearchBar>
        <form>
          <input type="text" onChange={handleChange} placeholder="Búsqueda..." />
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="sc-gqjmRU kPuMOL sc-chPdSV grDgjU"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line></svg>
          <Button onClick={handlerSubmit}></Button>
        </form>

      </SearchBar>

    </div>
  )

}

export default SearchText