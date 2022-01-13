import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import { GameInfo } from 'components'

const props = {
  title: 'My Game Title',
  description: 'Game description',
  price: '210,00'
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    renderWithTheme(<GameInfo {...props} />)

    // esperar por um heading (title)
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    // esperar por description
    expect(screen.getByText(/\$210,00/i)).toBeInTheDocument()
    // esperar pelo price
    expect(screen.getByText(/game description/i)).toBeInTheDocument()
  })

  // it('should render buttons', () => {
  //   renderWithTheme(<GameInfo {...props} />)

  //   // esperar button add to cart
  //   // esperar button wishlist
  // })
})
