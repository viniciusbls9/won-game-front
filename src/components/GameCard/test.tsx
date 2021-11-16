import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import GameCard from '.'
import theme from 'styles/theme'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://i.picsum.photos/id/1010/1600/400.jpg?hmac=aHo3G1_n46RGzMM7jzyqMKUbSCfPPkHlm52FEvbShaw',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    // renderizar o gamecard
    const { container } = renderWithTheme(<GameCard {...props} />)
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

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render price in label', () => {
    // renderizar o gamecard
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText('R$ 235,00')

    // preço não tenha o corte
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })

    // preço tenha o bg secundário
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-through in price when promotional', () => {
    // renderizar o gamecard (com promotionalPrice) // 200 reais // 15 reais
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />)

    // preço tenha o corte
    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      textDecoration: 'line-through'
    })
    // preço novo promocional não via ter o line-through
    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })
})
