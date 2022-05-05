import { CardsList } from 'components'
import { CardsListProps } from 'components/CardsList'
import { Profile } from 'templates'

import cardsMock from 'mocks/PaymentOptionsMock'

export default function MyCardsPage({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      cards: cardsMock
    }
  }
}
