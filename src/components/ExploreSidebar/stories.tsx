import { Story, Meta } from '@storybook/react/types-6-0'
import { ExploreSidebar } from 'components'

import items from 'mocks/exploreSideBarMock'
import { ExploreSidebarProps } from '.'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ExploreSidebarProps> = (args) => (
  <ExploreSidebar {...args} />
)

export const WithInitialValues: Story<ExploreSidebarProps> = (args) => (
  <ExploreSidebar
    {...args}
    initialValues={{ windows: true, sort_by: 'low-to-high' }}
  />
)
