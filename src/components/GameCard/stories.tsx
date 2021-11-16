import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://i.picsum.photos/id/1010/1600/400.jpg?hmac=aHo3G1_n46RGzMM7jzyqMKUbSCfPPkHlm52FEvbShaw',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
