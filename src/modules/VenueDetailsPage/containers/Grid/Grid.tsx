import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { Wrapper } from '@/core/components/Wrapper';
import { NFTCard } from '@/shared/components/NFTCard/NFTCard';
import Img from '@/resources/images/venue-user-img.png';
import { paths } from '@/data/paths';

import styles from './Grid.module.scss';

const Grid = (): JSX.Element => {
  const router = useRouter();

  const buyHandler = () => {
    return null;
  };

  const cardClickHandler =
    (id): any =>
    () => {
      router.push({
        pathname: paths.nftDetails,
        query: { id: id },
      });
    };

  return (
    <Wrapper>
      <Box className={styles.grid}>
        {Array.from(Array(20).keys()).map((index) => (
          <NFTCard
            key={index}
            img={Img.src}
            onBuy={buyHandler}
            price={5.55}
            name='The Lighting of Love'
            onCardClick={cardClickHandler(index)}
            isAdaptive
          />
        ))}
      </Box>
    </Wrapper>
  );
};

export default Grid;
