import { Button } from '@/shared/components/Button';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { NftList } from '../../components/NftList';
import { paths } from '@/data/paths';

import styles from './LatestNFT.module.scss';

export const LatestNFT = () => {
  const router = useRouter();
  const [filter, setFilter] = useState(-1);

  const filterClickHandler = (index) => () => {
    setFilter((prevState) => (prevState === index ? -1 : index));
  };

  const moreNFTsHandler = () => {
    router.push(paths.nftListings);
  };

  return (
    <div className={styles.latestNFT}>
      <div className={styles.latestNFT__head}>
        <div className={styles.latestNFT__title}>Latest NFT’s</div>
        <Button onClick={moreNFTsHandler} contained>
          More NFT’s
        </Button>
      </div>
      <NftList />
    </div>
  );
};
