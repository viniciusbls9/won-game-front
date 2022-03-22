import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'

import { GameItem } from 'components'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00'
}

describe('<GameItem />', () => {
  it('should render the item', () => {
    renderWithTheme(<GameItem {...props} />)

    expect(
      screen.getByRole('heading', { name: /Red Dead Redemption 2/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /Red Dead Redemption 2/i })
    ).toHaveAttribute('src', props.img)

    expect(screen.getByText('R$ 215,00')).toBeInTheDocument()
  })

  it('should render the item with download link', () => {
    const downloadLink = 'https://link'
    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })
})
