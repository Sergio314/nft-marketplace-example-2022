import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import { NFTCard } from '@/shared/components/NFTCard/NFTCard';
import CardImage from '@/resources/images/nft-card-img.png';
import { paths } from '@/data/paths';

import styles from './ExploreSection.module.scss';

const ExploreSection = (): JSX.Element => {
  const router = useRouter();
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
    <Box className={styles.explore}>
      <h3 className={styles.explore__title}>Explore More</h3>
      <div className={styles.explore__list}>
        {Array.from(Array(4).keys()).map((index) => (
          <NFTCard
            key={index}
            img={CardImage.src}
            name='The Lighting of Love'
            price='5.55'
            onBuy={buyHandler}
            isAdaptive
            onCardClick={cardClickHandler(index)}
          />
        ))}
      </div>
    </Box>
  );
};

export default ExploreSection;
