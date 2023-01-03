import { ApolloClient, gql, InMemoryCache } from '@apollo/client'

import Home, { HomeTemplateProps } from 'templates/Home'
import bannerMock from 'mocks/bannerSliderMock'
import highlightMock from 'mocks/highlightMock'
import gamesMock from 'mocks/gameCardSliderMock'

export default function Index(props: HomeTemplateProps) {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  })

  client.query({
    query: gql`
      query getGames {
        games {
          name
        }
      }
    `
  })

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
