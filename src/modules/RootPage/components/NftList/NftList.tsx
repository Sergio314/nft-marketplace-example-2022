import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';

import Img from '@/resources/images/nft-card-img.png';
import { NFTCard } from '@/shared/components/NFTCard';
import { paths } from '@/data/paths';
import useCheckMobileScreen from '@/core/hooks/useCheckMobileScreen';

import styles from './NftList.module.scss';

export const NftList = () => {
  const router = useRouter();
  const isMobile = useCheckMobileScreen();

  const buyHandler = () => {
    return null;
  };

  const cardClickHandler = (index: any) => () => {
    router.push({
      pathname: paths.nftDetails,
      query: { id: index },
    });
  };

  return (
    <div className={styles.nftList}>
      <Swiper spaceBetween={30} slidesPerView={isMobile ? 1 : 4}>
        {new Array(8).fill(null).map((el, index) => (
          <SwiperSlide key={index}>
            <NFTCard img={Img.src} onBuy={buyHandler} price={5.55} name='The Lighting of Love' onCardClick={cardClickHandler(index)} isAdaptive />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
