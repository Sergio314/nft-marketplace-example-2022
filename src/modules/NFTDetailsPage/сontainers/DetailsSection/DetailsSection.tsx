import React from 'react';
import {Box, IconButton} from '@mui/material';

import Tabs from '../../сomponents/Tabs/Tabs';
import Users from '../../сomponents/Users/Users';
import Price from '../../сomponents/Price/Price';

import PlayIcon from '@/resources/icons/play.svg';
import BallIcon from '@/resources/icons/ball-gradient.svg';
import AvatarImg from '@/resources/images/nft-details-img.jpg';

import styles from './DetailsSection.module.scss';

export const DetailsSection = (): JSX.Element => {
  return (
    <div className={styles.details}>
      <div className={styles.details__body}>
        <h2 className={styles.details__info__title__mobile}>Serena #591</h2>
        <div className={styles.details__imageWrapper}>
          <img src={AvatarImg.src} alt="NFT image"/>
          <IconButton className={styles.details__playBtn}>
            <PlayIcon/>
          </IconButton>
        </div>
        <div className={styles.details__info}>
          <h2 className={styles.details__info__title}>Serena #591</h2>
          <p className={styles.details__info__description}>
            Your generative DJ. Hiting play destroys the previous song and creates a brand new song in real-time.
          </p>
          <Users/>
          <Price/>
          <Tabs/>
        </div>
      </div>
      <Box className={styles.details__ball_bottom}>
        <BallIcon/>
      </Box>
    </div>
  );
}

export default DetailsSection;
