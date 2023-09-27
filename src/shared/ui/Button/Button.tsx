'use client';
import React, {FC, HTMLAttributeAnchorTarget, HTMLAttributes} from 'react';
import classes from './Button.module.scss';
import cx from 'classnames';
import Link from 'next/link';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  onClick?: () => void;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.RefObject<HTMLButtonElement>;
  color?: 'primary' | 'secondary';
  text?: boolean;
  isIcon?: boolean;
}

interface WithoutIsLink {
  isLink?: false;
  href?: string;
  target?: string;
}

interface WithIsLink {
  isLink: true;
  href: string;
  target?: HTMLAttributeAnchorTarget;
}

export type ButtonPropsWithIsLink = ButtonProps & (WithIsLink | WithoutIsLink);
export const Button: FC<ButtonPropsWithIsLink> = ({
  children,
  disabled,
  style,
  onClick,
  onMouseDown,
  onMouseUp,
  isLink = false,
  href,
  className,
  ref,
  color = 'secondary',
  text = false,
  isIcon = false,
  target,
}) => {
  const handlerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) onClick();
  };
  return (
    <button
      ref={ref}
      type='button'
      disabled={disabled}
      className={cx(
        classes.button,
        className,
        isLink && classes.link,
        isIcon && classes.isIcon,
        text && classes.text,
        color === 'primary' ? classes.primary : classes.secondary,
        disabled && classes.disabled,
      )}
      style={style}
      onClick={handlerClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {isLink && href ? (
        <Link href={href} target={target}>
          {children}
        </Link>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};
