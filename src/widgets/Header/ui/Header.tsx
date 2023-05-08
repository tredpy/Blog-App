import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import s from './Header.module.scss'
import {useTranslation} from "react-i18next";

interface HeaderProps {
    className?: string
}
export const Header = ({className}: HeaderProps) => {
    const {t} = useTranslation()
    return (
        <div className={classNames(s.Header, {}, [className])}>
            <div className={s.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/'>
                    {t('Главная')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/profile' className={s.profile}>
                    {t('Профиль')}
                </AppLink>
            </div>
        </div>
    );
};