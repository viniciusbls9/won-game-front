import '../../../.jest/match-media-mock'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import { Container } from 'components'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Container>Won Games</Container>)

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  max-width: 130rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: calc(3.2rem / 2);
  padding-right: calc(3.2rem / 2);
}

<div
  class="c0"
>
  Won Games
</div>
`)
  })
})
