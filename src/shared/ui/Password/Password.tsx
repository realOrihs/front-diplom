'use client';
import React, {FC, useState} from 'react';
import classes from './Password.module.scss';
import cx from 'classnames';
import Image from 'next/image';
import LockIconSVG from '~shared/assets/images/svg/lock.svg';

interface PasswordProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isInvalid?: boolean;
  className?: string;
  inputId?: string;
}

export const Password: FC<PasswordProps> = ({
  placeholder,
  className,
  onChange,
  value,
  isInvalid = false,
  inputId,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handlerClickLockBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={cx(classes.inputWrapper, className, isInvalid && classes.inputWrapperError)}>
      <input
        id={inputId ?? 'inputPassword'}
        type={showPassword ? 'text' : 'password'}
        className={classes.input}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={inputId ?? 'inputPassword'} className={classes.inputPlaceholder}>
        {placeholder}
      </label>
      <button
        type='button'
        className={classes.lockIcon}
        onMouseDown={(e) => e.preventDefault()}
        onClick={handlerClickLockBtn}
      >
        <Image priority quality={100} src={LockIconSVG} layout='responsive' alt={'lock-password'} />
      </button>
    </div>
  );
};
