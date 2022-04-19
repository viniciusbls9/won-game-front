import 'match-media-mock'
import { screen } from '@testing-library/react'

import { FormProfile } from 'components'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<FormProfile />', () => {
  it('should render the profile form', () => {
    renderWithTheme(<FormProfile />)

    expect(
      screen.getByRole('heading', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toBeInTheDocument()

    expect(
      screen.getByPlaceholderText(/type your password/i)
    ).toBeInTheDocument()
  })
})
