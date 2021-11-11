import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://i.picsum.photos/id/1010/1600/400.jpg?hmac=aHo3G1_n46RGzMM7jzyqMKUbSCfPPkHlm52FEvbShaw',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    // renderizar o gamecard
    renderWithTheme(<GameCard {...props} />)
    // verifiquem se o title foi renderizado
    expect(screen.getByRole('heading', { name: props.title }))
    // verifiquem se a developer foi renderizado
    expect(screen.getByRole('heading', { name: props.developer }))
    // verifiquem se a img foi renderizado
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
    // verifiquem se o price foi renderizado
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })
})
