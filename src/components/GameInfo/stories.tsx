import { Story, Meta } from '@storybook/react/types-6-0'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import mockGame from 'components/GameInfo/mock'

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: mockGame,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
)
