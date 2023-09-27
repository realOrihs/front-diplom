import React from 'react';
import {Login} from '~widgets/Login';
import {PageWrapper} from '~app/page-wrapper';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'RSC - авторизация',
};

export default function Auth() {
  return (
    <>
      <PageWrapper>
        <Login />
      </PageWrapper>
    </>
  );
}
