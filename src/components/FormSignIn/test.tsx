import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignIn />)

    // verifique email field
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()

    // verifique password field
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()

    // verifique button
    expect(
      screen.getByRole('button', { name: /Sign in now/i })
    ).toBeInTheDocument()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    // verifique forgot password link
    expect(screen.getByText('Forgot your password?').closest('a'))
  })

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSignIn />)

    // verifique text
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument()
    // verifique link
    expect(screen.getByText(/don't have an account\?/i)).toBeInTheDocument()
  })
})
