import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'

import { PaymentOptions } from 'components'
import { renderWithTheme } from 'utils/tests/helpers'

import paymentMock from 'mocks/PaymentOptionsMock'

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the add new card button', () => {
    renderWithTheme(
      <PaymentOptions cards={paymentMock} handlePayment={jest.fn} />
    )

    expect(screen.getByLabelText(/4325/)).toBeInTheDocument()
    expect(screen.getByLabelText(/4326/)).toBeInTheDocument()
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
  })
})
