import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'
import { screen, fireEvent } from '@testing-library/react'

import { GameCard } from 'components'
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

  it('should render a field favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/Remove from Wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )
    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    expect(ribbon).toBeInTheDocument()
  })
})
