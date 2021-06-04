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