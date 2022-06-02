import { Story, Meta } from '@storybook/react/types-6-0'
import { CartList } from 'components'
import { CartListProps } from '.'

import gameCartListMock from 'mocks/gameCartMock'

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items: gameCartListMock,
    total: 'R$ 330,00'
  },
  argTypes: {
    items: {
      type: ''
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)

export const WithButton: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} hasButton />
  </div>
)

export const Empty: Story<CartListProps> = () => (
  <div style={{ maxWidth: 800 }}>
    <CartList />
  </div>
)
