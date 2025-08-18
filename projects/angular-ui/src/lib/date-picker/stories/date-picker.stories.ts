import { Meta, StoryObj } from '@storybook/angular';
import { DatePickerComponent } from '../date-picker.component';

const meta: Meta<DatePickerComponent> = {
  title: 'Components/DatePicker',
  component: DatePickerComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DatePickerComponent>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `<aui-datepicker></aui-datepicker>`,
  }),
};
