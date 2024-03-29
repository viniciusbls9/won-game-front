import { Button, Heading, Ribbon } from 'components'
import { AddShoppingCart, FavoriteBorder } from 'styled-icons/material-outlined'
import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: number
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading lineBottom color="black">
      {title}
    </Heading>

    <Ribbon color="secondary">
      {new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD'
      }).format(price)}
    </Ribbon>
    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button icon={<AddShoppingCart />} size="large">
        Add to cart
      </Button>

      <Button icon={<FavoriteBorder />} size="large" minimal>
        WishList
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
