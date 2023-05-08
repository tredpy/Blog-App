import {classNames} from "shared/lib/classNames/classNames";
import s from './SideBar.module.scss'
import {useState} from "react";
import {ThemeSwitcher} from "features/ThemeSwitcher";
import {LangSwitcher} from "features/LangSwitcher";
interface SideBarProps {
    className?: string
}
export const SideBar = ({className}: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(s.SideBar, {[s.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>HIDE</button>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={s.lang}/>
            </div>
        </div>
    );
};