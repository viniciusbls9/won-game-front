import { Games } from 'templates'
import { GamesTemplateProps } from 'templates/Games'
import filterItems from 'mocks/exploreSideBarMock'
import gamesMock from 'mocks/gameCardSliderMock'

export default function GamesPage(props: GamesTemplateProps) {
  return <Games {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      games: gamesMock,
      filterItems
    }
  }
}
