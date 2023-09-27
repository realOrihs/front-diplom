'use client';
import React, {FC} from 'react';
import classes from './BlogSection.module.scss';
import {Container} from '~shared/ui/Container/Container';
import {Post} from '~entities/Post';
import {BlogSectionProps} from './BlogSection.types';
import cx from 'classnames';
import {Box, Text} from '@chakra-ui/react';

export const BlogSection: FC<BlogSectionProps> = ({className, posts}) => {
  return (
    <section className={cx(classes.section, className)}>
      <Container className={classes.container}>
        <Box display={'flex'} flexDirection={'column'} gap={4}>
          {posts.length > 0 ? (
            <>
              {posts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </>
          ) : (
            <Text>Нет постов!</Text>
          )}
        </Box>
      </Container>
    </section>
  );
};
