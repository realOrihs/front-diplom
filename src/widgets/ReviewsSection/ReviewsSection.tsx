'use client';
import React, {FC, useEffect, useState} from 'react';
import classes from './ReviewsSection.module.scss';
import {ReviewsSectionProps} from './ReviewsSection.types';
import cx from 'classnames';
import {Container} from '~shared/ui/Container/Container';
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Spinner,
  Text,
  Textarea,
} from '@chakra-ui/react';
import {Review} from '~entities/Review';
import {Button} from '~shared/ui/Button/Button';
import {useStore} from 'effector-react';
import {storeUser} from '~shared/store/User';
import {IReview} from '~shared/types/IReview';
import {client} from '~shared/api/Client';
import {useToast} from '@chakra-ui/toast';
import {BsStarFill, BsStar} from 'react-icons/bs';

export const ReviewsSection: FC<ReviewsSectionProps> = ({className, reviews, placeId}) => {
  const [text, setText] = useState<string>('');
  const [invalidText, setInvalidText] = useState<boolean>(false);
  const {isAuth, user} = useStore(storeUser);
  const [reviewsLocal, setReviewsLocal] = useState<IReview[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [grade, setGrade] = useState<number>(0);
  const [gradeHover, setGradeHover] = useState<number>(0);

  const toast = useToast();

  const resetState = () => {
    setText('');
    setGrade(0);
    setGradeHover(0);
  };

  useEffect(() => {
    setReviewsLocal(reviews);
  }, []);

  const handlerChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInvalidText(false);
    setText(value);
    if (value.trim() === '') {
      setInvalidText(true);
    }
  };

  const sendReview = () => {
    if (user) {
      setIsLoading(true);
      client.reviews
        .sendReview(text, grade, user.id, placeId)
        .then((response) => {
          setReviewsLocal((prev) => [
            ...prev,
            {
              id: response.data.id,
              attributes: {
                ...response.data.attributes,
                user: {data: {id: user.id, attributes: user}},
              },
            },
          ]);
          toast({
            title: 'Отзыв',
            description: 'Успешно отправлен!',
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
          resetState();
        })
        .catch((error) => {
          toast({
            title: 'Отзыв',
            description: 'Не отправлен, попробуйте позже!',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const isFillStar = (gradeValue: number): boolean => {
    if (gradeHover !== grade) {
      return gradeHover > gradeValue;
    } else {
      return grade > gradeValue;
    }
  };

  const disabledBtn = !text || invalidText || isLoading;

  return (
    <section className={cx(classes.section, className)}>
      <Container>
        <Card size='sm'>
          <CardHeader>
            <Heading textAlign={'center'}>Отзывы</Heading>
          </CardHeader>
          <CardBody
            display={'flex'}
            flexDirection={'column'}
            gap={4}
            pl={{base: 2, sm: 4, md: 8, lg: 12}}
            pr={{base: 2, sm: 4, md: 8, lg: 12}}
          >
            {reviews.length > 0 ? (
              <div className={classes.reviews}>
                {reviewsLocal.map((review) => (
                  <Review
                    key={`review_${review.id}`}
                    username={review.attributes.user.data?.attributes.username ?? ''}
                    text={review.attributes.content}
                    avatarURL={review.attributes.user.data?.attributes.icon ?? ''}
                    grade={review.attributes.grade}
                  />
                ))}
              </div>
            ) : (
              <Text>Нет отзывов на данный сервис 🤨</Text>
            )}
            {isAuth && (
              <>
                <FormControl mb={2}>
                  <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <FormLabel>Оставьте отзыв</FormLabel>
                    <Box display={'flex'} gap={1}>
                      <Icon
                        onMouseEnter={() => setGradeHover(1)}
                        onMouseLeave={() => setGradeHover(grade)}
                        onClick={() => setGrade(1)}
                        cursor={'pointer'}
                        fontSize={'sm'}
                        as={isFillStar(0) ? BsStarFill : BsStar}
                      ></Icon>
                      <Icon
                        onMouseEnter={() => setGradeHover(2)}
                        onMouseLeave={() => setGradeHover(grade)}
                        onClick={() => setGrade(2)}
                        cursor={'pointer'}
                        fontSize={'sm'}
                        as={isFillStar(1) ? BsStarFill : BsStar}
                      ></Icon>
                      <Icon
                        onMouseEnter={() => setGradeHover(3)}
                        onMouseLeave={() => setGradeHover(grade)}
                        onClick={() => setGrade(3)}
                        cursor={'pointer'}
                        fontSize={'sm'}
                        as={isFillStar(2) ? BsStarFill : BsStar}
                      ></Icon>
                      <Icon
                        onMouseEnter={() => setGradeHover(4)}
                        onMouseLeave={() => setGradeHover(grade)}
                        onClick={() => setGrade(4)}
                        cursor={'pointer'}
                        fontSize={'sm'}
                        as={isFillStar(3) ? BsStarFill : BsStar}
                      ></Icon>
                      <Icon
                        onMouseEnter={() => setGradeHover(5)}
                        onMouseLeave={() => setGradeHover(grade)}
                        onClick={() => setGrade(5)}
                        cursor={'pointer'}
                        fontSize={'sm'}
                        as={isFillStar(4) ? BsStarFill : BsStar}
                      ></Icon>
                    </Box>
                  </Box>
                  <Textarea placeholder='Письмо' onChange={handlerChangeText} value={text} />
                </FormControl>
                <div className={classes.btnWrapper}>
                  <Button disabled={disabledBtn} onClick={sendReview}>
                    {isLoading ? (
                      <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='sm'
                      />
                    ) : (
                      <span>Отправить</span>
                    )}
                  </Button>
                </div>
              </>
            )}
          </CardBody>
        </Card>
      </Container>
    </section>
  );
};
