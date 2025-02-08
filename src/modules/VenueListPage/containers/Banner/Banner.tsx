import { Wrapper } from '@/core/components/Wrapper';
import { Box, Typography } from '@mui/material';
import { Breadcrumbs } from '@/shared/components/Breadcrumbs/Breadcrumbs';

import styles from './Banner.module.scss';

const breadcrumbs = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/venues',
    name: 'Venues',
  },
];

export const Banner = () => {
  return (
    <Box className={styles.banner}>
      <Wrapper>
        <Breadcrumbs items={breadcrumbs} />
        <Typography className={styles.banner__title}>Welcome to the Venue page!</Typography>
      </Wrapper>
    </Box>
  );
};
