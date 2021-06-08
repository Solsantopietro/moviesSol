import styled from "styled-components"

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
`

export const Title = styled.h1`
  margin-left: 150px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.families.h2};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  font-size: ${({ theme }) => theme.fonts.size.h1 || theme.fonts.size.h2};
`
export const Icon = styled.svg`
  color: ${({ theme }) => theme.colors.secondary};
  width: 30px;
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
