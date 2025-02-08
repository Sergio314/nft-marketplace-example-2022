import { Button } from '@/shared/components/Button';
import { Swiper, SwiperSlide } from 'swiper/react';

import { venueCards } from './constants';
import { VenueCard } from '@/shared/components/VenueCard';
import { useRouter } from 'next/router';
import { paths } from '@/data/paths';
import useCheckMobileScreen from '@/core/hooks/useCheckMobileScreen';

import styles from './Venue.module.scss';

export const Venue = () => {
  const router = useRouter();
  const isMobile = useCheckMobileScreen();

  const handleMoreButton = () => router.push(paths.venues);

  return (
    <div className={styles.venue}>
      <div className={styles.venue__head}>
        <div className={styles.venue__title}>Venue</div>
        <Button onClick={handleMoreButton} contained>
          More Venues
        </Button>
      </div>
      <div className={styles.venue__list_desktop}>
        <Swiper spaceBetween={30} slidesPerView={isMobile ? 1 : 4}>
          {venueCards.map((el, key) => (
            <SwiperSlide key={key}>
              <VenueCard title={el.title} imgPath={el.imgPath} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
