import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'

import { GameDetails } from 'components'
import { renderWithTheme } from 'utils/tests/helpers'
import { GameDetailsProps } from '.'

const props: GameDetailsProps = {
  developer: 'Different Tales',
  plataforms: ['windows', 'mac', 'linux'],
  releaseDate: '2020-11-21T23:00:00'
}

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(
      screen.getByRole('heading', { name: /Developer/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /release date/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /plataforms/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Developer/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument()
  })

  it('should render plataform icons', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByRole('img', { name: /Linux/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Windows/i })).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Mac/i })).toBeInTheDocument()
  })
})
