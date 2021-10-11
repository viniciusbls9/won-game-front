import styled, { css, DefaultTheme } from 'styled-components'
import { RibbonColors, RibbonProps } from '.'

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background: ${theme.colors[color]};
  `
}

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color }) => css`
    ${!!color && wrapperModifiers.color(theme, color)}
  `}
`
