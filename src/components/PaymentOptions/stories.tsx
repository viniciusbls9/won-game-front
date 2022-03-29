import { Story, Meta } from '@storybook/react/types-6-0'
import { PaymentOptions } from 'components'
import { PaymentOptionsProps } from '.'

import paymentMock from 'mocks/PaymentOptionsMock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: paymentMock
  },
  argTypes: {
    cards: {
      type: ''
    },
    handlePayment: {
      action: 'clicked'
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<PaymentOptionsProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 400 }}>
    <PaymentOptions {...args} />
  </div>
)
