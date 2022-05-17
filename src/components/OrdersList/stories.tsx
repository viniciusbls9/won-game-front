import { Story, Meta } from '@storybook/react/types-6-0'
import { OrdersList } from 'components'
import mock from 'mocks/OrdersListMock'
import { OrdersListProps } from '.'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: {
    items: mock
  }
} as Meta

export const Default: Story<OrdersListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
)
