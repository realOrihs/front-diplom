'use client';
import React, {FC, useEffect, useState} from 'react';
import classes from './Signup.module.scss';
import {SignupProps} from './Signup.types';
import {InputText} from '~shared/ui/InputText/InputText';
import {Password} from '~shared/ui/Password/Password';
import {Button} from '~shared/ui/Button/Button';
import {Box, Icon, Spinner, Text} from '@chakra-ui/react';
import {SiVk} from 'react-icons/si';
import Link from 'next/link';
import {isEmailValid} from '~shared/utils/isEmailValid';
import {useStore} from 'effector-react';
import {setUser, storeUser} from '~shared/store/User';
import {useRouter} from 'next/navigation';
import {useToast} from '@chakra-ui/toast';
import {client} from '~shared/api/Client';

export const Signup: FC<SignupProps> = ({className}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmedPassword, setConfirmedPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
  const [invalidLogin, setInvalidLogin] = useState<boolean>(false);
  const [invalidPassword, setInvalidPassword] = useState<boolean>(false);
  const [invalidConfirmedPassword, setInvalidConfirmedPassword] = useState<boolean>(false);
  const [invalidEqualPasswords, setInvalidEqualPasswords] = useState<boolean>(false);

  const router = useRouter();
  const toast = useToast();
  const store = useStore(storeUser);
  const resetState = () => {
    setEmail('');
    setLogin('');
    setPassword('');
    setConfirmedPassword('');
    setInvalidEmail(false);
    setInvalidLogin(false);
    setInvalidPassword(false);
    setInvalidConfirmedPassword(false);
  };

  const handlerEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInvalidEmail(false);
    setEmail(value);
    setError('');
    if (value.trim() === '' || !isEmailValid(value)) {
      setInvalidEmail(true);
    }
  };

  const handlerLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInvalidLogin(false);
    setLogin(value);
    setError('');
    if (value.trim() === '') {
      setInvalidLogin(true);
    }
  };

  const handlerPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInvalidPassword(false);
    setInvalidEqualPasswords(false);
    setConfirmedPassword('');
    setPassword(value);
    setError('');
    if (value.trim() === '') {
      setInvalidPassword(true);
    }
  };

  const handlerConfirmedPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInvalidConfirmedPassword(false);
    setInvalidEqualPasswords(false);
    setConfirmedPassword(value);
    setError('');
    if (value.trim() === '') {
      setInvalidConfirmedPassword(true);
    }
  };

  const onClick = () => {
    if (password !== confirmedPassword) {
      setInvalidEqualPasswords(true);
      return;
    }
    setIsLoading(true);
    client.user
      .signup(email, login, password)
      .then((response) => {
        localStorage.setItem('accessToken', response.jwt);
        setUser(response.user);
        toast({
          title: 'Регистрация',
          description: 'Прошла успешно!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        router.push('/');
      })
      .catch((error) => {
        toast({
          title: 'Регистрация',
          description: 'Не прошла. Попробуйте позже',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        setError('Ошибка сервера, попробуйте позже!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const disabledBtn =
    !email ||
    !login ||
    !password ||
    !confirmedPassword ||
    invalidEmail ||
    invalidLogin ||
    invalidPassword ||
    invalidConfirmedPassword ||
    isLoading;

  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <h2 className={classes.title}>Регистрация</h2>
        <InputText
          value={email}
          onChange={handlerEmailChange}
          isInvalid={!!error || invalidEmail}
          placeholder={'Введите email'}
          className={classes.input}
          inputId={'email'}
        />
        <InputText
          value={login}
          onChange={handlerLoginChange}
          isInvalid={!!error || invalidLogin}
          placeholder={'Введите login'}
          className={classes.input}
          inputId={'login'}
        />
        <Password
          value={password}
          onChange={handlerPasswordChange}
          isInvalid={!!error || invalidPassword || invalidEqualPasswords}
          placeholder={'Введите пароль'}
          className={classes.input}
          inputId={'password'}
        />
        <Password
          value={confirmedPassword}
          onChange={handlerConfirmedPasswordChange}
          isInvalid={!!error || invalidConfirmedPassword || invalidEqualPasswords}
          placeholder={'Подтвердите пароль'}
          className={classes.input}
          inputId={'confirmedPassword'}
        />
        <Button disabled={disabledBtn} className={classes.btn} onClick={onClick}>
          {isLoading ? (
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='sm'
            />
          ) : (
            <span>Зарегистрироваться</span>
          )}
        </Button>
        {(error || invalidEqualPasswords) && (
          <p className={classes.errorText}>
            {invalidEqualPasswords ? 'Пароли не совпадают!' : error}
          </p>
        )}
        <Text className={classes.or}>или</Text>
        <Button className={classes.btnVk} isLink href={'https://api.basediplom.ru/api/connect/vk'}>
          <Icon as={SiVk} fontSize={'lg'} />
        </Button>
        <Box>
          <Text className={classes.textBottom}>
            Есть аккаунт? <Link href={'/signin'}>Авторизация</Link>
          </Text>
        </Box>
      </div>
    </div>
  );
};
