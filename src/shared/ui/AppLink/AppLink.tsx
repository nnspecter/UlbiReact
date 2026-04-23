import { classNames } from 'shared/lib/classNames/classNames'
import cls from "./AppLink.module.scss"
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';


export type AppLinkTheme = 'primary' | 'inverted';

interface AppLinkProps extends LinkProps{
  className?: string;
  theme?: AppLinkTheme;

}

export const AppLink = (props: AppLinkProps) => {
    const {
        to,
        className,
        theme='primary',
        children,
        ...otherProps
    } = props;
    return (
        <Link 
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}>
        {children}
        </Link>
    )
}