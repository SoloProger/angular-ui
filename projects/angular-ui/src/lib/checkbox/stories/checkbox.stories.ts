import { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from '../checkbox.component';

const meta: Meta<CheckboxComponent> = {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {
  args: {
    label: 'Checkbox',
  },
  render: (args) => ({
    props: args,
    template: `<aui-checkbox [label]="label"></aui-checkbox>`,
  }),
};
