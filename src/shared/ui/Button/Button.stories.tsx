import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backGroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'TEXT',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'TEXT',
    theme: ThemeButton.CLEAR,
};

export const OutlineLight = Template.bind({});
OutlineLight.args = {
    children: 'TEXT',
    theme: ThemeButton.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'TEXT',
    theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
