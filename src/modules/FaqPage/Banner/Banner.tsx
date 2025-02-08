import { Box } from '@mui/material';

import { Wrapper } from '@/core/components/Wrapper';
import { Breadcrumbs } from '@/shared/components/Breadcrumbs';
import { paths } from '@/data/paths';

import styles from './Banner.module.scss';

const breadcrumbs = [
  {
    href: paths.home,
    name: 'Home',
  },
  {
    href: paths.faq,
    name: 'FAQ',
  },
];

export const Banner = (): JSX.Element => {
  return (
    <Box className={styles.banner}>
      <Wrapper customClass={styles.banner__container}>
        <Breadcrumbs items={breadcrumbs} />
        <Box className={styles.banner__title}>FAQ</Box>
      </Wrapper>
    </Box>
  );
};
