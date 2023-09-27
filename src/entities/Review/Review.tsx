'use client';
import React, {FC} from 'react';
import classes from './Review.module.scss';
import {ReviewProps} from './Review.types';
import cx from 'classnames';
import {Avatar, Box, Icon, Text} from '@chakra-ui/react';
import {BsStar, BsStarFill} from 'react-icons/bs';

export const Review: FC<ReviewProps> = ({className, text, username, avatarURL, grade}) => {
  return (
    <Box
      display={'grid'}
      gridTemplateColumns={'80px 1fr'}
      gap={2}
      className={cx(classes.review, className)}
    >
      <Avatar size='lg' name={username} src={avatarURL} />
      <Box className={classes.content}>
        <Box display={'flex'} gap={4} alignItems={'center'}>
          <Text fontSize={'lg'} fontWeight={500}>
            {username}
          </Text>
          <Box display={'flex'} gap={1}>
            <Icon fontSize={'sm'} as={grade > 0 ? BsStarFill : BsStar}></Icon>
            <Icon fontSize={'sm'} as={grade > 1 ? BsStarFill : BsStar}></Icon>
            <Icon fontSize={'sm'} as={grade > 2 ? BsStarFill : BsStar}></Icon>
            <Icon fontSize={'sm'} as={grade > 3 ? BsStarFill : BsStar}></Icon>
            <Icon fontSize={'sm'} as={grade > 4 ? BsStarFill : BsStar}></Icon>
          </Box>
        </Box>
        <Text>{text}</Text>
      </Box>
    </Box>
  );
};
