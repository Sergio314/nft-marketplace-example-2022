import React from 'react';

import ManImg from '@/resources/images/nft-details-owner-img.jpg';

import styles from './History.module.scss';

interface HistoryProps {
  username: string;
  description: string;
  img: string;
}

const history: HistoryProps[] = [
  {
    username: 'bbc2021',
    description: 'sale for 5.55 ETH  each',
    img: ManImg.src
  },
  {
    username: 'bbc2021',
    description: 'sale for 5.55 ETH  each',
    img: ManImg.src
  }
];

const History = (): JSX.Element => {
  return (
    <div className={styles.histories}>
      {history.map((value, index) => (
        <div key={index} className={styles.histories__history}>
          <img src={value.img} alt={value.username}/>
          <div className={styles.histories__history__info}>
            <div className={styles.histories__history__username}>{value.username}</div>
            <div className={styles.histories__history__description}>{value.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
