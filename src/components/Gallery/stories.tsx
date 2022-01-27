import { Story, Meta } from '@storybook/react/types-6-0'
import { GalleryMock } from 'mocks'
import { Gallery } from 'components'
import { GalleryProps } from '.'

export default {
  title: 'Gallery',
  component: Gallery,
  args: {
    GalleryMock
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GalleryProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Gallery {...args} />
  </div>
)
