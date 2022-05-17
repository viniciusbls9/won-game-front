import OrdersList, { OrdersListProps } from 'components/OrdersList'
import { Profile } from 'templates'

import ordersMock from 'mocks/OrdersListMock'

export default function MyOrdersPage({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      items: ordersMock
    }
  }
}
