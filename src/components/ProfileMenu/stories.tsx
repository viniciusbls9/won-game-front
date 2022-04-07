import { Story, Meta } from '@storybook/react/types-6-0'
import { ProfileMenu } from 'components'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  parameters: {
    background: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = () => <ProfileMenu />
