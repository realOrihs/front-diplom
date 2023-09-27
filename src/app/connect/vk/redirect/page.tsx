'use client';
import {Preloader} from '~shared/ui/Preloader';
import {PageWrapper} from '~app/page-wrapper';
import {useEffect} from 'react';
import {client} from '~shared/api/Client';
import {useRouter} from 'next/navigation';
import {useToast} from '@chakra-ui/toast';
import {useStore} from 'effector-react';
import {storeUser, setUser} from '~shared/store/User';

export default function VkRedirect() {
  const router = useRouter();
  const toast = useToast();
  const store = useStore(storeUser);

  useEffect(() => {
    const query = window ? window.location.href.split('?')[1] : '';

    client.user
      .authVKCallback(query)
      .then((response) => {
        localStorage.setItem('accessToken', response.jwt);
        setUser(response.user);
        toast({
          title: 'Авторизация через VK',
          description: 'Прошла успешно!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        router.push('/');
      })
      .catch((error) => {
        toast({
          title: 'Авторизация через VK',
          description: 'Не прошла. Попробуйте позже',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        router.push('/');
      });
  }, []);

  return (
    <PageWrapper>
      <Preloader />
    </PageWrapper>
  );
}
