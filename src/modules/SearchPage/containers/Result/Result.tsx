import React from 'react';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { Wrapper } from '@/core/components/Wrapper';
import { NotFound } from '../../components/NotFound';
import { NFTCard } from '@/shared/components/NFTCard';
import CardImage from '@/resources/images/nft-card-img.png';
import { paths } from '@/data/paths';

import styles from './Result.module.scss';

export const Result = (): JSX.Element => {
  const router = useRouter();
  const { name } = router.query;

  const buyHandler = () => {
    return null;
  };

  const cardClickHandler = (index: any) => () => {
    router.push({
      pathname: paths.nftDetails,
      query: { id: index },
    });
  };

  if (name !== 'Kitten') {
    return <NotFound name={name} />;
  }

  return (
    <Wrapper>
      <Box className={styles.result}>
        <Typography variant='h4' className={styles.result__title} children={`Searching results: “${name}”`} />
        <div className={styles.result__grid}>
          {Array.from(Array(4).keys()).map((index) => (
            <NFTCard isAdaptive key={index} name='Kitten' price='5.55' onBuy={buyHandler} img={CardImage.src} onCardClick={cardClickHandler(index)} />
          ))}
        </div>
      </Box>
    </Wrapper>
  );
};
