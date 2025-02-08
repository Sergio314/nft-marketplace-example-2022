import React from 'react';

import ManImg from '@/resources/images/nft-details-owner-img.jpg';

import styles from './Owners.module.scss';

interface OwnerProps {
  username: string;
  description: string;
  img: string;
}

const owners: OwnerProps[] = [
  {
    username: 'bbc2021',
    description: 'bought for 5.55 ETH  each',
    img: ManImg.src
  },
  {
    username: 'bbc2021',
    description: 'bought for 5.55 ETH  each',
    img: ManImg.src
  },
  {
    username: 'bbc2021',
    description: 'bought for 5.55 ETH  each',
    img: ManImg.src
  }
];

const Owners = (): JSX.Element => {
  return (
    <div className={styles.owners}>
      {owners.map((value, index) => (
        <div key={index} className={styles.owners__owner}>
          <img src={value.img} alt={value.username}/>
          <div className={styles.owners__owner__info}>
            <div className={styles.owners__owner__username}>{value.username}</div>
            <div className={styles.owners__owner__description}>{value.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Owners;
