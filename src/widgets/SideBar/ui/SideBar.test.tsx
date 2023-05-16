import { fireEvent, screen } from '@testing-library/react';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { SideBar } from './SideBar';

describe('SideBar', () => {
    test('Render test', () => {
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId('SideBar')).toBeInTheDocument();
    });

    test('Collapsed test', () => {
        renderWithTranslation(<SideBar />);
        const toggleBtn = screen.getByTestId('SideBarToggle');
        expect(screen.getByTestId('SideBar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('SideBar')).toHaveClass('collapsed');
    });
});
