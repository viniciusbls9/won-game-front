import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'

import { Game } from 'templates'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Game />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Game />)
    expect(screen.getByRole('heading', { name: /Game/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
