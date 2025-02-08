import { Box } from '@mui/material';
import { Wrapper } from '@/core/components/Wrapper';
import { Breadcrumbs } from '@/shared/components/Breadcrumbs/Breadcrumbs';
import { paths } from '@/data/paths';

import styles from './Banner.module.scss';

const breadcrumbs = [
  {
    href: paths.home,
    name: 'Home',
  },
  {
    href: paths.nftListings,
    name: 'NFT Listings',
  },
];

export const Banner = (): JSX.Element => {
  return (
    <Box className={styles.banner}>
      <Wrapper customClass={styles.banner__container}>
        <Breadcrumbs items={breadcrumbs} />
        <Box className={styles.banner__title}>NFT Marketplace example</Box>
      </Wrapper>
    </Box>
  );
};
