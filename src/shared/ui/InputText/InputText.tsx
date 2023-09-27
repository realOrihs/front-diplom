import React, {FC} from 'react';

import classes from './InputText.module.scss';
import cx from 'classnames';
import SearchIconSVG from '~shared/assets/images/svg/search.svg';
import Image from 'next/image';

interface InputTextProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isInvalid?: boolean;
  className?: string;
  withSearchIcon?: boolean;
  inputId?: string;
}

export const InputText: FC<InputTextProps> = ({
  value,
  className,
  onChange,
  isInvalid = false,
  placeholder,
  withSearchIcon = false,
  inputId,
}) => {
  return (
    <div className={cx(classes.inputWrapper, className, isInvalid && classes.inputWrapperError)}>
      <input
        id={inputId ?? 'inputText'}
        type={'text'}
        className={classes.input}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={inputId ?? 'inputText'} className={classes.inputPlaceholder}>
        {placeholder}
      </label>
      {withSearchIcon && (
        <span className={classes.iconWrapper}>
          <Image
            priority
            quality={100}
            src={SearchIconSVG}
            layout='responsive'
            alt={'lock-password'}
          />
        </span>
      )}
    </div>
  );
};
