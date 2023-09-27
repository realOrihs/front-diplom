'use client';
import '~shared/assets/styles/globals.scss';

import {MODAL_PORTAL_ID} from '~shared/config/constants';
import React, {useEffect, useState} from 'react';
import {Header} from '~widgets/Header';
import {Footer} from '~widgets/Footer';
import {Providers} from './providers';
import localFont from 'next/font/local';
import {extendTheme} from '@chakra-ui/react';
import {usePathname} from 'next/navigation';
import {useStore} from 'effector-react';
import {setUser, storeUser} from '~shared/store/User';
import {client} from '~shared/api/Client';
import {PageWrapper} from '~app/page-wrapper';
import {Preloader} from '~shared/ui/Preloader';

const GTEestiProDisplay = localFont({
  src: [
    {
      path: '../shared/assets/fonts/GTEestiProDisplay-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/GTEestiProDisplay-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/GTEestiProDisplay-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/GTEestiProDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/GTEestiProDisplay-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/GTEestiProDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/GTEestiProDisplay-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/GTEestiProDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/GTEestiProDisplay-UltraBold.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/GTEestiProDisplay-UltraBold.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const store = useStore(storeUser);
  useEffect(() => {
    if (!store.isAuth) {
      setIsLoading(true);
      client.user
        .me()
        .then((response) => {
          setUser(response);
          setIsLoading(false);
        })
        .catch((error) => {
          localStorage.removeItem('accessToken');
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <html lang='en'>
      <head>
        <link href='/favicon.ico' rel='icon' sizes='any' />
        <title>RSC</title>
      </head>
      <body className={GTEestiProDisplay.className}>
        <Providers font={GTEestiProDisplay}>
          <div className='global-container'>
            {isLoading ? (
              <PageWrapper>
                <Preloader />
              </PageWrapper>
            ) : (
              <>
                {pathname !== '/connect/vk/redirect' && <Header />}
                {children}
                {pathname !== '/connect/vk/redirect' && <Footer />}
              </>
            )}
          </div>
          <div id={MODAL_PORTAL_ID} />
        </Providers>
      </body>
    </html>
  );
}
