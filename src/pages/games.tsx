import { Games } from 'templates'
import { GamesTemplateProps } from 'templates/Games'
import filterItems from 'mocks/exploreSideBarMock'
import { initializeApollo } from 'utils/apollo'
import { gql } from '@apollo/client'

export default function GamesPage(props: GamesTemplateProps) {
  return <Games {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: gql`
      query QueryGame {
        games {
          name
          slug
          cover {
            url
          }
          developers {
            name
          }
          price
        }
      }
    `
  })

  return {
    props: {
      revalidate: 60,
      games: data.games.map((game) => ({
        title: game.name,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover.url}`,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game.price)
      })),
      filterItems
    }
  }
}
