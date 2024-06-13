import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Listbox } from './ListBox';

export default {
    title: 'shared/Listbox',
    component: Listbox,
    argTypes: {
        backGroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Listbox>;

const Template: ComponentStory<typeof Listbox> = (args: any) => (
    <Listbox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    items: [
        {
            value: '1',
            content: 'Test',
            disabled: false,
        },
        {
            value: '2',
            content: 'Text',
            disabled: false,
        },
        {
            value: '3',
            content: 'World',
            disabled: true,
        },
    ],
    defaultValue: 'Select option',
};
