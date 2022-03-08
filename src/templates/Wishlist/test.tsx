import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'

import { Wishlist } from 'templates'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Wishlist />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Wishlist />)

    expect(
      screen.getByRole('heading', { name: /Wishlist/i })
    ).toBeInTheDocument()
  })
})
