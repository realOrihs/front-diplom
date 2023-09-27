import React from 'react';
import {BreadcrumbsSection} from '~widgets/BreadcrumbsSection';
import {IBreadcrumb} from '~shared/types/IBreadcrumb';
import {Navigate} from '~shared/ui/Navigate/Navigate';
import {PageWrapper} from '~app/page-wrapper';
import {ServiceSection} from '~widgets/ServiceSection';
import {ReviewsSection} from '~widgets/ReviewsSection';
import {client} from '~shared/api/Client';
import {IService} from '~shared/types/IService';
import {Metadata} from 'next';

interface GameProps {
  params: {id: string};
}

async function _getServiceById(id: string): Promise<IService | null> {
  try {
    const response = await client.services.getServiceById(id);
    return response.data;
  } catch (e) {
    return null;
  }
}

export async function generateMetadata({params}: GameProps): Promise<Metadata> {
  const service = await _getServiceById(params.id);
  if (service?.attributes) {
    return {
      title: 'RSC - ' + service?.attributes.name,
    };
  }
  return {
    title: 'RSC',
  };
}

export default async function Service({params}: GameProps) {
  const service = await _getServiceById(params.id);
  if (!service) return <Navigate to={'/'} />;

  const reviews = service.attributes.reviews?.data ?? [];

  const breadcrumbsItems: IBreadcrumb[] = [
    {label: 'Главная', url: '/'},
    {label: service.attributes.name, url: `/service/${params.id}`},
  ];

  return (
    <>
      <PageWrapper>
        <BreadcrumbsSection items={breadcrumbsItems} />
        <ServiceSection service={service} />
        <ReviewsSection reviews={reviews} placeId={service.id} />
      </PageWrapper>
    </>
  );
}
