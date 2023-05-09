import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkView } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import s from './Header.module.scss';

interface HeaderProps {
    className?: string
}
export const Header = ({ className }: HeaderProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(s.Header, {}, [className])}>
            <div className={s.links}>
                <AppLink theme={AppLinkView.SECONDARY} to="/">
                    {t('Главная')}
                </AppLink>
                <AppLink theme={AppLinkView.SECONDARY} to="/profile" className={s.profile}>
                    {t('Профиль')}
                </AppLink>
            </div>
        </div>
    );
};
