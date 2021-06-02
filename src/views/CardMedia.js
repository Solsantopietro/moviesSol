import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import {Link} from 'react-router-dom'


const StyledCard = styled.article`
    width: 260px;
    height: 450px;
    margin: 10px;
`
const Image = styled.img`
    width: 100%;
    height: 80%;
    &:hover {
    transform: scale(1.05);
    transition: all 0.3s;
  }
`

const Title = styled.h2`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.families.h2};
    font-weight: ${({ theme }) => theme.fonts.weight.min};
    font-size: ${({ theme }) => theme.fonts.size.h2};
    &:hover {
        color: white;
  }
`


const CardMedia = ({ title, image, name, id, type }) => {
    return (
      <ThemeProvider theme={theme}>
        <Link to={`/detalle/${id}/${type}`}>
          <StyledCard className="CardMedia">
            <Image src={`https://image.tmdb.org/t/p/w500${image}`}/>
            <Title>{title || name}</Title>
        </StyledCard>
        </Link>
        
      </ThemeProvider>
    )
}

export default CardMedia;
