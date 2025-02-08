import { Box, IconButton } from '@mui/material';
import { Wrapper } from '@/core/components/Wrapper';
import { Avatar } from '@/shared/components/Avatar/Avatar';
import { Breadcrumbs } from '@/shared/components/Breadcrumbs/Breadcrumbs';
import TwitterIcon from '@/resources/icons/twitter.svg';
import FacebookIcon from '@/resources/icons/facebook.svg';
import ShareIcon from '@/resources/icons/share-outlined.svg';
import AvatarImg from '@/resources/images/venue-user-img.png';
import { paths } from '@/data/paths';
import styles from './Banner.module.scss';

const breadcrumbs = [
  {
    name: 'Home',
    href: paths.home,
  },
  {
    name: 'NFT Listings',
    href: paths.nftListings,
  },
  {
    name: 'Item',
    href: paths.nftDetails,
    query: { id: '2' },
  },
  {
    name: 'Creator',
    href: paths.creator,
  },
];

export const Banner = (): JSX.Element => {
  return (
    <Box className={styles.banner}>
      <Wrapper>
        <Breadcrumbs items={breadcrumbs} />
        <div className={styles.banner__buttons}>
          <div className={styles.banner__buttons__socials}>
            <IconButton children={<FacebookIcon />} />
            <IconButton children={<TwitterIcon />} />
          </div>
          <div className={styles.banner__buttons__share}>
            <IconButton children={<ShareIcon />} />
          </div>
        </div>
        <Box className={styles.banner__avatar}>
          <Avatar src={AvatarImg.src} />
        </Box>
      </Wrapper>
    </Box>
  );
};
