import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import { NFTCard } from '@/shared/components/NFTCard/NFTCard';
import Image from '@/resources/images/nft-card-img.png';
import { paths } from '@/data/paths';

import styles from './Grid.module.scss';

const Grid = (): JSX.Element => {
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
    <Box className={styles.grid}>
      {Array.from(Array(20).keys()).map((index) => (
        <NFTCard
          key={index}
          img={Image.src}
          name='The Lighting of Love'
          price='5.55'
          onBuy={buyHandler}
          isAdaptive
          onCardClick={cardClickHandler(index)}
        />
      ))}
    </Box>
  );
};

export default Grid;
