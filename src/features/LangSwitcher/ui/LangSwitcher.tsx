import {classNames} from "shared/lib/classNames/classNames";
import s from './LangSwitcher.module.scss'
import {useTranslation} from "react-i18next";
import {Button, ButtonView} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation()
    const toggleLang = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <Button
            className={classNames(s.LangSwitcher, {}, [className])}
            view={ButtonView.CLEAR}
            onClick={toggleLang}
        >
            {t('Русский')}
        </Button>
    );
};