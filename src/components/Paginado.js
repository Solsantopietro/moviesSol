import { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'


const PaginadoArrow = styled.div`
    display: flex;
    color: ${({ theme }) => theme.colors.text};
`

const Arrow = styled.svg`
  width: 50px;
  height: 50px;
  margin: 10px;
`

const Paginado = ({ totalPages }) => {
    const [pageActual, setPageActual] = useState(1)
    const history = useHistory()

    const handlerBack = () => {
        if (pageActual > 1) {
            history.push(`${pageActual - 1}`);
            setPageActual(pageActual - 1)
        }
    }
    const handlerNext = () => {
        if (pageActual < totalPages) {
            history.push(`${pageActual + 1}`);
            setPageActual(pageActual + 1)
        }
    }
    return (
        <ThemeProvider theme={theme}>
            <PaginadoArrow>
                <Arrow onClick={handlerBack} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </Arrow>
                <h2>{pageActual}</h2>
                <Arrow onClick={handlerNext} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </Arrow>
        </PaginadoArrow>
        </ThemeProvider>
        
    )
}

export default Paginado