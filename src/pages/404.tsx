import { Container, Empty } from 'components'
import { Base } from 'templates'

export default function Index() {
  return (
    <Base>
      <Container>
        <Empty
          title="404: Not found"
          description="Ops... this page does not exist. Go back to the store and enjoy our offers"
          hasLink
        />
      </Container>
    </Base>
  )
}
