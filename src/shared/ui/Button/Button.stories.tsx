import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonView } from './Button';
import { ThemeDecorator } from '../../config/Storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../config/ThemeContext/ThemeContext';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        view: ButtonView.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        view: ButtonView.OUTLINE,
    },
};

export const PrimaryLight: Story = {
    args: {
        children: 'Text',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ClearLight: Story = {
    args: {
        children: 'Text',
        view: ButtonView.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OutlineLight: Story = {
    args: {
        children: 'Text',
        view: ButtonView.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
