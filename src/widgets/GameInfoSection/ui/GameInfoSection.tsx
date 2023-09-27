import React, {FC} from 'react';
import classes from './GameInfoSection.module.scss';
import {IGameInfo} from '~shared/types/IGameInfo';
import {Container} from '~shared/ui/Container/Container';
import {Button} from '~shared/ui/Button/Button';
import {YoutubePlayer} from '~shared/ui/YoutubePlayer/YoutubePlayer';
import {Person} from '~shared/ui/Icons/Person';
import {Gamepad} from '~shared/ui/Icons/Gamepad';
import {World} from '~shared/ui/Icons/World';
import {Packman} from '~shared/ui/Icons/Packman';
import {SwiperImages} from '~shared/ui/SwiperImages/SwiperImages';

interface GameInfoSectionProps {
  gameInfo: IGameInfo;
}

export const GameInfoSection: FC<GameInfoSectionProps> = ({gameInfo}) => {
  return (
    <section>
      <Container className={classes.container}>
        <div className={classes.row}>
          <div className={classes.content}>
            <h2 className={classes.title}>{gameInfo.title}</h2>
            <p className={classes.description}>{gameInfo.description}</p>
            <div className={classes.table}>
              <div className={classes.tableRow}>
                <Person /> {gameInfo.target.age}
              </div>
              <div className={classes.tableRow}>
                <Gamepad /> {gameInfo.tags[0].label}
              </div>
              <div className={classes.tableRow}>
                <World />
                {gameInfo.target.location}
              </div>
              <div className={classes.tableRow}>
                <Packman />
                {gameInfo.tags[1].label}
              </div>
            </div>
            <Button isLink href={gameInfo.link}>
              Перейти на itch.io
            </Button>
          </div>
          <div className={classes.videoWrapper}>
            {gameInfo.embedId && <YoutubePlayer embedId={gameInfo.embedId} />}
          </div>
        </div>
        <SwiperImages images={gameInfo.images} />
      </Container>
    </section>
  );
};
