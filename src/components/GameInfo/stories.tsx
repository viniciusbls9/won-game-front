import { Story, Meta } from '@storybook/react/types-6-0'
import { GameInfo } from 'components'

const props = {
  title: 'My Game Title',
  description: 'Game description',
  price: '210,00'
}

export default {
  title: 'GameInfo',
  component: GameInfo
} as Meta

export const Default: Story = () => <GameInfo {...props} />
