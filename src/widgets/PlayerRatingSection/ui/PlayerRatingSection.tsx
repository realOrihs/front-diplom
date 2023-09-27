import React from 'react';
import classes from './PlayerRatingSection.module.scss';
import {Container} from '~shared/ui/Container/Container';

export const PlayerRatingSection = () => {
  return (
    <section className={classes.section}>
      <Container className={classes.container}>
        <h2 className={classes.title}>Рейтинг игроков</h2>
        <div className={classes.items}>
          <div className={classes.item}>
            <span>Cheezzyz</span>
            <span>104m</span>
          </div>
          <div className={classes.item}>
            <span>Da1w</span>
            <span>102m</span>
          </div>
          <div className={classes.item}>
            <span>rdtabear</span>
            <span>102m</span>
          </div>
          <div className={classes.item}>
            <span>Xisomba</span>
            <span>101m</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
