'use client';
import React, {FC} from 'react';
import classes from './SwiperImages.module.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {IImage} from '~shared/types/IImage';
import Image from 'next/image';

interface SwiperImagesProps {
  images: IImage[];
}

export const SwiperImages: FC<SwiperImagesProps> = ({images}) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={classes.swiper}
      >
        {images.map((image) => (
          <SwiperSlide className={classes.imageWrapper} key={`image-swiper-${image.id}`}>
            <Image
              objectFit={'contain'}
              priority
              fill
              src={image.url}
              alt={'image-for-slider' + image.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
