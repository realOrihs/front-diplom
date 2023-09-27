import React from 'react';
import {PageWrapper} from '~app/page-wrapper';
import {Signup} from '~widgets/Signup';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'RSC - регистрация',
};

export default function SignUp() {
  return (
    <>
      <PageWrapper>
        <Signup />
      </PageWrapper>
    </>
  );
}
