import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import { NFTCard } from '@/shared/components/NFTCard/NFTCard';
import { Wrapper } from '@/core/components/Wrapper';
import Img from '@/resources/images/nft-card-img.png';
import { paths } from '@/data/paths';

import styles from './Grid.module.scss';

export const Grid = (): JSX.Element => {
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
