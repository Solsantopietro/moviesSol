import './CardMedia.scss';
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'


const StyledCard = styled.article`
    background-color:  ${({ background }) => background};
`
const Title = styled.h3`
    ${({ theme }) => theme.font.families.title};
`


const CardMedia = ({ title, image, name }) => {
    return (
        <StyledCard  theme={theme} className="CardMedia">
            <img src={`https://image.tmdb.org/t/p/w500${image}`}/>
            <Title>{title}</Title>
            <Title>{name}</Title>
        </StyledCard>
    )
}

export default CardMedia;
