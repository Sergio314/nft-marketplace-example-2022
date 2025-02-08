import React from 'react';

import OwnerImg from '@/resources/images/nft-details-owner-img.jpg';
import CreatorImg from '@/resources/images/nft-details-creator-img.jpg';

import styles from './Users.module.scss';

const Users = (): JSX.Element => {
  return (
    <div className={styles.users}>
      <div className={styles.users__wrapper}>
        <img src={OwnerImg.src} alt="Owner avatar"/>
        <div className={styles.users__info}>
          <div className={styles.users__info__title}>Owner</div>
          <div className={styles.users__info__username}>bbc2021</div>
        </div>
      </div>
      <div className={styles.users__wrapper}>
        <img src={CreatorImg.src} alt="Creator avatar"/>
        <div className={styles.users__info}>
          <div className={styles.users__info__title}>Creator</div>
          <div className={styles.users__info__username}>0x_music</div>
        </div>
      </div>
    </div>
  );
}

export default Users;
