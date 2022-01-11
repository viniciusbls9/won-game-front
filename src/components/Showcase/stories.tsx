import { Story, Meta } from '@storybook/react/types-6-0'
import Showcase, { ShowcaseProps } from 'components/Showcase'
import highlightMock from 'components/Highlight/mocks'
import gamesMock from 'components/GameCardSlider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ShowcaseProps> = (args) => <Showcase {...args} />

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock
}

export const WithoutHightlight: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutHightlight.args = {
  title: 'Most Popular',
  games: gamesMock
}

export const WithoutGames: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock
}
