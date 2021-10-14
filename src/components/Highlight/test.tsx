import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import Highlight from '.'

const props = {
  title: 'Heading 1',
  subTitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2'
}

describe('<Highlight />', () => {
  it('should render headings and buttons', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /Heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Buy now/i })).toBeInTheDocument()
  })
})
