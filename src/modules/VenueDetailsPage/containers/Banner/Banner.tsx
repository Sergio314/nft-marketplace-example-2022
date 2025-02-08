import { IconButton, Box } from '@mui/material';

import { paths } from '@/data/paths';
import { Wrapper } from '@/core/components/Wrapper';
import { Avatar } from '@/shared/components/Avatar/Avatar';
import { Breadcrumbs } from '@/shared/components/Breadcrumbs/Breadcrumbs';

import Share from '@/resources/icons/share-outlined.svg';
import UserImg from '@/resources/images/venue-user-img.png';

import styles from './Banner.module.scss';

const breadcrumbs = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: paths.venue,
    name: 'Venue NFTs',
  },
];

export const Banner = (): JSX.Element => {
  return (
    <Box className={styles.banner}>
      <Wrapper customClass={styles.banner__container}>
        <Breadcrumbs items={breadcrumbs} />
        <Box className={styles.banner__userImg}>
          <Avatar src={UserImg.src}/>
        </Box>
        <IconButton className={styles.banner__share_btn}>
          <Share />
        </IconButton>
      </Wrapper>
    </Box>
  );
};

export default Banner;
