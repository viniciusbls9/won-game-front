import 'match-media-mock'
import { screen } from '@testing-library/react'

import { UserDropdown } from 'components'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="John Doe" />)

    expect(screen.getByText(/john doe/i)).toBeInTheDocument()
  })
})
