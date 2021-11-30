import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'

import { Container, Footer, Menu, Heading } from 'components'
import { HighlightProps } from 'components/Highlight'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGamesSlider: GameCardProps[]
  mostPopularHighlight: HighlightProps
}

const Home = () => (
  <section>
    <Container>
      <Menu />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        News
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Most Popular
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Upcomming
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Free Games
      </Heading>
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
