import { Wishlist } from 'templates'

import gamesMock from 'mocks/gameCardSliderMock'
import highlightMock from 'mocks/highlightMock'
import { WishlistTemplateProps } from 'templates/Wishlist'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      games: gamesMock,
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighlight: highlightMock
    }
  }
}
