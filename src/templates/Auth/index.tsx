import { ReactNode } from 'react'
import Link from 'next/link'
import { Heading, Logo } from 'components'
import * as S from './styles'

type AuthProps = {
  title: string
  children: ReactNode
}

const Auth = ({ children, title }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo id="banner" />
          </a>
        </Link>

        <div>
          <Heading size="huge">All yours favorite games in one place</Heading>
          <S.Subtitle>
            <strong>WON</strong> is the best and most complete gaming plataform.
          </S.Subtitle>
        </div>

        <S.Footer>Won games 2020 © Todos os Direitos Reservados</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <a>
            <Logo color="black" size="large" id="content" />
          </a>
        </Link>
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
