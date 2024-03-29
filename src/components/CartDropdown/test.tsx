import 'match-media-mock'
import { screen } from '@testing-library/react'

import { CartDropdown } from 'components'
import { renderWithTheme } from 'utils/tests/helpers'

import gameCartListMock from 'mocks/gameCartMock'

describe('<CartDropdown />', () => {
  it('should render CartIcon and its badge', () => {
    renderWithTheme(<CartDropdown items={gameCartListMock} total="R$ 300,00" />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${gameCartListMock.length}`)).toBeInTheDocument()
  })

  it('should render dropdown content with cart items and total', () => {
    renderWithTheme(<CartDropdown items={gameCartListMock} total="R$ 300,00" />)

    expect(screen.getByText('R$ 300,00')).toBeInTheDocument()
    expect(screen.getByText(`${gameCartListMock[0].title}`)).toBeInTheDocument()
  })
})
