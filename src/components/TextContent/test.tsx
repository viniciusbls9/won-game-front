import '../../../.jest/match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import { TextContent } from 'components'

const props = {
  title: 'description',
  content: `<h1>Content</h1>`
}

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    renderWithTheme(<TextContent {...props} />)

    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()
  })
})
