import {classNames} from "shared/lib/classNames/classNames";
import s from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";
export enum ButtonView {
    CLEAR = 'clear'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    view?: ButtonView
}
export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        view,
        ...otherProps
    } = props
    return (
        <button
            className={classNames(s.Button, {}, [className, s[view]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};