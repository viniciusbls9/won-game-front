import 'match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import { OrdersList } from 'components'
import mock from 'mocks/OrdersListMock'

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />
  }
}))

jest.mock('components/GameItem', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock GameItem">{children}</div>
  }
}))

describe('<OrdersList />', () => {
  it('should render the game items', () => {
    renderWithTheme(<OrdersList items={mock} />)

    expect(
      screen.getByRole('heading', { name: /my orders/i })
    ).toBeInTheDocument()

    expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2)
  })

  it('should render empty state', () => {
    renderWithTheme(<OrdersList items={[]} />)

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
