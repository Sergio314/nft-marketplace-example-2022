import {Box, Typography} from '@mui/material';

import {Wrapper} from '@/core/components/Wrapper';
import {Breadcrumbs} from '@/shared/components/Breadcrumbs';

import styles from './Banner.module.scss';

const breadcrumbs = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Searching results',
    href: '/search'
  }
];

export const Banner = (): JSX.Element => {
  return (
    <Box className={styles.banner}>
      <Wrapper>
        <Breadcrumbs items={breadcrumbs}/>
        <Typography
          variant='h3'
          children='Searching results'
          className={styles.banner__title}
        />
      </Wrapper>
    </Box>
  );
};
