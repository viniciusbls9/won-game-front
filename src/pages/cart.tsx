import { Cart } from 'templates'
import gamesMock from 'mocks/gameCardSliderMock'
import highlightMock from 'mocks/highlightMock'
import gameCartListMock from 'mocks/gameCartMock'
import paymentMock from 'mocks/PaymentOptionsMock'
import { CartProps } from 'templates/Cart'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      items: gameCartListMock,
      total: '$ 430,00',
      cards: paymentMock,
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighlight: highlightMock
    }
  }
}
