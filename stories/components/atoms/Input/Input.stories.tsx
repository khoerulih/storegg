import { Meta } from '@storybook/react';
import Input, { InputProps } from '../../../../components/atoms/Input';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
} as Meta;

const Templates = (args: InputProps) => <Input {...args} />;

export const Default = Templates.bind({});
Default.args = {
  label: 'Nama Lengkap',
};
