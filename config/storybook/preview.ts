import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/Storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/Storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/Storybook/RouterDecorator/RouterDecorator';
import { Theme } from '../../src/shared/config/ThemeContext/ThemeContext';

const preview: Preview = {
    decorators: [StyleDecorator, ThemeDecorator(Theme.DARK), RouterDecorator],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
