import React from 'react';
import {IGameInfo} from '~shared/types/IGameInfo';
import {BreadcrumbsSection} from '~widgets/BreadcrumbsSection';
import {IBreadcrumb} from '~shared/types/IBreadcrumb';
import {GameInfoSection} from '~widgets/GameInfoSection';
import {Navigate} from '~shared/ui/Navigate/Navigate';
import {PageWrapper} from '~app/page-wrapper';

interface GameProps {
  params: {id: string};
}

async function getGameInfo(id: string): Promise<IGameInfo | null> {
  const response = await fetch(process.env.URL + `/api/games/${id}`, {method: 'GET'});
  if (response.ok) {
    return response.json();
  }
  return null;
}

export default async function Game({params}: GameProps) {
  const gameInfo = await getGameInfo(params.id);

  if (!gameInfo) return <Navigate to={'/'} />;

  const breadcrumbsItems: IBreadcrumb[] = [
    {label: 'Портфолио', url: '/'},
    {label: gameInfo.title, url: `/games/${params.id}`},
  ];

  return (
    <PageWrapper>
      <BreadcrumbsSection items={breadcrumbsItems} />
      <GameInfoSection gameInfo={gameInfo} />
    </PageWrapper>
  );
}
