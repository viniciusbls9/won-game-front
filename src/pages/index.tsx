import Home, { HomeTemplateProps } from 'templates/Home'
import bannerMock from 'mocks/bannerSliderMock'
import highlightMock from 'mocks/highlightMock'
import gamesMock from 'mocks/gameCardSliderMock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannerMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighligth: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighligth: highlightMock
    }
  }
}
