import React from 'react';

import styles from './Details.module.scss';

const Details = (): JSX.Element => {
  return (
    <div className={styles.details}>
      <div className={styles.details__row}>
        <div className={styles.details__row__label}>
          Contract Address
        </div>
        <div className={styles.details__row__value}>
          0x37a0...6535
        </div>
      </div>
      <div className={styles.details__row}>
        <div className={styles.details__row__label}>
          Token ID
        </div>
        <div className={styles.details__row__value}>
          6805647338418769...
        </div>
      </div>
      <div className={styles.details__row}>
        <div className={styles.details__row__label}>
          Token Standard
        </div>
        <div className={styles.details__row__value}>
          ERC-720
        </div>
      </div>
      <div className={styles.details__row}>
        <div className={styles.details__row__label}>
          Blockchain
        </div>
        <div className={styles.details__row__value}>
          Ethereum
        </div>
      </div>
    </div>
  );
}

export default Details;
