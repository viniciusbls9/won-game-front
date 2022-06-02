import { Story, Meta } from '@storybook/react/types-6-0'
import { CartDropdown } from 'components'
import { CartDropdownProps } from '.'

import gameCartListMock from 'mocks/gameCartMock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  args: {
    items: gameCartListMock,
    total: 'R$ 300,00'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CartDropdownProps> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
)
