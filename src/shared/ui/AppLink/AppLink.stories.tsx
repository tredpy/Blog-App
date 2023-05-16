import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkView } from './AppLink';
import { ThemeDecorator } from '../../config/Storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../config/ThemeContext/ThemeContext';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        to: '/',
    },
};
export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkView.PRIMARY,
    },
};
export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkView.SECONDARY,
    },
};

export const PrimaryLight: Story = {
    args: {
        children: 'Text',
        theme: AppLinkView.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const SecondaryLight: Story = {
    args: {
        children: 'Text',
        theme: AppLinkView.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
