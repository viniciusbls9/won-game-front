import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'

import { Wishlist } from 'templates'
import { renderWithTheme } from 'utils/tests/helpers'

import gamesMock from 'mocks/gameCardSliderMock'
import highlightMock from 'mocks/highlightMock'

const props = {
  games: gamesMock,
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock
}

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /Wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })

  it('should render empty when there no games', () => {
    renderWithTheme(
      <Wishlist
        recommendedGames={gamesMock}
        recommendedHighlight={highlightMock}
      />
    )

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
