import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonView } from 'shared/ui/Button/Button';
import { Theme } from 'shared/config/ThemeContext/ThemeContext';
import DarkIcon from 'shared/assets/icons/DarkTheme.svg';
import LightIcon from 'shared/assets/icons/LightTheme.svg';
import { useTheme } from 'shared/lib/useTheme/useTheme';

interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            view={ButtonView.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon /> }
        </Button>
    );
};
