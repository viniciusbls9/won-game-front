import { Heading, Ribbon } from 'components'
import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading lineBottom color="black">
      {title}
    </Heading>

    <Ribbon color="secondary">{`$${price}`}</Ribbon>
    <S.GameDescription>{description}</S.GameDescription>
  </S.Wrapper>
)

export default GameInfo
