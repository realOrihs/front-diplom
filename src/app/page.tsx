import React from 'react';
import {WelcomeSection} from '~widgets/WelcomeSection';
import {PromotedServicesSection} from '~widgets/PromotedServicesSection';
import {PageWrapper} from '~app/page-wrapper';
import {client} from '~shared/api/Client';
import {IService} from '~shared/types/IService';
import {Head} from 'next/document';
import {Metadata} from 'next';

async function _getPromotedServices(): Promise<IService[]> {
  try {
    const response = await client.services.getPromotedServices();

    return response.data;
  } catch (e) {
    return [];
  }
}

export const metadata: Metadata = {
  title: 'RSC - главная',
};

export const dynamic = 'force-dynamic';

export default async function Page() {
  const services = await _getPromotedServices();
  return (
    <>
      <PageWrapper>
        {/* <Line height='45px' width='200vw' color='#FFDC62' rotate={135} right='0px' top='190px' />
      <Line height='120px' width='200vw' color='#E97839' rotate={135} right='-100px' top='190px' />
      <Line height='45px' width='200vw' color='#C52D36' rotate={135} right='-275px' top='190px' />*/}
        <WelcomeSection />
        <PromotedServicesSection services={services} />
        {/* <Line height='55px' width='200vw' color='#FFDC62' rotate={135} left='-400px' />
      <Line height='135px' width='200vw' color='#E97839' rotate={135} left='-280px' />
      <Line height='55px' width='200vw' color='#C52D36' rotate={135} left='-80px' />*/}
      </PageWrapper>
    </>
  );
}
