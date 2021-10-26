import { Meta } from '@storybook/react';
import GameItem, {
  GameItemProps,
} from '../../../../components/molecules/GameItem';

export default {
  title: 'Components/Molecules/GameItem',
  component: GameItem,
} as Meta;

const Templates = (args: GameItemProps) => <GameItem {...args} />;

export const Default = Templates.bind({});
Default.args = {
  title: 'Super Mechs',
  category: 'Mobile',
  thumbnail: '/img/Thumbnail-1.png',
};
