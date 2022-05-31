import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components'

export const Main = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 26rem 1fr;
      gap: ${theme.grid.gutter};
    `}
  `}
`

export const GridContainer = styled.section``

export const ShowMoreButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;
    padding: ${theme.spacings.medium};
    text-transform: uppercase;
    font-weight: bold;
    width: fit-content;
    margin: 0 auto;
    cursor: pointer;
    > svg {
      color: ${theme.colors.primary};
    }
  `}
`

export const ShowMoreButtonTitle = styled.p``
