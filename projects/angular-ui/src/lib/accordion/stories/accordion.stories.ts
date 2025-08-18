import { Meta, StoryObj } from '@storybook/angular';
import { AccordionComponent } from '../accordion.component';

const meta: Meta<AccordionComponent> = {
  title: 'Components/Accordion',
  component: AccordionComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<AccordionComponent>;

export const Default: Story = {
  args: {
    isOpen: false,
    title: 'Accordion',
  },
  render: (args) => ({
    props: args,
    template: `<aui-accordion [title]="title">Test content</aui-accordion>`,
  }),
};

export const OpenAccordion: Story = {
  args: {
    isOpen: true,
    title: 'Accordion',
  },
  render: (args) => ({
    props: args,
    template: `<aui-accordion [title]="title" [isOpen]="isOpen">Test content</aui-accordion>`,
  }),
};
