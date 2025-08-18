import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../button.component';

const variants = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'danger',
};

const buttonTypes = {
  button: 'button',
  submit: 'submit',
  reset: 'reset',
};

const sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: Object.keys(variants),
      mapping: variants,
      control: {
        type: 'select',
        labels: variants,
      },
    },
    type: {
      options: Object.keys(buttonTypes),
      mapping: buttonTypes,
      control: {
        type: 'select',
        labels: buttonTypes,
      },
    },
    size: {
      options: Object.keys(sizes),
      mapping: sizes,
      control: {
        type: 'select',
        labels: sizes,
      },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Button: Story = {
  args: {
    variant: 'primary',
    type: 'button',
    size: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `<aui-button [variant]="variant" [size]="size" [type]="type">Button</aui-button>`,
  }),
};

export const Primary: Story = {
  args: {
    variant: 'secondary',
    type: 'button',
    size: 'medium',
  },
  render: () => ({
    template: `<aui-button variant="primary">Primary</aui-button>`,
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    type: 'button',
    size: 'medium',
  },
  render: () => ({
    template: `<aui-button variant="secondary">Secondary</aui-button>`,
  }),
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    type: 'button',
    size: 'medium',
  },
  render: () => ({
    template: `<aui-button variant="danger">Danger</aui-button>`,
  }),
};

export const Large: Story = {
  args: {
    variant: 'primary',
    type: 'button',
    size: 'large',
  },
  render: (args) => ({
    props: args,
    template: `<aui-button size="large">Large</aui-button>`,
  }),
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    type: 'button',
    size: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `<aui-button size="medium">Medium</aui-button>`,
  }),
};

export const Small: Story = {
  args: {
    variant: 'primary',
    type: 'button',
    size: 'small',
  },
  render: (args) => ({
    props: args,
    template: `<aui-button size="small">Small</aui-button>`,
  }),
};
