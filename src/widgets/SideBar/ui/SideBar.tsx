import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { Button, ButtonView } from 'shared/ui/Button/Button';
import { useTheme } from 'shared/lib/useTheme/useTheme';
import { Theme } from 'shared/config/ThemeContext/ThemeContext';
import HideDark from 'shared/assets/icons/HideDark.svg';
import HideLight from 'shared/assets/icons/HideLight.svg';
import s from './SideBar.module.scss';

interface SideBarProps {
    className?: string
}
export const SideBar = ({ className }: SideBarProps) => {
    const { theme } = useTheme();
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div className={classNames(s.SideBar, { [s.collapsed]: collapsed }, [className])}>
            <Button view={ButtonView.CLEAR} onClick={onToggle}>
                {theme === Theme.DARK ? <HideLight /> : <HideDark />}
            </Button>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={s.lang} />
            </div>
        </div>
    );
};
