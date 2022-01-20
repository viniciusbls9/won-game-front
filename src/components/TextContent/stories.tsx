import { Story, Meta } from '@storybook/react/types-6-0'
import { TextContent } from 'components'
import TextContentMock from 'mocks/textContentMock'
import { TextContentProps } from '.'

export default {
  title: 'TextContent',
  component: TextContent,
  args: TextContentMock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
)
