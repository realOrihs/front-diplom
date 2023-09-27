import React, {FC} from 'react';
import classes from './PostSection.module.scss';
import {PostSectionProps} from './PostSection.types';
import cx from 'classnames';
import {Container} from '~shared/ui/Container/Container';
import {Post} from '~entities/Post';

export const PostSection: FC<PostSectionProps> = ({className, post}) => {
  return (
    <section className={cx(classes.section, className)}>
      <Container>
        <Post fullMode post={post} />
      </Container>
    </section>
  );
};
