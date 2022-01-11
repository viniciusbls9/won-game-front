import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import highlightMock from 'components/Highlight/mocks'
import gamesMock from 'components/GameCardSlider/mock'

import { Showcase } from 'components'

const props = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock.slice(0, 1)
}

describe('<Showcase />', () => {
  it('should render the Showcase with title, highlight and games', () => {
    renderWithTheme(<Showcase {...props} />)

    expect(screen.getByText('Most Popular')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Read Dead is back!/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Population Zero/i })
    ).toBeInTheDocument()
  })
})
