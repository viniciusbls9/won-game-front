import { Story, Meta } from '@storybook/react/types-6-0'
import { Empty } from 'components'
import { EmptyProps } from '.'

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    background: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<EmptyProps> = (args) => <Empty {...args} />

Default.args = {
  title: 'Your wishlist is empty',
  description: 'Games added to your wishlist will appear here',
  hasLink: true
}
