import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {TabItem} from '../components/TabItens'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tabs/item',
  component: TabItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof TabItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TabItem> = (args) => <TabItem {...args} />;

export const Item1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Item1.args = {
  tabs: ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5'],
  text: ['Texto Tab 1', 'Texto Tab 2', 'Texto Tab 3', 'Texto Tab 4', 'Texto Tab 5'],
  selection: 0
};

export const Item2 = Template.bind({});
Item2.args = {
  tabs: ['Tab 1', 'Tab 2', 'Tab 3'],
  text: ['Texto Tab 1', 'Texto Tab 2', 'Texto Tab 3'],
  selection:1
};