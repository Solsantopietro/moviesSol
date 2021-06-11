import styled from "styled-components"

export const Sections = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

export const SectionMedia = styled.section`
display: flex;
flex-direction: column;
max-width: 1400px;
justify-content: center;
margin-top: 60px;

  @media  (max-width: 1400px) {
    justify-content: center;

  }
    
`
export const Cards = styled.section`
  display: flex;
  @media  (max-width: 1400px) {
    justify-content: center;
      flex-wrap: wrap;
    }
`


export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
`

export const Title = styled.h1`
  margin: auto;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.families.h2};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  font-size: ${({ theme }) => theme.fonts.size.h1 || theme.fonts.size.h2};
  @media (max-width: 1400px){

  }
`
export const Icon = styled.svg`
  color: ${({ theme }) => theme.colors.secondary};
  width: 30px;
  margin-left: 10px;
  &:hover{
    color: ${({ theme }) => theme.colors.primary};

}
`

export const Backdrop = styled.div`
  width: auto;
  height: 600px;
  background-image: linear-gradient(90deg, rgb(0, 0, 0) 0px, transparent 50%, transparent), url("https://image.tmdb.org/t/p/original${props => props.img}");
  background-size: cover;
  background-position: center center; 

`;

// export const Icon = styled.div`
//     color: ${({ theme }) => theme.colors.primary};
//     width: 30px;
//     margin: 10px;
//   &:active{
//     color: ${({ theme }) => theme.colors.secondary};

//   }
// `