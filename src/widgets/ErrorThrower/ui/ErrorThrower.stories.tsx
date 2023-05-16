import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/ThemeContext/ThemeContext';
import { ErrorThrower } from './ErrorThrower';

const meta: Meta<typeof ErrorThrower> = {
    title: 'widget/ErrorThrower',
    component: ErrorThrower,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ErrorThrower>;

export const Light: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
