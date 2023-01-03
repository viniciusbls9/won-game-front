import { gql, useQuery } from '@apollo/client'

import Home, { HomeTemplateProps } from 'templates/Home'
import bannerMock from 'mocks/bannerSliderMock'
import highlightMock from 'mocks/highlightMock'
import gamesMock from 'mocks/gameCardSliderMock'

export default function Index(props: HomeTemplateProps) {
  const { data, loading } = useQuery(gql`
    query getGames {
      games {
        name
      }
    }
  `)

  if (loading) return <p>Loading...</p>

  if (data) return <p>{JSON.stringify(data, null, 2)}</p>

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
