import { Heading } from 'components'
import { PaymentCard } from 'components/PaymentOptions'
import * as S from './styles'

export type CardsListProps = {
  cards?: PaymentCard[]
}

const CardsList = ({ cards }: CardsListProps) => (
  <>
    <Heading lineBottom color="black" size="small">
      My cards
    </Heading>

    {cards?.map((card) => (
      <S.Card key={card.number}>
        <S.CardImage src={card.img} alt={card.flag} />
        <S.CardNumber>{card.number}</S.CardNumber>
      </S.Card>
    ))}
  </>
)

export default CardsList
