import styled, { ThemeProvider } from 'styled-components'
import { Flex, Title  } from '../utils/Commons'



const ImgPoster = styled.img`
    width: 200px;
    height: 310px;
    margin: 10px;
`
const Paragraph = styled.p`
    color: white;
`

const Description = styled.div`
display: flex;
    color: white;

`
const Info = ({ imgUrl, title, overview, runtime, budget, revenue }) => {
    return(
        <section>
            <Flex>
    <ImgPoster src={`https://image.tmdb.org/t/p/original${imgUrl}`}/>
    <Description>
        <Title>{title}</Title>
        <Paragraph>{overview}</Paragraph>
        <Paragraph>Duracion: {runtime} min.</Paragraph>
        <Paragraph>Generos: </Paragraph>
        <Paragraph>Presupuesto: {budget}</Paragraph>
        <Paragraph>Recaudacion: {revenue}</Paragraph>
        <Paragraph>Produccion: </Paragraph>
    </Description>
    </Flex>
        </section>
    )
}

export default Info
