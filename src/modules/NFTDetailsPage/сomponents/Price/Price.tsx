import React from 'react';

import {Button} from '@/shared/components/Button';

import styles from './Price.module.scss';

const Price = (): JSX.Element => {
  return (
    <div className={styles.price}>
      <h4 className={styles.price__title}>Price</h4>
      <div className={styles.price__amount}>5.55 ETH</div>
      <Button children="Buy Now" contained/>
    </div>
  );
};

export default Price;
