'use client';
import React, {useState} from 'react';
import classes from './Header.module.scss';
import Link from 'next/link';
import {Logo} from '~shared/ui/Icons/Logo';
import {Container} from '~shared/ui/Container/Container';
import {usePathname} from 'next/navigation';
import cx from 'classnames';
import {Button} from '~shared/ui/Button/Button';
import {useWindowWidth} from '~shared/hooks/useWindowWidth';
import {CloseIcon, HamburgerIcon} from '@chakra-ui/icons';
import {signIn} from 'next-auth/react';
import {authConfig} from '~shared/config/auth';
import VkProvider from 'next-auth/providers/vk';
import {useStore} from 'effector-react';
import {storeUser} from '~shared/store/User';
import {Avatar} from '@chakra-ui/react';

export const Header = () => {
  const currentRoute = usePathname();
  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false);
  const {isTablet, isDesktop, isPhone} = useWindowWidth();
  const store = useStore(storeUser);
  const changeShowMenuMobile = () => {
    if (!isDesktop) {
      setShowMenuMobile((prev) => !prev);
    } else {
      setShowMenuMobile(false);
    }
  };

  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <div className={classes.row}>
          <Link
            href={'/'}
            className={classes.logoWrapperLink}
            onClick={() => setShowMenuMobile(false)}
          >
            <Logo width={100} height={40} fill={'#FFF'} />
          </Link>
          <nav className={cx(classes.nav, showMenuMobile && classes.isOpen)}>
            <Link
              href={'/'}
              className={cx(classes.link, currentRoute === '/' && classes.linkActive)}
              onClick={() => setShowMenuMobile(false)}
            >
              Главная
            </Link>
            <Link
              href={'/catalog'}
              className={cx(
                classes.link,
                (currentRoute === '/catalog' || currentRoute.startsWith('/service')) &&
                  classes.linkActive,
              )}
              onClick={() => setShowMenuMobile(false)}
            >
              Каталог
            </Link>
            <Link
              href={'/blog'}
              className={cx(
                classes.link,
                (currentRoute === '/blog' || currentRoute.startsWith('/blog')) &&
                  classes.linkActive,
              )}
              onClick={() => setShowMenuMobile(false)}
            >
              Блог
            </Link>
          </nav>
        </div>

        {!store.isAuth || !store.user ? (
          <>
            {!isDesktop ? (
              <div className={classes.burgerWrapper}>
                <Button isLink href={'/signin'} onClick={() => setShowMenuMobile(false)}>
                  Войти
                </Button>
                <Button className={classes.burgerBtn} isIcon onClick={changeShowMenuMobile}>
                  {showMenuMobile ? <CloseIcon boxSize={5} /> : <HamburgerIcon boxSize={8} />}
                </Button>
              </div>
            ) : (
              <Button isLink href={'/signin'}>
                Войти
              </Button>
            )}
          </>
        ) : (
          <>
            {!isDesktop ? (
              <div className={classes.burgerWrapper}>
                <Button isIcon isLink href={'/cabinet'} onClick={() => setShowMenuMobile(false)}>
                  <Avatar size='md' name={store.user.username} src={store.user?.icon ?? ''} />
                </Button>
                <Button className={classes.burgerBtn} isIcon onClick={changeShowMenuMobile}>
                  {showMenuMobile ? <CloseIcon boxSize={5} /> : <HamburgerIcon boxSize={8} />}
                </Button>
              </div>
            ) : (
              <Button isIcon isLink href={'/cabinet'}>
                <Avatar size='md' name={store.user.username} src={store.user.icon ?? ''} />
              </Button>
            )}
          </>
        )}
      </Container>
    </header>
  );
};
