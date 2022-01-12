import { Story, Meta } from '@storybook/react/types-6-0'
import Menu, { MenuProps } from 'components/Menu'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}
