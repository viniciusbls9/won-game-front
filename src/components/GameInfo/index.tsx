import { Button, Heading, Ribbon } from 'components'
import { AddShoppingCart, FavoriteBorder } from 'styled-icons/material-outlined'
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
