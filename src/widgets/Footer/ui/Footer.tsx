'use client';

import React, {useEffect, useState} from 'react';
import classes from './Footer.module.scss';
import {Container} from '~shared/ui/Container/Container';
import {Telegram} from '~shared/ui/Icons/Telegram';
import {VK} from '~shared/ui/Icons/VK';
import {Youtube} from '~shared/ui/Icons/Youtube';
import {Button} from '~shared/ui/Button/Button';
import {useDisclosure} from '@chakra-ui/hooks';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import {FormControl, FormLabel, Input, Spinner, Textarea} from '@chakra-ui/react';
import {useWindowWidth} from '~shared/hooks/useWindowWidth';
import {isEmailValid} from '~shared/utils/isEmailValid';
import {useStore} from 'effector-react';
import {storeUser} from '~shared/store/User';
import {client} from '~shared/api/Client';
import {useToast} from '@chakra-ui/toast';
export const Footer = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [email, setEmail] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
  const [invalidTitle, setInvalidTitle] = useState<boolean>(false);
  const [invalidText, setInvalidText] = useState<boolean>(false);
  const {isPhone} = useWindowWidth();
  const store = useStore(storeUser);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toast = useToast();

  const resetState = () => {
    setEmail('');
    setTitle('');
    setText('');
    setInvalidEmail(false);
    setInvalidTitle(false);
    setInvalidText(false);
  };

  useEffect(() => {
    if (!isOpen) {
      resetState();
    }
    if (store.user?.email) {
      setEmail(store.user.email);
    }
  }, [isOpen]);

  const handlerChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInvalidEmail(false);
    setEmail(value);
    if (value.trim() === '' || !isEmailValid(value)) {
      setInvalidEmail(true);
    }
  };

  const handlerChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInvalidTitle(false);
    setTitle(value);
    if (value.trim() === '') {
      setInvalidTitle(true);
    }
  };

  const handlerChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInvalidText(false);
    setText(value);
    if (value.trim() === '') {
      setInvalidText(true);
    }
  };

  const sendReport = () => {
    setIsLoading(true);
    client.user
      .sendReport(title, email, text)
      .then((response) => {
        toast({
          title: 'Обратная связь',
          description: 'Успешно отправлено!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        resetState();
        console.log(response);
      })
      .catch((error) => {
        toast({
          title: 'Обратная связь',
          description: 'Не отправлено, попробуйте позже!',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const disabledBtn =
    !email || !title || !text || invalidEmail || invalidTitle || invalidText || isLoading;

  return (
    <>
      <footer className={classes.footer}>
        <Container className={classes.container}>
          <div className={classes.socials}>
            <Button isIcon>
              <Telegram width={32} height={32} />
            </Button>
            <Button isIcon>
              <VK />
            </Button>
            <Button isIcon>
              <Youtube />
            </Button>
          </div>

          <Button text onClick={onOpen}>
            Помощь
          </Button>
        </Container>
      </footer>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size={isPhone ? 'full' : 'md'}>
        <ModalOverlay bg='blackAlpha.500' backdropFilter='blur(5px)' />
        <ModalContent>
          <ModalHeader>Форма обратной связи</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={2}>
              <FormLabel fontSize={'sm'}>
                Email<span style={{color: '#E53E3E'}}>*</span>
              </FormLabel>
              <Input
                isInvalid={invalidEmail}
                placeholder='Email'
                onChange={handlerChangeEmail}
                value={email}
              />
            </FormControl>
            <FormControl mb={2}>
              <FormLabel fontSize={'sm'}>
                Заголовок<span style={{color: '#E53E3E'}}>*</span>
              </FormLabel>
              <Input
                isInvalid={invalidTitle}
                placeholder='Заголовок'
                onChange={handlerChangeTitle}
                value={title}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={'sm'}>
                Письмо<span style={{color: '#E53E3E'}}>*</span>
              </FormLabel>
              <Textarea
                isInvalid={invalidText}
                placeholder='Письмо'
                onChange={handlerChangeText}
                value={text}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button disabled={disabledBtn} onClick={sendReport}>
              {isLoading ? (
                <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='blue.500'
                  size='sm'
                />
              ) : (
                <span>Отправить</span>
              )}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
