import styled, { ThemeProvider } from 'styled-components'
import { Flex, Title } from '../utils/Commons'
import { theme } from '../styles/theme'


const SectionInfo = styled.section`
  display: flex;
  max-width: 1000px;
  margin-top: 30px;

  @media (max-width: 650px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-direction: column;
  }
`

const Description = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    max-width: 1400px;
    width: 100%;
    padding-left: 30px;
    color: white;
    .Title{
      color: ${({ theme }) => theme.colors.text};
    }
    .Details{
        max-width: 550px;
    }

`
const ImgPoster = styled.img`
    width: 250px;
    height: 375px;
    margin: 20px;
`
const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fonts.size.p};

`

const Info = ({ imgUrl, title, overview, runtime, budget, revenue }) => {
    return(
    <SectionInfo>
      <ThemeProvider theme={theme}>
        <ImgPoster src={`https://image.tmdb.org/t/p/original${imgUrl}`}/>
        <Description>
        <div className="Title">
          <Title>{title}</Title>
        </div>
        <div className="Details">
          <Paragraph>{overview}</Paragraph>
          <Paragraph>Duracion: {runtime} min.</Paragraph>
          <Paragraph>Generos: </Paragraph>
          <Paragraph>Presupuesto: ${budget}</Paragraph>
          <Paragraph>Recaudacion: ${revenue}</Paragraph>
          <Paragraph>Produccion: </Paragraph> 
        </div>
        
        </Description>
      </ThemeProvider>
    </SectionInfo>
    )
}

export default Info
