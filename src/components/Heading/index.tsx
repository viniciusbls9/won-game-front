import { ReactNode } from 'react'
import * as S from './styles'

export type LineColorsProps = 'primary' | 'secondary'

export type HeadingProps = {
  children: ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: LineColorsProps
  size?: 'small' | 'medium'
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  size = 'medium',
  lineColor = 'primary'
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    size={size}
    lineColor={lineColor}
  >
    {children}
  </S.Wrapper>
)

export default Heading
