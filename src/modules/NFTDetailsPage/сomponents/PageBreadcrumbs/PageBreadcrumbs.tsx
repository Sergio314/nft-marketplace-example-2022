import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import { Breadcrumbs } from '@/shared/components/Breadcrumbs/Breadcrumbs';
import { paths } from '@/data/paths';

import styles from './PageBreadcrumbs.module.scss';

const PageBreadcrumbs = (): JSX.Element => {
  const router = useRouter();

  const breadcrumbs = [
    {
      name: 'Home',
      href: paths.home,
    },
    {
      name: 'Item Details',
      href: paths.nftDetails,
      query: { id: router.query.id },
    },
  ];

  return (
    <Box className={styles.breadcrumbs}>
      <Breadcrumbs items={breadcrumbs} />
    </Box>
  );
};

export default PageBreadcrumbs;
