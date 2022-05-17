import 'match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import { ExploreSidebar } from 'components'

describe('<ExploreSidebar />', () => {
  it('should render heading', () => {
    renderWithTheme(<ExploreSidebar />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
  })
})
