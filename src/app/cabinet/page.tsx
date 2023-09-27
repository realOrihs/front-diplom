'use client';
import {useStore} from 'effector-react';
import {logout, storeUser} from '~shared/store/User';
import {useRouter} from 'next/navigation';
import {PageWrapper} from '~app/page-wrapper';
import {Container} from '~shared/ui/Container/Container';
import {Preloader} from '~shared/ui/Preloader';
import {Avatar, Box, Card, CardBody, Text} from '@chakra-ui/react';
import React from 'react';
import {Button} from '~shared/ui/Button/Button';

export default function Cabinet() {
  const {isAuth, user} = useStore(storeUser);
  const router = useRouter();
  if (typeof window === 'undefined') {
    return (
      <>
        <PageWrapper>
          <Preloader />
        </PageWrapper>
      </>
    );
  }
  if (!isAuth || !user) {
    router.push('/');
  } else {
    return (
      <>
        <PageWrapper>
          <Container>
            <Card size={'sm'} mt={8}>
              <CardBody display={'flex'} justifyContent={'space-between'}>
                <Box display={'flex'} gap={4}>
                  <Avatar size='md' name={user.username} src={user.icon ?? ''} />
                  <Box>
                    <Text>
                      <span style={{fontWeight: 'bold'}}>Login:</span> {user.username}
                    </Text>
                    <Text>
                      <span style={{fontWeight: 'bold'}}>Email:</span> {user.email}
                    </Text>
                  </Box>
                </Box>
                <Button
                  onClick={() => {
                    localStorage.removeItem('accessToken');
                    logout();
                    router.push('/');
                  }}
                >
                  Выход
                </Button>
              </CardBody>
            </Card>
          </Container>
        </PageWrapper>
      </>
    );
  }
}
