import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'

import { CartList } from 'components'
import { renderWithTheme } from 'utils/tests/helpers'

import gameCartListMock from 'mocks/gameCartMock'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = renderWithTheme(
      <CartList items={gameCartListMock} total="R$ 330,00" />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)

    expect(screen.getByText('R$ 330,00')).toHaveStyle({ color: '#f231a5' })

    expect(container.firstChild).toMatchSnapshot()
  })
})
