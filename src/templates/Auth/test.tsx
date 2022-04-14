import { renderWithTheme } from 'utils/tests/helpers'
import 'match-media-mock'
import { screen } from '@testing-library/react'

import { Auth } from 'templates'

describe('<Auth />', () => {
  it('should render all components and chilndren', () => {
    renderWithTheme(
      <Auth title="Sign In">
        <input type="text" name="" id="" />
      </Auth>
    )

    // verifica se tem duas logos
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    // verifica se tem o heading principal do banner
    expect(
      screen.getByRole('heading', {
        name: /All yours favorite games in one place/i
      })
    ).toBeInTheDocument()

    // verifica se tem o subtitle
    expect(
      screen.getByRole('heading', {
        name: /WON is the best and most complete gaming plataform./i
      })
    ).toBeInTheDocument()

    // verifica se tem o title do content
    expect(
      screen.getByRole('heading', {
        name: /Sign In/i
      })
    ).toBeInTheDocument()

    // verifica se o children ta sendo renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
