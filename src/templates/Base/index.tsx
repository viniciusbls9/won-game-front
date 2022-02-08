import { Container, Footer, Menu } from 'components'
import { ReactNode } from 'react'
import * as S from './styles'

export type BaseTemplateProps = {
  children: ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <S.Wrapper>
    <Container>
      <Menu />
    </Container>

    {children}

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </S.Wrapper>
)

export default Base
