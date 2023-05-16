import { Decorator } from '@storybook/react';
import { Theme } from '../../ThemeContext/ThemeContext';

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
