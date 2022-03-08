import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'

import { Wishlist } from 'templates'
import { renderWithTheme } from 'utils/tests/helpers'

import gamesMock from 'mocks/gameCardSliderMock'
import highlightMock from 'mocks/highlightMock'

const props = {
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
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })
})
