import React, { ReactElement } from 'react';

import { MainLayout } from './main-layout';

export function getLayout(page: ReactElement): ReactElement {
  return <MainLayout>{page}</MainLayout>;
}
