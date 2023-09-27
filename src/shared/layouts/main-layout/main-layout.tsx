import React, { FC } from 'react';

import { MODAL_PORTAL_ID } from '~shared/config/constants';

export const MainLayout: FC = ({ children }) => {
  return (
    <>
      <div className="main-layout">
        <div>LAYOUT</div>
        <main className="content">{children}</main>
        <div id={MODAL_PORTAL_ID} />
      </div>
    </>
  );
};
