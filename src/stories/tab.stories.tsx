import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Tab} from '../components/Tab'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tabs/Tab',
  component: Tab,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Tab>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Tab1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Tab1.args = {
  tabsData: [  {
    tabName: 'tab 1',
    tabText: 'Texto do primeiro tab'
},
{
    tabName: 'tab 2',
    tabText: 'Texto do segundo tab'
},
{
    tabName: 'tab 3',
    tabText: 'Texto do terceiro tab'
},
{
    tabName: 'tab 4',
    tabText: 'Texto do quarto tab'
}]
};

export const Tab2 = Template.bind({});
Tab2.args = {
  tabsData: [  {
    tabName: 'tab 1',
    tabText: 'Texto do primeiro tab'
},
{
    tabName: 'tab 2',
    tabText: 'Texto do segundo tab'
},
{
    tabName: 'tab 3',
    tabText: 'Texto do terceiro tab'
}]
};
