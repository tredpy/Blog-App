import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import s from './Header.module.scss'
import {ThemeSwitcher} from "features/ThemeSwitcher";

interface HeaderProps {
    className?: string
}
export const Header = ({className}: HeaderProps) => {
    return (
        <div className={classNames(s.Header, {}, [className])}>
            <ThemeSwitcher />
            <div className={s.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/'>
                    MAIN
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/profile' className={s.profile}>
                    PROFILE
                </AppLink>
            </div>
        </div>
    );
};